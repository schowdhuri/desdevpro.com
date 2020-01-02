const visit = require("unist-util-visit");
const isRelativeUrl = require("is-relative-url");
const fs = require("fs");
const path = require("path");

module.exports = ({
  files,
  linkPrefix,
  markdownNode,
  markdownAST,
  getNode
}) => {
  // Copy linked files to the public directory and modify the AST to point to
  // new location of the files.
  const visitor = link => {
    if (isRelativeUrl(link.url) && /.svg$/.test(link.url)) {
      const linkPath = path.join(getNode(markdownNode.parent).dir, link.url);
      const linkNode = files.find(file => {
        if (file && file.absolutePath) {
          return file.absolutePath === linkPath;
        }
        return null;
      });
      if (linkNode && linkNode.absolutePath) {
        const newPath = path.join(
          process.cwd(),
          "public",
          "static",
          `${linkNode.relativePath}`,
        );
        link.url = path.join(linkPrefix || "/static", linkNode.relativePath);
        if (!fs.existsSync(newPath)) {
          // console.log(link.url, linkNode.relativePath, linkPath, newPath)
          fs.copyFile(linkPath, newPath, err => {
            if (err) {
              console.error("error copying file", err);
            }
          });
        }
      }
    }
  };
  visit(markdownAST, "image", image => visitor(image));
};

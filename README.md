# [desdevpro.com](https://wwww.desdevpro.com/)

## Frontmatter Schema

### Article
```yml
category: blog # must match one of the `catId` values (see Category)
coverImage: Cover.jpg # Optional
date: "2020-12-12" # ISO date
meta:
  author: Subir Chowdhuri
  description: meta description
status: live
summary: HTML description # HTML supported; used on the category landing page
path: article-slug # slug
tags:
  - Hardware # The first tag is used on the landing page
  - Raspberry
title: Title of the post
type: article # must be set to `article`
updated: "2014-12-12" # required; set to the creation date
```

### Category

```yml
catId: blog
title: Articles
path: blog
type: category # must be set to `category`
meta:
  description: Blog home # plaintext
  keywords: projects, desdevpro
```

### Status

1. `live`: Live post
1. `draft`: Post can be accessed at its URL, but is not indexed
1. `hidden`: Post skipped during the build process

## Development

### Dev Server
```sh
yarn start
```

### Adding a New Article
1. Create a new folder in the `content/articles` directory
1. Add a `.mdx` file (name is irrelevant) inside
1. Drop images in the same directory
1. If the dev server was started before the folder was created, it will need to be restarted

### Build

```sh
yarn build
```

### Deploy

```sh
yarn deploy
```

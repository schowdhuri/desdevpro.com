(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(t,e,i){"use strict";i.r(e),i.d(e,"pageQuery",(function(){return w}));var n=i("q1tI"),a=i.n(n),r=i("vOnD"),o=i("V4UG"),s=i.n(o),c=i("Wbzz"),l=i("7oih"),m=i("MnMr");var p=r.b.img.withConfig({displayName:"pages__Cover",componentId:"sc-61e6mt-0"})(["display:block;height:200px;object-fit:cover;transition:transform 0.5s;width:100%;"]);p.Wrapper=Object(r.b)(c.a).withConfig({displayName:"pages__Wrapper",componentId:"sc-61e6mt-1"})(["border-radius:2px 2px 0 0;display:block;height:200px;overflow:hidden;"]);var h=r.b.li.withConfig({displayName:"pages__Article",componentId:"sc-61e6mt-2"})(["background:",";border-radius:2px;box-shadow:0 1px 8px ",";font-size:",";padding:0;width:90vw;@media ","{width:300px;}&:hover{","{transform:scale(1.05);}}"],m.a.cardBg,m.a.gray[1],m.d,m.m,p),d=r.b.ul.withConfig({displayName:"pages__Feed",componentId:"sc-61e6mt-3"})(["list-style-type:none;margin:2rem 1rem;padding:0;&.css-layout{display:flex;flex-wrap:wrap;","{margin:10px;}}"],h),u=r.b.label.withConfig({displayName:"pages__Tag",componentId:"sc-61e6mt-4"})(["color:",";display:block;font-weight:bold;margin-top:12px;padding-left:1rem;text-transform:capitalize;@media ","{font-size:0.85rem;text-transform:uppercase;}"],m.a.primary,m.m),f=r.b.h1.withConfig({displayName:"pages__Title",componentId:"sc-61e6mt-5"})(["font-size:",";font-weight:600;margin-top:-1rem;padding:1rem;position:relative;&:after{background:none repeat scroll 0 0 ",';bottom:0;content:"";height:4px;left:0;position:absolute;width:90px;}a{color:',";text-decoration:none;transition:color 0.2s;&:hover,&:focus{color:",";}}"],m.j[5],m.a.primary,m.a.gray[4],m.a.secondary),g=r.b.p.withConfig({displayName:"pages__Summary",componentId:"sc-61e6mt-6"})(["@media ","{font-size:0.9rem;}padding:1rem;"],m.m),y=r.b.div.withConfig({displayName:"pages__Misc",componentId:"sc-61e6mt-7"})(["align-items:center;color:",";display:flex;padding:1rem;"],m.a.gray[3]);y.Date=r.b.span.withConfig({displayName:"pages__Date",componentId:"sc-61e6mt-8"})(["display:block;margin-left:4px;@media ","{font-size:0.85rem;}"],m.m);var w="4111541953";e.default=function(t){var e=Object(n.useState)(!0),i=e[0],r=e[1];return Object(n.useEffect)((function(){r(!1),new s.a({container:".article-grid",animate:!1,gutter:20,static:!0,useMin:!0,maxColumns:4}).listen()}),[]),a.a.createElement(l.a,{config:{title:"Desdevpro | Experiments in open hardware and software",meta:"Desdevpro | Experiments in open hardware and software"}},a.a.createElement(d,{className:"article-grid "+(i?"css-layout":"")},t.data.allMdx.edges.map((function(t){var e=t.node;return a.a.createElement(h,{key:e.id},!e.frontmatter.coverImage||a.a.createElement(p.Wrapper,{to:"/"+e.frontmatter.category+"/"+e.frontmatter.path+"/"},a.a.createElement(p,{src:e.frontmatter.coverImage.childImageSharp.resize.src,alt:e.frontmatter.title,loading:"lazy"})),a.a.createElement(u,null,"#",e.frontmatter.tags[0]),a.a.createElement(f,null,a.a.createElement(c.a,{to:"/"+e.frontmatter.category+"/"+e.frontmatter.path+"/"},e.frontmatter.title)),a.a.createElement(g,null,e.excerpt),a.a.createElement(y,null,a.a.createElement("i",{className:"icon icon-calendar"}),a.a.createElement(y.Date,null,e.frontmatter.date)))}))))}},V4UG:function(t,e,i){i("m210"),i("4DPX"),i("rzGZ"),t.exports=function(){"use strict";var t=function(t){if(!t)throw new Error("No config object has been provided.");"boolean"!=typeof t.useTransform&&(t.useTransform=!0),"number"!=typeof t.gutter&&(t.gutter=25),t.container||e("container"),t.items||t.static||e("items or static")},e=function(t){throw new Error("Missing property '"+t+"' in MagicGrid config")},i=function(e){t(e),e.container instanceof HTMLElement?(this.container=e.container,this.containerClass=e.container.className):(this.containerClass=e.container,this.container=document.querySelector(e.container)),this.items=this.container.children,this.static=e.static||!1,this.size=e.items,this.gutter=e.gutter,this.maxColumns=e.maxColumns||!1,this.useMin=e.useMin||!1,this.useTransform=e.useTransform,this.animate=e.animate||!1,this.started=!1,this.init()};return i.prototype.init=function(){if(this.ready()&&!this.started){this.container.style.position="relative";for(var t=0;t<this.items.length;t++){var e=this.items[t].style;e.position="absolute",this.animate&&(e.transition=(this.useTransform?"transform":"top, left")+" 0.2s ease")}this.started=!0}},i.prototype.colWidth=function(){return this.items[0].getBoundingClientRect().width+this.gutter},i.prototype.setup=function(){var t=this.container.getBoundingClientRect().width,e=this.colWidth(),i=Math.floor(t/e)||1,n=[];this.maxColumns&&i>this.maxColumns&&(i=this.maxColumns);for(var a=0;a<i;a++)n[a]={height:0,index:a};return{cols:n,wSpace:t-i*e+this.gutter}},i.prototype.nextCol=function(t,e){return this.useMin?function(t){var e=t[0],i=!0,n=!1,a=void 0;try{for(var r,o=t[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var s=r.value;s.height<e.height&&(e=s)}}catch(c){n=!0,a=c}finally{try{i||null==o.return||o.return()}finally{if(n)throw a}}return e}(t):t[e%t.length]},i.prototype.positionItems=function(){var t=this.setup(),e=t.cols,i=t.wSpace,n=0,a=this.colWidth();i=Math.floor(i/2);for(var r=0;r<this.items.length;r++){var o=this.nextCol(e,r),s=this.items[r],c=o.height?this.gutter:0,l=o.index*a+i+"px",m=o.height+c+"px";this.useTransform?s.style.transform="translate("+l+", "+m+")":(s.style.top=m,s.style.left=l),o.height+=s.getBoundingClientRect().height+c,o.height>n&&(n=o.height)}this.container.style.height=n+"px"},i.prototype.ready=function(){return!!this.static||this.items.length>=this.size},i.prototype.getReady=function(){var t=this,e=setInterval((function(){t.container=document.querySelector(t.containerClass),t.items=t.container.children,t.ready()&&(clearInterval(e),t.init(),t.listen())}),100)},i.prototype.listen=function(){var t,e=this;this.ready()?(window.addEventListener("resize",(function(){t||(t=setTimeout((function(){e.positionItems(),t=null}),200))})),this.positionItems()):this.getReady()},i}()}}]);
//# sourceMappingURL=component---src-pages-index-js-32ed1ae606ccc2f45082.js.map
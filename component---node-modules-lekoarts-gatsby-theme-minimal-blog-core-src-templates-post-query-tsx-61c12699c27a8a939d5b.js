(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},TI0m:function(e,t,n){"use strict";var r=n("q1tI"),c=n.n(r),a=n("izhR"),o=n("Wbzz"),i=n("dq5L"),s=n("n/Q7");t.a=function(e){var t=e.tags,n=Object(i.a)(),r=n.tagsPath,u=n.basePath;return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:e.slug},!!t&&", ",c.a.createElement(a.e,{as:o.Link,to:Object(s.a)("/"+u+"/"+r+"/"+e.slug)},e.name))})))}},X8hv:function(e,t,n){var r=n("+g+W"),c=n("ZGFM"),a=n("0j+7"),o=n("u0WH");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),p=n("7ljp").mdx,l=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=o(e,["scope","children"]),i=l(t),b=u.useMemo((function(){if(!n)return null;var e=s({React:u,mdx:p},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+n])).apply(void 0,[{}].concat(c(a)))}),[n,t]);return u.createElement(b,s({},a))}},ZGFM:function(e,t,n){var r=n("Z5Ud"),c=n("4TKZ"),a=n("o/O1"),o=n("VjHQ");e.exports=function(e){return r(e)||c(e)||a(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},xdpm:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),c=n.n(r),a=n("2A+t"),o=n("izhR"),i=n("A2+M"),s=n("Q3iF"),u=n("TI0m"),p=n("GIzu"),l=["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),b=function(e){var t=e.data.post;return Object(a.c)(s.a,null,Object(a.c)(p.a,{title:t.title,description:t.description?t.description:t.excerpt,image:t.banner?t.banner.childImageSharp.resize.src:void 0,pathname:t.slug,canonicalUrl:t.canonicalUrl}),Object(a.c)(o.d,{as:"h1",variant:"styles.h1"},t.title),Object(a.c)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(a.c)("time",null,t.date),t.tags&&Object(a.c)(c.a.Fragment,null," — ",Object(a.c)(u.a,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&Object(a.c)("span",null,t.timeToRead," min read")),Object(a.c)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:l.join(", ")},variant:"layout.content"}},Object(a.c)(i.MDXRenderer,null,t.body)))};t.default=function(e){var t=Object.assign({},e);return c.a.createElement(b,t)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-61c12699c27a8a939d5b.js.map
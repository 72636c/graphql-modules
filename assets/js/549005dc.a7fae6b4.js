"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7519],{4137:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,p(p({ref:t},l),{},{components:r})):n.createElement(h,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4538:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(4137)),p=["components"],s={id:"graphql-inspector",title:"Integrate With GraphQL Inspector",sidebar_label:"GraphQL Inspector"},i=void 0,c={unversionedId:"recipes/graphql-inspector",id:"version-legacy/recipes/graphql-inspector",isDocsHomePage:!1,title:"Integrate With GraphQL Inspector",description:"GraphQL Inspector outputs a list of changes between two GraphQL schemas.",source:"@site/versioned_docs/version-legacy/recipes/graphql-inspector.md",sourceDirName:"recipes",slug:"/recipes/graphql-inspector",permalink:"/docs/legacy/recipes/graphql-inspector",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/graphql-inspector.md",version:"legacy",frontMatter:{id:"graphql-inspector",title:"Integrate With GraphQL Inspector",sidebar_label:"GraphQL Inspector"},sidebar:"version-legacy/docs",previous:{title:"Generate Types Using GraphQL Code Generator",permalink:"/docs/legacy/recipes/graphql-code-generator"},next:{title:"TypeGraphQL",permalink:"/docs/legacy/recipes/type-graphql"}},l=[],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://graphql-inspector.com/"},"GraphQL Inspector"))," outputs a list of changes between two GraphQL schemas.\nEvery change is precisely explained and marked as breaking, non-breaking or dangerous.\nIt helps you validate documents and fragments against a schema and even find similar or duplicated types."),(0,o.kt)("p",null,"GraphQL Modules comes with a built-in support for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://graphql-inspector.com/"},"GraphQL Inspector")),"."),(0,o.kt)("p",null,"To get started, add ",(0,o.kt)("inlineCode",{parentName:"p"},"@graphql-inspector/cli")," to your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @graphql-inspector/cli\n")),(0,o.kt)("p",null,"And create ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.ts")," to expose the schema of your GraphQL Modules application.\nGraphQL Modules won't load other things such as injectors, resolvers and providers when you just try to get type definitions from your top module, because GraphQL Modules loads every part of module lazily."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"src/schema.ts")," to expose your type definitions to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://graphql-inspector.com/"},"GraphQL Inspector"))," without any business logic.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"src/schema.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppModule } from './modules/app.module';\n\n// Get schema from top module, and export it\nexport default AppModule.schema;\n")),(0,o.kt)("p",null,"Then, you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"introspect ./schema.ts --require ts-node/register\n")),(0,o.kt)("p",null,"See also ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://graphql-inspector.com/docs/"},"the documentation of GraphQL Inspector"))," to learn more."))}d.isMDXComponent=!0}}]);
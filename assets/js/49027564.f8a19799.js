(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{133:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},g=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),g=n,b=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(8),a=(t(0),t(133)),p={id:"graphql-code-generator",title:"Integrate With GraphQL Code Generator",sidebar_label:"Generate Types Using GraphQL Code Generator"},c={unversionedId:"recipes/graphql-code-generator",id:"version-legacy/recipes/graphql-code-generator",isDocsHomePage:!1,title:"Integrate With GraphQL Code Generator",description:"GraphQL Modules comes with a built-in support for GraphQL Code Generator",source:"@site/versioned_docs/version-legacy/recipes/graphql-code-generator.md",slug:"/recipes/graphql-code-generator",permalink:"/docs/legacy/recipes/graphql-code-generator",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/graphql-code-generator.md",version:"legacy",sidebar_label:"Generate Types Using GraphQL Code Generator",sidebar:"version-legacy/docs",previous:{title:"Integration With Apollo-Server",permalink:"/docs/legacy/recipes/apollo-server"},next:{title:"Integrate With GraphQL Inspector",permalink:"/docs/legacy/recipes/graphql-inspector"}},i=[{value:"Installing Dependencies",id:"installing-dependencies",children:[]},{value:"Exposing Schema to GraphQL Code Generator",id:"exposing-schema-to-graphql-code-generator",children:[]},{value:"Creating Configuration for GraphQL Code Generator",id:"creating-configuration-for-graphql-code-generator",children:[]},{value:"Using Generated Typings",id:"using-generated-typings",children:[]}],s={toc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL Modules comes with a built-in support for ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://graphql-code-generator.com"},"GraphQL Code Generator"))),Object(a.b)("h2",{id:"installing-dependencies"},"Installing Dependencies"),Object(a.b)("p",null,"To get started, add ",Object(a.b)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," and necessary templates to your app:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"    yarn add @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers\n")),Object(a.b)("p",null,"And create ",Object(a.b)("inlineCode",{parentName:"p"},"schema.ts")," to expose the schema of your GraphQL Modules application.\nGraphQL Modules won't load any other things such as injectors, resolvers and providers when you just try to get type definitions from your top module, because GraphQL Modules loads every part of module lazily."),Object(a.b)("h2",{id:"exposing-schema-to-graphql-code-generator"},"Exposing Schema to GraphQL Code Generator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create ",Object(a.b)("inlineCode",{parentName:"li"},"src/schema.ts")," to expose your type definitions to GraphQL Code Generator without any business logic.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"src/schema.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { AppModule } from './modules/app.module';\n\n// Get typeDefs from top module, and export it\nexport default AppModule.schema;\n")),Object(a.b)("h2",{id:"creating-configuration-for-graphql-code-generator"},"Creating Configuration for GraphQL Code Generator"),Object(a.b)("p",null,"Then create ",Object(a.b)("inlineCode",{parentName:"p"},"codegen.yml")," on your project root.\nIn the example below, TypeScript files are emitted.\nCheck ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://graphql-code-generator.com/"},"the GraphQL Code Generator website"))," for more details."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"codegen.yml")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"overwrite: true\nschema: ./src/schema.ts # You can use .js files as well\nrequire:\n  - ts-node/register/transpile-only # required if you're using TS-Node\ngenerates:\n  ./src/generated-models.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers\n    config:\n      contextType: @graphql-modules/core#ModuleContext\n")),Object(a.b)("p",null,"You can add a script to ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  //...\n  "scripts": {\n    //...\n    "generate-types": "graphql-codegen"\n    //...\n  }\n  //...\n}\n')),Object(a.b)("h2",{id:"using-generated-typings"},"Using Generated Typings"),Object(a.b)("p",null,"Then you can use these generated typings everywhere in your project;"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { UsersProvider } from '../providers/users.provider';\nimport { QueryResolvers } from '../../generated-models';\n\nexport const Query: QueryResolvers = {\n  // all parameters and return value are typed\n  users: (root, args, context, info) =>\n    context.injector.get(UsersProvider).getUsers(args),\n};\n")),Object(a.b)("p",null,"The article ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://medium.com/p/c22f6caa17b8"},"Writing Strict-Typed GraphQL TypeScript project w/ GraphQL Modules and GraphQL Code Generator"))," explains why you would need this integration."))}l.isMDXComponent=!0}}]);
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6962],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return g}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return t?n.createElement(h,p(p({ref:r},c),{},{components:t})):n.createElement(h,p({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3227:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),p={id:"graphql-code-generator",title:"Integrate With GraphQL Code Generator",sidebar_label:"Generate Types Using GraphQL Code Generator"},i={unversionedId:"recipes/graphql-code-generator",id:"version-legacy/recipes/graphql-code-generator",isDocsHomePage:!1,title:"Integrate With GraphQL Code Generator",description:"GraphQL Modules comes with a built-in support for GraphQL Code Generator",source:"@site/versioned_docs/version-legacy/recipes/graphql-code-generator.md",sourceDirName:"recipes",slug:"/recipes/graphql-code-generator",permalink:"/docs/legacy/recipes/graphql-code-generator",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/graphql-code-generator.md",version:"legacy",sidebar_label:"Generate Types Using GraphQL Code Generator",frontMatter:{id:"graphql-code-generator",title:"Integrate With GraphQL Code Generator",sidebar_label:"Generate Types Using GraphQL Code Generator"},sidebar:"version-legacy/docs",previous:{title:"Integration With Apollo-Server",permalink:"/docs/legacy/recipes/apollo-server"},next:{title:"Integrate With GraphQL Inspector",permalink:"/docs/legacy/recipes/graphql-inspector"}},s=[{value:"Installing Dependencies",id:"installing-dependencies",children:[]},{value:"Exposing Schema to GraphQL Code Generator",id:"exposing-schema-to-graphql-code-generator",children:[]},{value:"Creating Configuration for GraphQL Code Generator",id:"creating-configuration-for-graphql-code-generator",children:[]},{value:"Using Generated Typings",id:"using-generated-typings",children:[]}],l={toc:s};function c(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Modules comes with a built-in support for ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://graphql-code-generator.com"},"GraphQL Code Generator"))),(0,a.kt)("h2",{id:"installing-dependencies"},"Installing Dependencies"),(0,a.kt)("p",null,"To get started, add ",(0,a.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," and necessary templates to your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    yarn add @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers\n")),(0,a.kt)("p",null,"And create ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.ts")," to expose the schema of your GraphQL Modules application.\nGraphQL Modules won't load any other things such as injectors, resolvers and providers when you just try to get type definitions from your top module, because GraphQL Modules loads every part of module lazily."),(0,a.kt)("h2",{id:"exposing-schema-to-graphql-code-generator"},"Exposing Schema to GraphQL Code Generator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create ",(0,a.kt)("inlineCode",{parentName:"li"},"src/schema.ts")," to expose your type definitions to GraphQL Code Generator without any business logic.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src/schema.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AppModule } from './modules/app.module';\n\n// Get typeDefs from top module, and export it\nexport default AppModule.schema;\n")),(0,a.kt)("h2",{id:"creating-configuration-for-graphql-code-generator"},"Creating Configuration for GraphQL Code Generator"),(0,a.kt)("p",null,"Then create ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen.yml")," on your project root.\nIn the example below, TypeScript files are emitted.\nCheck ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://graphql-code-generator.com/"},"the GraphQL Code Generator website"))," for more details."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"codegen.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"overwrite: true\nschema: ./src/schema.ts # You can use .js files as well\nrequire:\n  - ts-node/register/transpile-only # required if you're using TS-Node\ngenerates:\n  ./src/generated-models.ts:\n    plugins:\n      - typescript\n      - typescript-resolvers\n    config:\n      contextType: @graphql-modules/core#ModuleContext\n")),(0,a.kt)("p",null,"You can add a script to ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  //...\n  "scripts": {\n    //...\n    "generate-types": "graphql-codegen"\n    //...\n  }\n  //...\n}\n')),(0,a.kt)("h2",{id:"using-generated-typings"},"Using Generated Typings"),(0,a.kt)("p",null,"Then you can use these generated typings everywhere in your project;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UsersProvider } from '../providers/users.provider';\nimport { QueryResolvers } from '../../generated-models';\n\nexport const Query: QueryResolvers = {\n  // all parameters and return value are typed\n  users: (root, args, context, info) =>\n    context.injector.get(UsersProvider).getUsers(args),\n};\n")),(0,a.kt)("p",null,"The article ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://medium.com/p/c22f6caa17b8"},"Writing Strict-Typed GraphQL TypeScript project w/ GraphQL Modules and GraphQL Code Generator"))," explains why you would need this integration."))}c.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(133)),i={id:"nexus",title:"Nexus Integration",sidebar_label:"Nexus"},s={unversionedId:"recipes/nexus",id:"version-legacy/recipes/nexus",isDocsHomePage:!1,title:"Nexus Integration",description:"Nexus is another alternative that follows the code-first approach for your GraphQL Server implementation.",source:"@site/versioned_docs/version-legacy/recipes/nexus.md",slug:"/recipes/nexus",permalink:"/docs/legacy/recipes/nexus",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/nexus.md",version:"legacy",sidebar_label:"Nexus",sidebar:"version-legacy/docs",previous:{title:"TypeGraphQL Integration",permalink:"/docs/legacy/recipes/type-graphql"}},p=[{value:"Integration with other implementations",id:"integration-with-other-implementations",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://nexus.js.org/"},"Nexus"))," is another alternative that follows the code-first approach for your GraphQL Server implementation."),Object(a.b)("p",null,"Nexus provides you an API to create your type definitions together with resolvers. But, it doesn\u2019t use any TypeScript classes or decorators like ",Object(a.b)("strong",{parentName:"p"},"TypeGraphQL"),".\nNexus comes with a set of tools that generates TypeScript typings in the development stage or you need to write your typings on your own."),Object(a.b)("p",null,"You can add fields dynamically for types inside closures, and this way you have use the power of ",Object(a.b)("strong",{parentName:"p"},"JavaScript")," instead of dealing with objects like in ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-js"),"."),Object(a.b)("p",null,"With GraphQL Modules, you can seperate generated typings module by module, and this will prevent to have an over-complicated schema implementation for your GraphQL Server."),Object(a.b)("p",null,"You can define different output folders like below, so every module will have its own typings instead of having a single typing file for all application."),Object(a.b)("p",null,"Let's start with creating types using Nexus API:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"chat.type.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { objectType } from 'nexus';\n\nexport const Chat = objectType({\n  name: 'Chat',\n  definition: (t) => {\n    t.id('id');\n    t.string('title');\n    t.string('description');\n  },\n});\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"query.type.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { objectType, intArg } from 'nexus';\nimport { ModuleContext } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\n\nexport const Query = objectType({\n  name: 'Query',\n  definition: (t) => {\n    t.list.field('chats', {\n      type: 'Chat',\n      resolve: (root, args, { injector }: ModuleContext) =>\n        injector.get(ChatsProvider).getChats(),\n    });\n    t.field('chat', {\n      type: 'Chat',\n      args: {\n        id: intArg(),\n      },\n      resolve: (root, { id }, { injector }: ModuleContext) =>\n        injector.get(ChatsProvider).getChat(id),\n    });\n  },\n});\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"mutation.type.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { objectType, intArg, stringArg } from 'nexus';\nimport { ModuleContext } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\n\nexport const Mutation = objectType({\n  name: 'Mutation',\n  definition: (t) => {\n    t.field('createChat', {\n      type: 'Chat',\n      args: {\n        title: stringArg(),\n        description: stringArg(),\n      },\n      resolve: (root, { title, description }, { injector }: ModuleContext) =>\n        injector\n          .get(ChatsProvider)\n          .createChat({ id: Math.random(), title, description }),\n    });\n    t.int('deleteChat', {\n      args: {\n        id: intArg(),\n      },\n      resolve: (root, { id }, { injector }: ModuleContext) =>\n        injector.get(ChatsProvider).deleteChat(id),\n    });\n  },\n});\n")),Object(a.b)("p",null,"You can easily access dependency injection of GraphQL Modules by using the context.\nIt is also really easy to connect the schemas generated by Nexus to a GraphQLModule."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"chats.module.ts")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\nimport { ChatEntity } from './chat.entity-type';\nimport { CHATS } from './chats.symbol';\nimport { makeSchema } from 'nexus';\nimport { Chat } from './chat.type';\nimport { Query } from './query.type';\nimport { Mutation } from './mutation.type';\nimport { join } from 'path';\n\nexport const ChatsModule = new GraphQLModule({\n  providers: [ChatsProvider],\n  extraSchemas: [\n    makeSchema({\n      types: [Chat, Query, Mutation],\n      outputs: {\n        schema: join(__dirname, './generated/chats.schema.graphql'),\n        typegen: join(__dirname, './generated/chats.types.d.ts'),\n      },\n    }),\n  ],\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"In this case, GraphQL Modules helps you to create standalone modules with encapsulated schemas.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Check out ",Object(a.b)("a",{parentName:"p",href:"https://github.com/ardatan/NexusGraphQLModules"},"our example with Nexus"),".")),Object(a.b)("h2",{id:"integration-with-other-implementations"},"Integration with other implementations"),Object(a.b)("p",null,"You can merge different modules from different implementations like below.\nSo you don't have to use the same implementation method in all modules.\nGraphQL Modules will handle schema merging for you, even if they are from different implementations."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"new GraphQLModule({\n  imports: [\n    XModuleCreatedUsingSchemaFirst,\n    YModuleCreatedUsingNexus,\n    ZModuleCreatedUsingTypeGraphQL,\n  ],\n});\n")))}l.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(h,s(s({ref:t},c),{},{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3683:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"nexus",title:"Nexus Integration",sidebar_label:"Nexus"},s={unversionedId:"recipes/nexus",id:"version-legacy/recipes/nexus",isDocsHomePage:!1,title:"Nexus Integration",description:"Nexus is another alternative that follows the code-first approach for your GraphQL Server implementation.",source:"@site/versioned_docs/version-legacy/recipes/nexus.md",sourceDirName:"recipes",slug:"/recipes/nexus",permalink:"/docs/legacy/recipes/nexus",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/nexus.md",version:"legacy",sidebar_label:"Nexus",frontMatter:{id:"nexus",title:"Nexus Integration",sidebar_label:"Nexus"},sidebar:"version-legacy/docs",previous:{title:"TypeGraphQL Integration",permalink:"/docs/legacy/recipes/type-graphql"}},p=[{value:"Integration with other implementations",id:"integration-with-other-implementations",children:[]}],l={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://nexus.js.org/"},"Nexus"))," is another alternative that follows the code-first approach for your GraphQL Server implementation."),(0,a.kt)("p",null,"Nexus provides you an API to create your type definitions together with resolvers. But, it doesn\u2019t use any TypeScript classes or decorators like ",(0,a.kt)("strong",{parentName:"p"},"TypeGraphQL"),".\nNexus comes with a set of tools that generates TypeScript typings in the development stage or you need to write your typings on your own."),(0,a.kt)("p",null,"You can add fields dynamically for types inside closures, and this way you have use the power of ",(0,a.kt)("strong",{parentName:"p"},"JavaScript")," instead of dealing with objects like in ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-js"),"."),(0,a.kt)("p",null,"With GraphQL Modules, you can seperate generated typings module by module, and this will prevent to have an over-complicated schema implementation for your GraphQL Server."),(0,a.kt)("p",null,"You can define different output folders like below, so every module will have its own typings instead of having a single typing file for all application."),(0,a.kt)("p",null,"Let's start with creating types using Nexus API:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chat.type.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { objectType } from 'nexus';\n\nexport const Chat = objectType({\n  name: 'Chat',\n  definition: (t) => {\n    t.id('id');\n    t.string('title');\n    t.string('description');\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"query.type.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { objectType, intArg } from 'nexus';\nimport { ModuleContext } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\n\nexport const Query = objectType({\n  name: 'Query',\n  definition: (t) => {\n    t.list.field('chats', {\n      type: 'Chat',\n      resolve: (root, args, { injector }: ModuleContext) =>\n        injector.get(ChatsProvider).getChats(),\n    });\n    t.field('chat', {\n      type: 'Chat',\n      args: {\n        id: intArg(),\n      },\n      resolve: (root, { id }, { injector }: ModuleContext) =>\n        injector.get(ChatsProvider).getChat(id),\n    });\n  },\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mutation.type.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { objectType, intArg, stringArg } from 'nexus';\nimport { ModuleContext } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\n\nexport const Mutation = objectType({\n  name: 'Mutation',\n  definition: (t) => {\n    t.field('createChat', {\n      type: 'Chat',\n      args: {\n        title: stringArg(),\n        description: stringArg(),\n      },\n      resolve: (root, { title, description }, { injector }: ModuleContext) =>\n        injector\n          .get(ChatsProvider)\n          .createChat({ id: Math.random(), title, description }),\n    });\n    t.int('deleteChat', {\n      args: {\n        id: intArg(),\n      },\n      resolve: (root, { id }, { injector }: ModuleContext) =>\n        injector.get(ChatsProvider).deleteChat(id),\n    });\n  },\n});\n")),(0,a.kt)("p",null,"You can easily access dependency injection of GraphQL Modules by using the context.\nIt is also really easy to connect the schemas generated by Nexus to a GraphQLModule."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chats.module.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\nimport { ChatEntity } from './chat.entity-type';\nimport { CHATS } from './chats.symbol';\nimport { makeSchema } from 'nexus';\nimport { Chat } from './chat.type';\nimport { Query } from './query.type';\nimport { Mutation } from './mutation.type';\nimport { join } from 'path';\n\nexport const ChatsModule = new GraphQLModule({\n  providers: [ChatsProvider],\n  extraSchemas: [\n    makeSchema({\n      types: [Chat, Query, Mutation],\n      outputs: {\n        schema: join(__dirname, './generated/chats.schema.graphql'),\n        typegen: join(__dirname, './generated/chats.types.d.ts'),\n      },\n    }),\n  ],\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this case, GraphQL Modules helps you to create standalone modules with encapsulated schemas.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/NexusGraphQLModules"},"our example with Nexus"),".")),(0,a.kt)("h2",{id:"integration-with-other-implementations"},"Integration with other implementations"),(0,a.kt)("p",null,"You can merge different modules from different implementations like below.\nSo you don't have to use the same implementation method in all modules.\nGraphQL Modules will handle schema merging for you, even if they are from different implementations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new GraphQLModule({\n  imports: [\n    XModuleCreatedUsingSchemaFirst,\n    YModuleCreatedUsingNexus,\n    ZModuleCreatedUsingTypeGraphQL,\n  ],\n});\n")))}c.isMDXComponent=!0}}]);
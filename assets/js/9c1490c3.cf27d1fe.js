"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8342],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],p={id:"type-graphql",title:"TypeGraphQL Integration",sidebar_label:"TypeGraphQL"},s=void 0,l={unversionedId:"recipes/type-graphql",id:"version-legacy/recipes/type-graphql",isDocsHomePage:!1,title:"TypeGraphQL Integration",description:"TypeGraphQL is a set of tools that provides you some decorators that can be used for writing your GraphQL definitions.",source:"@site/versioned_docs/version-legacy/recipes/type-graphql.md",sourceDirName:"recipes",slug:"/recipes/type-graphql",permalink:"/docs/legacy/recipes/type-graphql",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/type-graphql.md",version:"legacy",frontMatter:{id:"type-graphql",title:"TypeGraphQL Integration",sidebar_label:"TypeGraphQL"},sidebar:"version-legacy/docs",previous:{title:"GraphQL Inspector",permalink:"/docs/legacy/recipes/graphql-inspector"},next:{title:"Nexus",permalink:"/docs/legacy/recipes/nexus"}},c=[{value:"Integration with other implementations",id:"integration-with-other-implementations",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TypeGraphQL")," is a set of tools that provides you some decorators that can be used for writing your GraphQL definitions.\nYou can define your type definitions and resolvers using ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," classes thanks to ",(0,a.kt)("strong",{parentName:"p"},"TypeGraphQL")," decorators.\nYou can check out ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://typegraphql.com/"},"TypeGraphQL documents"))," to learn more."),(0,a.kt)("p",null,"Important: Make sure you follow the ",(0,a.kt)("a",{parentName:"p",href:"https://typegraphql.com/docs/installation.html"},"installation steps"),", such as installing ",(0,a.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," and configuring your typescript correctly."),(0,a.kt)("p",null,"On the other hand, GraphQL Modules provides encapsulated dependency injection which allows you to seperate your logic from resolvers.\nIt makes testing easy, because you can mock providers and stuff for dependency indejection.\nYou can write standalone modules in a code-first way."),(0,a.kt)("p",null,"You can import the schema that is generated by TypeGraphQL in your GraphQL Module."),(0,a.kt)("p",null,"Let's assume we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Chat")," type for base fields shared with the entity."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chat.type.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ObjectType, Field, ID } from 'type-graphql';\n\n@ObjectType()\nexport class Chat {\n  @Field((type) => ID)\n  id: number;\n\n  @Field()\n  title: string;\n\n  @Field({ nullable: true })\n  description?: string;\n}\n")),(0,a.kt)("p",null,"Create another class for our queries and mutations based on this type:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chat.resolver.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ChatsProvider } from './chats.provider';\nimport { Resolver, Mutation, Arg, Int, Query } from 'type-graphql';\nimport { Chat } from './chat.type';\n\n@Resolver((of) => Chat)\nexport class ChatResolver {\n  constructor(private chatsProvider: ChatsProvider) {}\n\n  @Query((returns) => [Chat])\n  chats() {\n    return this.chatsProvider.getChats();\n  }\n\n  @Query((returns) => Chat)\n  chat(@Arg('id') id: number) {\n    return this.chatsProvider.getChat(id);\n  }\n\n  @Mutation((returns) => Chat)\n  createChat(\n    @Arg('title') title: string,\n    @Arg('description') description: string\n  ) {\n    return this.chatsProvider.createChat({\n      id: Math.random(),\n      title,\n      description,\n    });\n  }\n\n  @Mutation((returns) => Int)\n  deleteChat(@Arg('id') id: number) {\n    return this.chatsProvider.deleteChat(id);\n  }\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We can use dependency injection of GraphQL Modules in TypeGraphQL. Resolvers and Providers are part of dependency injection in that case.")),(0,a.kt)("p",null,"Then let's create our module:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chat.module.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport { ChatsProvider } from './chats.provider';\nimport { buildSchemaSync } from 'type-graphql';\nimport { ChatResolver } from './chat.resolver';\nimport { Chat } from './chat.type';\n\nconst resolvers = [ChatResolver];\n\nexport const ChatsModule = new GraphQLModule({\n  providers: [ChatsProvider, ...resolvers],\n  extraSchemas: [\n    buildSchemaSync({\n      resolvers,\n      container: ({ context }) =>\n        ChatsModule.injector.getSessionInjector(context),\n    }),\n  ],\n});\n")),(0,a.kt)("p",null,"We have to define resolver classes as providers because they are also part of our dependency injection.\n",(0,a.kt)("inlineCode",{parentName:"p"},"container: ({ context }) => ChatsModule.injector.getSessionInjector(context)")," tells TypeGraphQL to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChatsModule")," dependency injection container for those resolvers."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ardatan/TypeGraphQLModules"},"our example with TypeGraphQL"),".")),(0,a.kt)("h2",{id:"integration-with-other-implementations"},"Integration with other implementations"),(0,a.kt)("p",null,"You can merge different modules from different implementations like below.\nSo you don't have to use the same implementation method in all modules.\nGraphQL Modules will handle schema merging for you, even if they are from different implementations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new GraphQLModule({\n  imports: [\n    XModuleCreatedUsingSchemaFirst,\n    YModuleCreatedUsingNexus,\n    ZModuleCreatedUsingTypeGraphQL,\n  ],\n});\n")))}d.isMDXComponent=!0}}]);
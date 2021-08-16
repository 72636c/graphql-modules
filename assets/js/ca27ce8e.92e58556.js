"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1428],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),a=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=a(t),m=o,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var a=2;a<i;a++)s[a]=t[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3052:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return c},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(4137)),s=["components"],u={id:"test-your-module",title:"Test Your Module",sidebar_label:"Test Your Module"},l=void 0,a={unversionedId:"introduction/test-your-module",id:"version-legacy/introduction/test-your-module",isDocsHomePage:!1,title:"Test Your Module",description:"With GraphQL Modules and dependency injection it's much easier to test your modules.",source:"@site/versioned_docs/version-legacy/introduction/test-your-module.md",sourceDirName:"introduction",slug:"/introduction/test-your-module",permalink:"/docs/legacy/introduction/test-your-module",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/test-your-module.md",version:"legacy",frontMatter:{id:"test-your-module",title:"Test Your Module",sidebar_label:"Test Your Module"},sidebar:"version-legacy/docs",previous:{title:"Subscriptions",permalink:"/docs/legacy/introduction/subscriptions"},next:{title:"Development Environment",permalink:"/docs/legacy/recipes/development-environment"}},c=[],d={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With GraphQL Modules and dependency injection it's much easier to test your modules."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Make sure to follow our recommended ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/legacy/recipes/development-environment"},"development environment configurations"))," to get started with the test environment (we also recommend ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://jestjs.io/"},"Jest")),").")),(0,i.kt)("p",null,"So let's start with a basic module definition:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modules/user/user.module.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport gql from 'graphql-tag';\n\nexport class UsersProvider {\n  getUserById(id: string) {\n    // some business logic\n  }\n}\n\nexport const UserModule = new GraphQLModule({\n  providers: [UsersProvider],\n  typeDefs: gql`\n    type User {\n      id: String\n      username: String\n    }\n\n    type Query {\n      userById(id: String!): User\n    }\n  `,\n  resolvers: {\n    User: {\n      id: (user) => user._id,\n      username: (user) => user.username,\n    },\n    Query: {\n      userById: (root, { id }, injector) =>\n        injector.get(UsersProvider).getUserById(id),\n    },\n  },\n});\n")),(0,i.kt)("p",null,"You can mock providers by overwriting the existing provider definitions:"),(0,i.kt)("p",null,"tests/user.module.spec.ts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UserModule } from '../modules/user/user.module';\nimport { execute } from 'graphql';\ndescribe('UserModule', () => {\n  it('FieldResolver of Query: userById', async () => {\n    const { schema, injector } = UserModule;\n\n    injector.provide({\n      provide: UserProvider,\n      overwrite: true,\n      useValue: {\n        userById: (id: string) => ({ id, username: 'USERNAME' }),\n      },\n    });\n\n    const result = await execute({\n      schema,\n      document: gql`\n        query {\n          userById(id: \"ANOTHERID\") {\n            id\n            username\n          }\n        }\n      `,\n      contextValue: {},\n    });\n    expect(result.errors).toBeFalsy();\n    expect(result.data['userById']['id']).toBe('ANOTHERID');\n    expect(result.data['userById']['username']).toBe('USERNAME');\n  });\n});\n")),(0,i.kt)("p",null,"If you don't use DI, you can mock your context or resolvers like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"UsersModule.mock({\n  resolvers: {\n    Query: {\n      foo: (_, __, { fooProp }) => fooProp,\n    },\n  },\n  contextBuilder: () => ({\n    fooProp: 'FOO',\n  }),\n});\n")),(0,i.kt)("p",null,"For authentication (a common use case for mocking the context), if ",(0,i.kt)("inlineCode",{parentName:"p"},"UsersModule")," imports ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthModule")," and you want to mock the logged in user during tests to have an admin role, you can do this in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeAll"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"AuthModule.mock({\n  contextBuilder: () => ({\n    user: {\n      roles: ['admin'],\n    },\n  }),\n});\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"afterAll"),", or when you're done with the mock, run ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthModule.resetMock()"),"."))}p.isMDXComponent=!0}}]);
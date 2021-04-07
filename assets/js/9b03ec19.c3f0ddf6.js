(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(133)),c={id:"context",title:"Context",sidebar_label:"Context"},i={unversionedId:"introduction/context",id:"version-legacy/introduction/context",isDocsHomePage:!1,title:"Context",description:"In GraphQL, a context is an object shared by all the resolvers of a specific execution.",source:"@site/versioned_docs/version-legacy/introduction/context.md",slug:"/introduction/context",permalink:"/docs/legacy/introduction/context",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/context.md",version:"legacy",sidebar_label:"Context",sidebar:"version-legacy/docs",previous:{title:"Module Configuration",permalink:"/docs/legacy/introduction/configuration"},next:{title:"Resolvers Composition",permalink:"/docs/legacy/introduction/resolvers-composition"}},s=[{value:"Context Builders",id:"context-builders",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In GraphQL, a context is an object shared by all the resolvers of a specific execution.\nIt's useful for keeping data such as authentication info, the current user, database connection, data sources and other things you need for running your business logic."),Object(a.b)("p",null,"The context is available as the 3rd argument to each resolver:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const resolvers = {\n  Query: {\n    myQuery: (root, args, context, info) => {},\n  },\n};\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can read more about resolver in ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://www.apollographql.com/docs/graphql-tools/resolvers#Resolver-function-signature"},"Apollo Server documentation")),".")),Object(a.b)("p",null,"Since modules are isolated (see ",Object(a.b)("a",{parentName:"p",href:"https://medium.com/the-guild/why-is-true-modular-encapsulation-so-important-in-large-scale-graphql-projects-ed1778b03600"},"why"),"), there is no common context unless you explicitly create one. In the ",Object(a.b)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/security/authentication/#putting-user-info-on-the-context"},"case of authentication")," for example, you need to create an authentication module that places the authenticated user into the context, then explicitly import that authentication module from each module that uses authentication."),Object(a.b)("p",null,"GraphQL Modules also uses the context; it adds to the context a field called ",Object(a.b)("inlineCode",{parentName:"p"},"injector"),", which you can use to get access to the dependency injection container of your ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLModule"),"."),Object(a.b)("p",null,"You can use the ",Object(a.b)("inlineCode",{parentName:"p"},"injector")," from any resolver like that:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { ModuleContext } from '@graphql-modules/core';\n\nexport default {\n  Query: {\n    myQuery: (_, args, { injector }: ModuleContext) =>\n      injector.get(MyProvider).doSomething(),\n  },\n};\n")),Object(a.b)("h3",{id:"context-builders"},"Context Builders"),Object(a.b)("p",null,"In addition to the added ",Object(a.b)("inlineCode",{parentName:"p"},"injector"),", GraphQL Modules lets you add custom fields to the ",Object(a.b)("inlineCode",{parentName:"p"},"context"),"."),Object(a.b)("p",null,"Each module can have its own ",Object(a.b)("inlineCode",{parentName:"p"},"context")," function, which takes the network session that contains the request, the current context and the injector and can extend the GraphQL ",Object(a.b)("inlineCode",{parentName:"p"},"context")," with any field."),Object(a.b)("p",null,"To add a custom ",Object(a.b)("inlineCode",{parentName:"p"},"context")," to your ",Object(a.b)("inlineCode",{parentName:"p"},"GraphQLModule"),", do the following:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\nimport * as typeDefs from './schema.graphql';\nimport resolvers from './resolvers';\n\nexport interface IMyModuleContext {\n  myField: string;\n}\n\nexport const MyModule = new GraphQLModule<{}, {}, IMyModuleContext>({\n  typeDefs,\n  resolvers,\n  context: (session, currentContext, moduleSessionInfo) => {\n    return {\n      myField: 'some-value',\n    };\n  },\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Your custom context-building function should return either ",Object(a.b)("inlineCode",{parentName:"p"},"object")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Promise<object>"),".")),Object(a.b)("p",null,"Then, in any of your resolvers, you can access it this way:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { ModuleContext } from '@graphql-modules/core';\nimport { IMyModuleContext } from './my-module';\n\nexport default {\n  Query: {\n    myQuery: (_, args, { myField }: ModuleContext<IMyModuleContext>) =>\n      injector.get(MyProvider).doSomething(myField),\n  },\n};\n")),Object(a.b)("p",null,"You can also use this feature to implement authentication easily; you just access the network session, write async code, and return the current user, which is added to the ",Object(a.b)("inlineCode",{parentName:"p"},"context"),". For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule, Injector } from '@graphql-modules/core';\nimport * as typeDefs from './schema.graphql';\nimport resolvers from './resolvers';\nimport { AuthenticationProvider } from './auth-provider';\n\nexport interface User {\n  firstName: string;\n  lastName: string;\n}\n\nexport interface ISession {\n  req: express.Request;\n  res: express.Response;\n}\n\nexport const AuthModule = new GraphQLModule({\n  typeDefs,\n  resolvers,\n  providers: [AuthenticationProvider],\n  async context(session: ISession, currentContext, { injector }) {\n    const authToken = session.req.headers.authentication;\n    const currentUser = injector\n      .get(AuthenticationProvider)\n      .authorizeUser(authToken);\n    return {\n      currentUser,\n    };\n  },\n});\n")),Object(a.b)("p",null,"See also the article ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2"},"Authentication and Authorization in GraphQL (and how GraphQL-Modules can help)")),"."))}u.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
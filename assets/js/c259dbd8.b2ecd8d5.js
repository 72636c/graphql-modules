(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4140],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(y,l(l({ref:n},u),{},{components:t})):o.createElement(y,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,n,t){"use strict";var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},2168:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var o=t(7294),a=t(50),r=t(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var n=e.lazy,t=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,y=(0,a.Z)(),f=y.tabGroupChoices,h=y.setTabGroupChoices,k=(0,o.useState)(u),g=k[0],v=k[1],b=o.Children.toArray(e.children),M=[];if(null!=d){var w=f[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&v(w)}var N=function(e){var n=e.currentTarget,t=M.indexOf(n),o=p[t].value;v(o),null!=d&&(h(d,o),setTimeout((function(){var e,t,o,a,r,l,s,c;(e=n.getBoundingClientRect(),t=e.top,o=e.left,a=e.bottom,r=e.right,l=window,s=l.innerHeight,c=l.innerWidth,t>=0&&r<=c&&a<=s&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(i),setTimeout((function(){return n.classList.remove(i)}),2e3))}),150))},T=function(e){var n,t;switch(e.keyCode){case c:var o=M.indexOf(e.target)+1;t=M[o]||M[0];break;case s:var a=M.indexOf(e.target)-1;t=M[a]||M[M.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return M.push(e)},onKeyDown:T,onFocus:N,onClick:N},t)}))),n?(0,o.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},2713:function(e,n,t){"use strict";var o=(0,t(7294).createContext)(void 0);n.Z=o},50:function(e,n,t){"use strict";var o=t(7294),a=t(2713);n.Z=function(){var e=(0,o.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7163:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=t(2122),a=t(9756),r=(t(7294),t(3905)),l=t(2168),i=t(8448),s={id:"migration",title:"Migration from v0.X"},c={unversionedId:"recipes/migration",id:"recipes/migration",isDocsHomePage:!1,title:"Migration from v0.X",description:"Note: this page is still in progress!",source:"@site/docs/recipes/migration.md",sourceDirName:"recipes",slug:"/recipes/migration",permalink:"/docs/recipes/migration",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/recipes/migration.md",version:"current",frontMatter:{id:"migration",title:"Migration from v0.X"},sidebar:"docs",previous:{title:"Solve N+1 Using DataLoader",permalink:"/docs/recipes/dataloader"},next:{title:"API Reference",permalink:"/docs/api"}},u=[{value:"Package name",id:"package-name",children:[]},{value:"<code>DocumentNode</code> for <code>typeDefs</code>",id:"documentnode-for-typedefs",children:[]},{value:"Classes to Utility Functions",id:"classes-to-utility-functions",children:[]},{value:"Resolvers Composition =&gt; Middleware",id:"resolvers-composition--middleware",children:[]},{value:"Module/Application Structure",id:"moduleapplication-structure",children:[]},{value:"Shared Injectables",id:"shared-injectables",children:[]},{value:"Module Config",id:"module-config",children:[]},{value:"Session",id:"session",children:[]},{value:"Context",id:"context",children:[]},{value:"Dependency Injection Scopes",id:"dependency-injection-scopes",children:[]},{value:"Dependency Injection Hierarchy",id:"dependency-injection-hierarchy",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: this page is still in progress!")),(0,r.kt)("h2",{id:"package-name"},"Package name"),(0,r.kt)("p",null,"We decided to merge two existing packages ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-modules/core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-modules/di")," into a single package ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-modules"),".\nThere's no regression in terms of bundle size, because ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," was importing ",(0,r.kt)("inlineCode",{parentName:"p"},"di")," anyway."),(0,r.kt)("p",null,"Making GraphQL Modules a single package should improve the developer experience."),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { gql, createModule, Injectable } from 'graphql-modules';\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core`;\nimport { Injectable } from '@graphql-modules/di`;\nimport gql from 'graphql-tag';\n")))),(0,r.kt)("h2",{id:"documentnode-for-typedefs"},(0,r.kt)("inlineCode",{parentName:"h2"},"DocumentNode")," for ",(0,r.kt)("inlineCode",{parentName:"h2"},"typeDefs")),(0,r.kt)("p",null,"v0 accepted ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"typeDefs"),", while v1 doesn't."),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { gql, createModule } from 'graphql-modules';\n\nconst myModule = createModule({\n  /// ...\n  typeDefs: gql`\n    type Query {\n      foo: String\n    }\n  `,\n});\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const myModule = GraphQLModule({\n  // ...\n  typeDefs: `type Query { foo: String }`,\n});\n")))),(0,r.kt)("h2",{id:"classes-to-utility-functions"},"Classes to Utility Functions"),(0,r.kt)("p",null,"You no longer need to create ",(0,r.kt)("inlineCode",{parentName:"p"},"new GraphQLModule()"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createModule")," instead:"),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const myModule = createModule({ ... });\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const myModule = new GraphQLModule({ ... });\n")))),(0,r.kt)("h2",{id:"resolvers-composition--middleware"},"Resolvers Composition => Middleware"),(0,r.kt)("p",null,"With version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.x")," we had resolvers-composition, which was our way to define wrappers for resolvers."),(0,r.kt)("p",null,"In v1, we changed the name to Middlewares, and changed the API a bit, to make it more flexible and more compatible with similar middlewares implementations:"),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("p",null,"To define:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function yourMiddleware({ root, args, context, info }, next) {\n  /* code */\n\n  return next();\n}\n")),(0,r.kt)("p",null,"To use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const myModule = createModule({\n  // ...\n  middlwares: {\n    Query: {\n      me: [yourMiddleware],\n    },\n  },\n});\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("p",null,"To define:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export const yourMiddleware = () => (next) => async (\n  root,\n  args,\n  context,\n  info\n) => {\n  /* code */\n\n  return next(root, args, context, info);\n};\n")),(0,r.kt)("p",null,"To use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const myModule = new GraphQLModule({\n  /*...*/\n  resolversComposition: {\n    'Query.me': [yourMiddleware],\n  },\n});\n")))),(0,r.kt)("h2",{id:"moduleapplication-structure"},"Module/Application Structure"),(0,r.kt)("p",null,"With version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.x")," of GraphQL Modules, we were trying to make modules more dynamic, and build a hierarchy tree of dependencies between modules. This wasn't a great solution for all use-cases, and made things complicated."),(0,r.kt)("p",null,"In v1, we changed behavior modules to be flat, and added ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," to define the root of injection."),(0,r.kt)("p",null,"You no longer need to define ",(0,r.kt)("inlineCode",{parentName:"p"},"imports")," and define strict dependencies between modules, since they are all flatten and merged together by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),"."),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const moduleOne = createModule({ ... });\nconst moduleTwo = createModule({ ... });\n\nconst application = createApplication({\n  modules: [moduleOne, moduleTwo]\n})\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const moduleOne = new GraphQLModule({ ... });\nconst moduleTwo = new GraphQLModule({ imports: [moduleOne], ...})\n\nconst rootModule = new GraphQLModule({\n  imports: [moduleTwo],\n})\n")))),(0,r.kt)("h2",{id:"shared-injectables"},"Shared Injectables"),(0,r.kt)("p",null,"In V0, you needed to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"Injectable"),", add it to a module, and then in order to consume it in another module, you needed to make sure you have a dependency (with ",(0,r.kt)("inlineCode",{parentName:"p"},"imports"),") between your modules. This was very strict and made development harder."),(0,r.kt)("p",null,"Since we moved to a flatten structure of ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),", all you need to do in order to share an ",(0,r.kt)("inlineCode",{parentName:"p"},"Injectable"),", is just to add ",(0,r.kt)("inlineCode",{parentName:"p"},"global: true"),":"),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Module 1\n\n@Injectable({\n  global: true\n})\nclass MyProvider {\n  // ...\n}\n\nconst moduleOne = createModule({ providers: [MyProvider] });\n\n// Module 2\n@Injectable()\nclass MyOtherProvider {\n  constructor(myProvider: MyProvider) {\n\n  }\n}\n\nconst moduleTwo = createModule({ ... });\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Module 1\n\n@Injectable()\nclass MyProvider {\n  // ...\n}\n\nconst moduleOne = new GraphQLModule({\n  providers: [MyProvider],\n});\n\n// Module 2\n@Injectable()\nclass MyOtherProvider {\n  constructor(myProvider: MyProvider) {}\n}\nconst moduleTwo = new GraphQLModule({ imports: [moduleOne] });\n\nconst rootModule = new GraphQLModule({\n  imports: [moduleTwo],\n});\n")))),(0,r.kt)("h2",{id:"module-config"},"Module Config"),(0,r.kt)("p",null,"In V0, we had the concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleConfig")," which was a very specific way to instantiate a module with configuration."),(0,r.kt)("p",null,"In V1, it's no longer exists, and we believe there are simpler way to do that, with custom tokens."),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createModule, InjectionToken } from '@graphql-modules/core';\n\nexport interface MyModuleConfig {\n  secretKey: string;\n  remoteEndpoint: string;\n  someDbInstance: SomeDBInstance;\n}\n\nexport const MyConfig = new InjectionToken<MyModuleConfig>();\n\nexport const createMyModule = (config: MyModuleConfig) =>\n  createModule({\n    // ...\n    providers: [\n      {\n        provide: MyConfig,\n        useValue: config,\n      },\n    ],\n  });\n\nconst application = createApplication({\n  modules: [\n    createMyModule({\n      secretKey: '123',\n      remoteEndpoint: 'http://...',\n      someDbInstance: db,\n    }),\n  ],\n});\n")),(0,r.kt)("p",null,"And to consume, that same way as in V0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class MyProvider {\n  constructor(@Inject(MyConfig) private config: MyModuleConfig) {\n    // ...\n  }\n}\n"))),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GraphQLModule } from '@graphql-modules/core';\n\nexport interface MyModuleConfig {\n  secretKey: string;\n  remoteEndpoint: string;\n  someDbInstance: SomeDBInstance;\n}\n\n// You can access the config object like below inside the module declaration\nexport const MyModule = new GraphQLModule<MyModuleConfig>({\n  providers: ({ config: { someDbInstance } }) => [\n    MyProvider,\n    {\n      provide: SomeDbInstance,\n      useValue: someDbInstance,\n    },\n  ],\n});\n")),(0,r.kt)("p",null,"And to consume:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class MyProvider {\n  constructor(@Inject(ModuleConfig) private config: MyModuleConfig) {\n    // ...\n  }\n}\n")))),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)("p",null,"In v0, we had a concept of Session to manage the execution of each operation. In v1, we dropped it, in favor of a simpler solution."),(0,r.kt)("p",null,"Internally, we are using Node's ",(0,r.kt)("inlineCode",{parentName:"p"},"async_hooks")," to manage a context of an execution, which allow us to share Injectables between Singleton and Operation scope."),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"In v0, you could create a ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," per each module. In v1, ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," is external for GraphQL-Modules and it's not directly in use. You can do whatever you want with that, and just access it in GraphQL-Modules if you need, but we no longer require you to do specific things with your ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,r.kt)(l.Z,{defaultValue:"1",values:[{label:"V1",value:"1"},{label:"V0",value:"0"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"1",mdxType:"TabItem"},(0,r.kt)("p",null,"With v1, you can manage your own ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," without anything special that needs to be done in order to GraphQL-Modules to work."),(0,r.kt)("p",null,"You can inject ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTEXT")," in order to get access to the global execution context, and Modules you create doesn't take part in building that object.")),(0,r.kt)(i.Z,{value:"0",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const MyModule = new GraphQLModule({\n  context(session: MyModuleSession) {\n    session.res.on('finish', () => {\n      // Some cleanup\n    });\n    return {\n      authToken: session.req.headers.authorization,\n    };\n  },\n});\n")))),(0,r.kt)("h2",{id:"dependency-injection-scopes"},"Dependency Injection Scopes"),(0,r.kt)("p",null,"We decided to reduce the number of Scopes (from 3 to only 2) and change the names. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," scopes are a bit misleading and hard to understand at first glimpse. "),(0,r.kt)("p",null,"In v1 it's much simpler, there are two Scopes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Singleton")," - Injectable is instantiated once, at bootstrap phase (",(0,r.kt)("inlineCode",{parentName:"li"},"createApplication"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Operation")," - Injectable is instantiated once per GraphQL Operation.")),(0,r.kt)("p",null,"In our opinion, it's much easier to reason about."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ProviderScope")," was renamed to just ",(0,r.kt)("inlineCode",{parentName:"p"},"Scope"),"."),(0,r.kt)("h2",{id:"dependency-injection-hierarchy"},"Dependency Injection Hierarchy"),(0,r.kt)("p",null,"With v1, the structure of your application is now flat, meaning there's an application level on top of a module level (many)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Application -> [ Module, Module, Module ]\n")),(0,r.kt)("p",null,"This change enables an abstraction that was not possible in v0. Your modules can depend on Injectables or InjectionTokens provided by Application."),(0,r.kt)("p",null,"We recommend to read ",(0,r.kt)("a",{parentName:"p",href:"../di/introduction/#hierarchical-injectors"},'"Hierarchical Injectors"')," chapter."))}d.isMDXComponent=!0},6010:function(e,n,t){"use strict";function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2153],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},7358:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294),a=t(2713);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,c=e.values,d=e.groupId,m=e.className,k=o(),v=k.tabGroupChoices,f=k.setTabGroupChoices,y=(0,r.useState)(a),g=y[0],h=y[1],b=r.Children.toArray(e.children),N=[];if(null!=d){var T=v[d];null!=T&&T!==g&&c.some((function(e){return e.value===T}))&&h(T)}var x=function(e){var n=e.currentTarget,t=N.indexOf(n),r=c[t].value;h(r),null!=d&&(f(d,r),setTimeout((function(){var e,t,r,a,o,i,l,p;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,t>=0&&o<=p&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},I=function(e){var n,t;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case p:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},m)},c.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:x,onClick:x},t)}))),n?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},2713:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},2395:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return k}});var r=t(7462),a=t(3366),o=(t(7294),t(4137)),i=t(7358),l=t(8448),s=["components"],p={id:"providers",title:"Providers and Tokens"},u=void 0,c={unversionedId:"di/providers",id:"di/providers",isDocsHomePage:!1,title:"Providers and Tokens",description:"The building blocks of DI are Provider(s) and InjectionToken(s).",source:"@site/docs/di/providers.md",sourceDirName:"di",slug:"/di/providers",permalink:"/docs/di/providers",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/docs/di/providers.md",version:"current",frontMatter:{id:"providers",title:"Providers and Tokens"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/di/introduction"},next:{title:"Scopes",permalink:"/docs/di/scopes"}},d=[{value:"Defining Tokens",id:"defining-tokens",children:[{value:"Class",id:"class",children:[]},{value:"Value",id:"value",children:[]},{value:"Factory",id:"factory",children:[]}]},{value:"Using Services and Tokens",id:"using-services-and-tokens",children:[{value:"Service",id:"service",children:[]},{value:"InjectionToken",id:"injectiontoken",children:[]}]},{value:"Global Providers and Token",id:"global-providers-and-token",children:[]},{value:"Lazy with forwardRef",id:"lazy-with-forwardref",children:[]},{value:"Available Tokens",id:"available-tokens",children:[]}],m={toc:d};function k(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The building blocks of DI are ",(0,o.kt)("strong",{parentName:"p"},"Provider"),"(s) and ",(0,o.kt)("strong",{parentName:"p"},"InjectionToken"),"(s)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"InjectionToken")," - a ",(0,o.kt)("inlineCode",{parentName:"li"},"symbol")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"class")," representing an object or any value in Dependency Injection space."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Provider")," - provides a value to a specific token.")),(0,o.kt)("h2",{id:"defining-tokens"},"Defining Tokens"),(0,o.kt)("p",null,"Dependency Injection is an abstraction over actual objects and values."),(0,o.kt)("p",null,"There are three kinds of providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#class"},"Class provider")," - creates an instance of a class"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#value"},"Value provider")," - provides ready-to-use value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#factory"},"Factory provider")," - function to provide a value")),(0,o.kt)("h3",{id:"class"},"Class"),(0,o.kt)("p",null,"Using a ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," provider in GraphQL Modules is the easiest approach to DI. The class is instantiated automatically and in case of Operation Scope it's created only on demand."),(0,o.kt)("p",null,"Every Service should be decorated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="data.ts"',title:'"data.ts"'},"import { Injectable } from 'graphql-modules';\n\n@Injectable()\nexport class Data {}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="module.ts"',title:'"module.ts"'},"import { createModule } from 'graphql-modules';\nimport { Data } from './data';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  /* ... */\n  providers: [Data],\n});\n")),(0,o.kt)("p",null,"It's a shorthand expression for:"),(0,o.kt)(i.Z,{defaultValue:"expression",values:[{label:"Expression",value:"expression"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expression",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  provide: Data,\n  useClass: Data,\n}\n"))),(0,o.kt)(l.Z,{value:"example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="module.ts"',title:'"module.ts"'},"import { createModule } from 'graphql-modules';\nimport { Data } from './data';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  /* ... */\n  providers: [\n    {\n      provide: Data,\n      useClass: Data,\n    },\n  ],\n});\n")))),(0,o.kt)("h3",{id:"value"},"Value"),(0,o.kt)("p",null,"Value provider requires a Token that represents a value, either ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectionToken")," or a class."),(0,o.kt)(i.Z,{defaultValue:"expression",values:[{label:"Expression",value:"expression"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expression",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  provide: ApiKey,\n  useValue: 'my-api-key',\n}\n"))),(0,o.kt)(l.Z,{value:"example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="keys.ts"',title:'"keys.ts"'},"import { InjectionToken } from 'graphql-modules';\n\nexport const ApiKey = new InjectionToken<string>('api-key');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="module.ts"',title:'"module.ts"'},"import { createModule } from 'graphql-modules';\nimport { ApiKey } from './keys';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  /* ... */\n  providers: [\n    {\n      provide: ApiKey,\n      useValue: 'my-api-key',\n    },\n  ],\n});\n")))),(0,o.kt)("h3",{id:"factory"},"Factory"),(0,o.kt)("p",null,"In case you want to create a dependent value, using a factory provider is the answer. Factory can be useful also to create an instance of a class, for example when using third-party libraries."),(0,o.kt)(i.Z,{defaultValue:"expression",values:[{label:"Expression",value:"expression"},{label:"Example",value:"example"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expression",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"{\n  provide: ApiKey,\n  useFactory(config: Config) {\n    if (config.environment === 'production') {\n      return 'my-api-key';\n    }\n\n    return null;\n  },\n  deps: [Config]\n}\n"))),(0,o.kt)(l.Z,{value:"example",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="keys.ts"',title:'"keys.ts"'},"import { InjectionToken } from 'graphql-modules';\n\nexport const ApiKey = new InjectionToken<string>('api-key');\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="module.ts"',title:'"module.ts"'},"import { createModule } from 'graphql-modules';\nimport { ApiKey } from './keys';\n\nexport const myModule = createModule({\n  id: 'my-module',\n  /* ... */\n  providers: [\n    {\n      provide: ApiKey,\n      useFactory(config: Config) {\n        if (context.environment) {\n          return 'my-api-key';\n        }\n\n        return null;\n      },\n      deps: [Config],\n    },\n  ],\n});\n")))),(0,o.kt)("h2",{id:"using-services-and-tokens"},"Using Services and Tokens"),(0,o.kt)("p",null,"Provider is a way to define a value and match it with a Token or a Service. Let's see how to consume Services and Tokens."),(0,o.kt)("h3",{id:"service"},"Service"),(0,o.kt)("p",null,"Accessing a service is fairly simple. You ask for a service in a constructor of a class or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"Injector")," directly."),(0,o.kt)(i.Z,{defaultValue:"resolver",values:[{label:"Resolver",value:"resolver"},{label:"Service",value:"service"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"resolver",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Auth } from './auth';\n\nconst resolvers = {\n  Query: {\n    me(parent, args, context, info) {\n      const auth = context.injector.get(Auth);\n\n      return auth.getCurrentUser();\n    },\n  },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Injector")," is available in GraphQL Context under ",(0,o.kt)("inlineCode",{parentName:"p"},"injector")," property."))),(0,o.kt)(l.Z,{value:"service",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable } from 'graphql-modules';\nimport { Auth } from './auth';\n\n@Injectable()\nclass Posts {\n  constructor(private auth: Auth) {}\n\n  allPosts() {\n    if (!this.auth.isLoggedIn()) {\n      throw new Error('Auth required');\n    }\n\n    return [\n      /* ... */\n    ];\n  }\n}\n")))),(0,o.kt)("h3",{id:"injectiontoken"},"InjectionToken"),(0,o.kt)("p",null,"Consuming ",(0,o.kt)("inlineCode",{parentName:"p"},"InjectionToken")," is very similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),". The only difference is that you need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," decorator but only in some cases."),(0,o.kt)(i.Z,{defaultValue:"resolver",values:[{label:"Resolver",value:"resolver"},{label:"Service",value:"service"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"resolver",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiKey } from './keys';\n\nconst resolvers = {\n  Query: {\n    me(parent, args, context, info) {\n      const apiKey = context.injector.get(ApiKey);\n\n      if (!this.key) {\n        throw new Error('API key is required');\n      }\n\n      return auth.getCurrentUser();\n    },\n  },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Injector")," is available in GraphQL Context under ",(0,o.kt)("inlineCode",{parentName:"p"},"injector")," property."))),(0,o.kt)(l.Z,{value:"service",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, Inject } from 'graphql-modules';\nimport { ApiKey } from './keys';\n\n@Injectable()\nclass Posts {\n  constructor(@Inject(ApiKey) private key: string) {}\n\n  allPosts() {\n    if (!this.key) {\n      throw new Error('API key is required');\n    }\n\n    return [\n      /* ... */\n    ];\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," decorator is needed because of limitation of type system.")))),(0,o.kt)("h2",{id:"global-providers-and-token"},"Global Providers and Token"),(0,o.kt)("p",null,"Module is able to share tokens and providers with other modules, even application. When enabling a global flag, the provider still depends on an original Injector."),(0,o.kt)(i.Z,{defaultValue:"definition",values:[{label:"Definition",value:"definition"},{label:"Usage",value:"usage"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"definition",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Users module\n\n@Injectable({\n  global: true,\n})\nexport class Auth {\n  constructor(private logger: Logger) {}\n\n  getCurrentUser() {\n    logger.debug(`Asking for authenticated user`);\n    return /*... */;\n  }\n}\n"))),(0,o.kt)(l.Z,{value:"usage",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Posts module\n\n@Injectable()\nexport class Posts {\n  constructor(private auth: Auth, private logger: Logger) {}\n\n  getMyPosts() {\n    const me = this.auth.getCurrentUser();\n\n    logger.debug(`Asking for my posts`);\n\n    return /* ... */;\n  }\n}\n")))),(0,o.kt)("p",null,"In the scenario above, we've got two modules: Posts and Users.\nBoth modules defines their own ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger"),".\nUsers module defines ",(0,o.kt)("inlineCode",{parentName:"p"},"Auth")," service as globally available.\nPosts module defines ",(0,o.kt)("inlineCode",{parentName:"p"},"Posts")," service."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"Posts.getMyPosts()")," is called, it fetches a current user from ",(0,o.kt)("inlineCode",{parentName:"p"},"Auth")," service.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"Auth.getCurrentUser()")," calls a logger (provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"Users")," module).\nIn ",(0,o.kt)("inlineCode",{parentName:"p"},"Posts.getMyPosts()")," a different logger is invoked (provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"Posts")," module)."),(0,o.kt)("p",null,"What all of that mean? Because global providers are accessible in all modules, they still use the injector they were created by.\nGlobal providers are still isolated but their API is public to other modules."),(0,o.kt)("h2",{id:"lazy-with-forwardref"},"Lazy with forwardRef"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"forwardRef")," function allows to refer to references which are not yet defined. Useful when circular dependency of modules is an issue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, Inject } from 'graphql-modules';\nimport { ApiKey } from './keys';\n\n@Injectable()\nclass Posts {\n  constructor(@Inject(forwardRef(() => ApiKey)) private key: string) {}\n\n  allPosts() {\n    if (!this.key) {\n      throw new Error('API key is required');\n    }\n\n    return [\n      /* ... */\n    ];\n  }\n}\n")),(0,o.kt)("h2",{id:"available-tokens"},"Available Tokens"),(0,o.kt)("p",null,"GraphQL Modules have a set of built-in and ready to use Tokens. They may be handy in some situations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#context"},(0,o.kt)("inlineCode",{parentName:"a"},"CONTEXT"))," - represents a provided GraphQL Context (",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLModules.GlobalContext"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api#module_id"},(0,o.kt)("inlineCode",{parentName:"a"},"MODULE_ID"))," - represents an id of the current module.")))}k.isMDXComponent=!0},6010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);
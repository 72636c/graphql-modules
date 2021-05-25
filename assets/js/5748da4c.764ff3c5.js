(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6886],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9824:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o={id:"authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization"},u={unversionedId:"recipes/authentication",id:"version-legacy/recipes/authentication",isDocsHomePage:!1,title:"Authentication and Authorization",description:"We created this guide to make it simpler to add authentication and authorization to your app.",source:"@site/versioned_docs/version-legacy/recipes/authentication.md",sourceDirName:"recipes",slug:"/recipes/authentication",permalink:"/docs/legacy/recipes/authentication",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/recipes/authentication.md",version:"legacy",sidebar_label:"Authentication and Authorization",frontMatter:{id:"authentication",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization"}},c=[{value:"In GraphQL Modules",id:"in-graphql-modules",children:[]},{value:"Authentication",id:"authentication-1",children:[{value:"With AccountsJS",id:"with-accountsjs",children:[]},{value:"With PassportJS",id:"with-passportjs",children:[]},{value:"Implement Your Own",id:"implement-your-own",children:[]}]},{value:"Authorization",id:"authorization-1",children:[]},{value:"Implement Your Own",id:"implement-your-own-1",children:[]},{value:"With External Packages",id:"with-external-packages",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We created this guide to make it simpler to add authentication and authorization to your app."),(0,a.kt)("p",null,"First, let's understand what are we trying to achieve and the differences between authentication and authorization."),(0,a.kt)("h4",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Authentication is the process of ascertaining that somebody really is who he claims to be."),(0,a.kt)("p",null,"Or event simpler - authentication addresses the following questions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"does the username and password match?"),(0,a.kt)("li",{parentName:"ul"},"who is the actual user behind a specific username and password?"),(0,a.kt)("li",{parentName:"ul"},"does the authentication token is valid and not expired?"),(0,a.kt)("li",{parentName:"ul"},"who is the actual user behind a specific authentication token?")),(0,a.kt)("h4",{id:"authorization"},"Authorization"),(0,a.kt)("p",null,"Authorization refers to rules that determine who is allowed to do what."),(0,a.kt)("p",null,"Or event simpler - authentication addresses the following questions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"does a specific user allowed to do a specific actions?"),(0,a.kt)("li",{parentName:"ul"},"does a specific user has access to read/get a specific resource?")),(0,a.kt)("h2",{id:"in-graphql-modules"},"In GraphQL Modules"),(0,a.kt)("h2",{id:"authentication-1"},"Authentication"),(0,a.kt)("h3",{id:"with-accountsjs"},"With AccountsJS"),(0,a.kt)("h3",{id:"with-passportjs"},"With PassportJS"),(0,a.kt)("h3",{id:"implement-your-own"},"Implement Your Own"),(0,a.kt)("h2",{id:"authorization-1"},"Authorization"),(0,a.kt)("h2",{id:"implement-your-own-1"},"Implement Your Own"),(0,a.kt)("h2",{id:"with-external-packages"},"With External Packages"))}s.isMDXComponent=!0}}]);
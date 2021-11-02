"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1244],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6933:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),s=(t(7294),t(4137)),i=["components"],a={id:"subscriptions",title:"Subscriptions",sidebar_label:"Subscriptions"},c=void 0,p={unversionedId:"introduction/subscriptions",id:"version-legacy/introduction/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Subscriptions are GraphQL operations that watch events emitted from your backend. GraphQL Modules supports GraphQL subscriptions with a little modification in your server code. You can read more about SubscriptionServer.",source:"@site/versioned_docs/version-legacy/introduction/subscriptions.md",sourceDirName:"introduction",slug:"/introduction/subscriptions",permalink:"/docs/legacy/introduction/subscriptions",editUrl:"https://github.com/Urigo/graphql-modules/edit/master/website/versioned_docs/version-legacy/introduction/subscriptions.md",tags:[],version:"legacy",frontMatter:{id:"subscriptions",title:"Subscriptions",sidebar_label:"Subscriptions"},sidebar:"version-legacy/docs",previous:{title:"Resolvers Composition",permalink:"/docs/legacy/introduction/resolvers-composition"},next:{title:"Test Your Module",permalink:"/docs/legacy/introduction/test-your-module"}},u=[{value:"Authentication Over WebSocket using OnConnect hook and Scoped Providers",id:"authentication-over-websocket-using-onconnect-hook-and-scoped-providers",children:[{value:"Using in Resolvers",id:"using-in-resolvers",children:[],level:3}],level:2}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Subscriptions are GraphQL operations that watch events emitted from your backend. GraphQL Modules supports GraphQL subscriptions with a little modification in your server code. You can ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://github.com/apollographql/subscriptions-transport-ws"},"read more"))," about ",(0,s.kt)("strong",{parentName:"p"},"SubscriptionServer"),"."),(0,s.kt)("p",null,"Subscriptions need to have defined ",(0,s.kt)("inlineCode",{parentName:"p"},"PubSub")," implementation in your GraphQL Modules application."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { PubSub } from 'graphql-subscriptions';\nexport const CommonModule = new GraphQLModule({\n  providers: [PubSub],\n});\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const PostModule = new GraphQLModule({\n  imports: [CommonModule],\n  providers: [PostsProvider],\n  typeDefs: gql`\n    type Subscription {\n      postAdded: Post\n    }\n\n    type Query {\n      posts: [Post]\n    }\n\n    type Mutation {\n      addPost(author: String, comment: String): Post\n    }\n\n    type Post {\n      author: String\n      comment: String\n    }\n  `,\n  resolvers: {\n    Subscription: {\n      postAdded: {\n        // Additional event labels can be passed to asyncIterator creation\n        subscribe: (root, args, { injector }) =>\n          injector.get(PubSub).asyncIterator([POST_ADDED]),\n      },\n    },\n    Query: {\n      posts: (root, args, { injector }) => injector.get(PostsProvider).posts(),\n    },\n    Mutation: {\n      addPost: (root, args, { injector }) => {\n        pubsub.publish(POST_ADDED, { postAdded: args });\n        return injector.get(PostsProvider).addPost(args);\n      },\n    },\n  },\n});\n")),(0,s.kt)("p",null,"You have to export ",(0,s.kt)("inlineCode",{parentName:"p"},"subscriptions")," from your ",(0,s.kt)("inlineCode",{parentName:"p"},"AppModule"),", and pass it to your GraphQL Server."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createServer } from 'http';\nimport { SubscriptionServer } from 'subscriptions-transport-ws';\nimport { execute, subscribe } from 'graphql';\nimport { GraphQLModule } from '@graphql-modules/core';\nimport { CommonModule } from './modules/common/common.module';\nimport { PostsModule } from './modules/posts/posts.module';\n\nconst { schema, subscriptions } = new GraphQLModule({\n  imports: [CommonModule, PostsModule],\n});\n\nconst WS_PORT = 5000;\n\n// Create WebSocket listener server\nconst websocketServer = createServer((request, response) => {\n  response.writeHead(404);\n  response.end();\n});\n\n// Bind it to port and start listening\nwebsocketServer.listen(WS_PORT, () =>\n  console.log(`Websocket Server is now running on http://localhost:${WS_PORT}`)\n);\n\nconst subscriptionServer = SubscriptionServer.create(\n  {\n    schema,\n    execute,\n    subscribe,\n    ...subscriptions,\n  },\n  {\n    server: websocketServer,\n    path: '/graphql',\n  }\n);\n\nserver.listen().then(({ url, subscriptionsUrl }) => {\n  console.log(`\ud83d\ude80 Server ready at ${url}`);\n  console.log(`\ud83d\ude80 Subscriptions ready at ${subscriptionsUrl}`);\n});\n")),(0,s.kt)("h2",{id:"authentication-over-websocket-using-onconnect-hook-and-scoped-providers"},"Authentication Over WebSocket using OnConnect hook and Scoped Providers"),(0,s.kt)("p",null,"Session life-time when using WebSocket is the same as the connection's. So, you can keep all the user state in your memory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Injectable, ProviderScope } from '@graphql-modules/di';\nimport { OnConnect } from '@graphql-modules/core';\n\n// This provider has created for each WS/HTTP connection, and kept until the connection is terminated\n@Injectable({\n  scope: ProviderScope.Session,\n})\nexport class AuthProvider implements OnConnect {\n  private authToken: string;\n  private user: User;\n  constructor(private usersProvider: UsersProvider) {}\n  // This will be called once immediately after connection established and the session is constructed.\n  async onConnect(connectionParams) {\n    if (connectionParams.authToken) {\n      this.authToken = connectionParams.authToken;\n      try {\n        await this.validateToken();\n        this.user = this.usersProvider.findUserByToken(this.authToken);\n      } catch (e) {\n        throw new Error('Invalid token');\n      }\n    } else {\n      throw new Error('Missing auth token!');\n    }\n  }\n  private async validateToken() {\n    // logic\n  }\n}\n")),(0,s.kt)("h3",{id:"using-in-resolvers"},"Using in Resolvers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"    resolvers: {\n        Subscription: {\n          postAdded: {\n            // Additional event labels can be passed to asyncIterator creation\n            subscribe: withFilter(\n                (root, args, { injector }) => injector.get(PubSub).asyncIterator([POST_ADDED]),\n                (root, args, { injector }) => payload.userId === injector.get(AuthProvider).user.id\n            )\n          },\n        },\n    }\n")))}d.isMDXComponent=!0}}]);
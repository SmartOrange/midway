"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2440],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return u}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?t.createElement(h,o(o({ref:n},d),{},{components:a})):t.createElement(h,o({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3901:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"GraphQL"},p=void 0,s={unversionedId:"extensions/graphql",id:"version-2.0.0/extensions/graphql",title:"GraphQL",description:"\u6982\u8ff0",source:"@site/versioned_docs/version-2.0.0/extensions/graphql.md",sourceDirName:"extensions",slug:"/extensions/graphql",permalink:"/en/docs/2.0.0/extensions/graphql",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/extensions/graphql.md",tags:[],version:"2.0.0",frontMatter:{title:"GraphQL"},sidebar:"component",previous:{title:"Redis",permalink:"/en/docs/2.0.0/extensions/redis"},next:{title:"\u7f13\u5b58\uff08Cache\uff09",permalink:"/en/docs/2.0.0/extensions/cache"}},d={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Serverless \u5e94\u7528",id:"serverless-\u5e94\u7528",level:2},{value:"Node \u5e94\u7528",id:"node-\u5e94\u7528",level:2},{value:"\u5b9a\u5236 GraphQL \u4e2d\u95f4\u4ef6",id:"\u5b9a\u5236-graphql-\u4e2d\u95f4\u4ef6",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u81ea\u52a8\u751f\u6210 TypeGraphQL \u7c7b\u578b\u5b9a\u4e49",id:"\u81ea\u52a8\u751f\u6210-typegraphql-\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Serverless",id:"serverless",level:3},{value:"Node",id:"node",level:3},{value:"\u5185\u7f6e\u63d2\u4ef6",id:"\u5185\u7f6e\u63d2\u4ef6",level:3},{value:"\u914d\u7f6e\u7c7b\u578b\u5b9a\u4e49",id:"\u914d\u7f6e\u7c7b\u578b\u5b9a\u4e49",level:3}],c={toc:m};function u(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/linbudu599/apollo-server-midway"},"Apollo-Server-Midway")," \u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server"},"Apollo Server V3")," \u6784\u5efa\uff0c\u5b83\u4f7f\u5f97\u4f60\u53ef\u4ee5\u5728 Midway && Midway Serverless \u5e94\u7528 \u4e2d\u4f7f\u7528 Apollo-Server \u4f5c\u4e3a GraphQL \u8bf7\u6c42\u5904\u7406\u5c42\uff0c\u56e0\u6b64\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 MidwayJS \u6784\u5efa GraphQL API \u751a\u81f3\u662f GraphQL FaaS \u5e94\u7528\u4e86\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 Midway Serverless \u4e2d\uff0cApollo-Server-Midway \u901a\u8fc7\u5c06 Apollo-Server \u4f5c\u4e3a\u4e00\u4e2a GraphQL \u4e13\u6709\u7684\u54cd\u5e94\u5904\u7406\u5668\u6765\u5de5\u4f5c\uff0c\u540c\u65f6\u5185\u7f6e\u4e86 ",(0,l.kt)("a",{parentName:"li",href:"https://typegraphql.com/"},"TypeGraphQL")," \u652f\u6301\u6765\u914d\u5408 MidwayJS \u7684\u88c5\u9970\u5668\u4f53\u7cfb\uff08TypeGraphQL \u4f7f\u7528 TypeScript \u7684 Class \u4ee5\u53ca\u88c5\u9970\u5668\u58f0\u660e GraphQL Schema \u4ee5\u53ca GraphQL Resolvers \u7b49\u4e00\u7cfb\u5217\u80fd\u529b\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Midway Node \u5e94\u7528\u4e2d\uff0c\u5b83\u4e3b\u8981\u901a\u8fc7\u5c06 Apollo-Server \u4f5c\u4e3a\u4e00\u4e2a\u4ec5\u9488\u5bf9 GraphQL API \u8def\u5f84\uff08\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"/graphql"),"\uff09\u7684\u4e2d\u95f4\u4ef6\u8fdb\u884c\u5de5\u4f5c\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u540c\u65f6\u6784\u5efa RESTFul API \u4e0e GraphQL API\uff0c\u4e0d\u540c\u7684\u57fa\u5ea7\u6846\u67b6\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u4e2d\u95f4\u4ef6\uff0c\u5728\u4e0d\u540c\u7684\u6846\u67b6\u4e0b\u4e5f\u5bf9\u5e94\u4e86\u4e0d\u540c\u7248\u672c\u7684 Apollo-Server \u96c6\u6210\uff08\u5982 Apollo-Server-Koa\u3001Apollo-Server-Express\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e24\u90e8\u5206\u90fd\u5bf9 TypeGraphQL \u505a\u4e86\u5185\u7f6e\u652f\u6301\uff0c\u4f46\u4f60\u540c\u6837\u53ef\u4ee5\u4ec5\u4f7f\u7528 Apollo-Server \u7684\u80fd\u529b\uff0c\u5982\u4ece\u5916\u90e8\u4f20\u5165 GraphQL Schema\uff0c\u4ee5\u53ca\u4f7f\u7528 Apollo Server \u5185\u7f6e\u7684\u80fd\u529b\u6765\u5b9e\u73b0 GraphQL Resolver\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cTypeGraphQL \u7684\u9009\u9879\u5c06\u88ab\u5ffd\u7565\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Node \u5e94\u7528\u4e2d\uff0c\u5b9e\u9645\u4e0a\u66f4\u63a8\u8350\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 GraphQL \u4e2d\u95f4\u4ef6\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u6846\u67b6\u5185\u7f6e\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6846\u67b6\u5185\u7f6e\u7684\u7248\u672c\uff0c\u4f60\u65e0\u6cd5\u76f4\u89c2\u7684\u63a7\u5236\u88ab\u5305\u542b\u5728 GraphQL Context \u4e2d\u7684\u6570\u636e\uff0c\u800c\u662f\u53ea\u80fd\u5728 config \u4e0b\u5355\u72ec\u5b9a\u4e49\u4e00\u4e9b\u4e0d\u5177\u6709\u5916\u90e8\u4f9d\u8d56\u7684\u6570\u636e\uff0c\u5bf9\u4e8e\u4f9d\u8d56\u5e94\u7528\u4e0a\u4e0b\u6587\u3001\u8bf7\u6c42\u4e0a\u4e0b\u6587\u6216\u8005\u5176\u4ed6\u6ce8\u5165\u8fdb\u6765\u7684\u6570\u636e\u5219\u675f\u624b\u65e0\u7b56\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 GraphQL \u4e2d\u95f4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c\u66f4\u52a0\u7075\u6d3b\u7684\u903b\u8f91\u5b9a\u5236\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e Apollo Server Plugin\u3001GraphQL Context \u4ee5\u53ca TypeGraphQL AuthChecker \u7b49\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"Apollo-Server-Midway \u7684\u91cd\u5fc3\u5728\u4e8e\u63d0\u4f9b Midway Serverless \u4e0b\u4f4e\u6210\u672c\u63a5\u5165 GraphQL \u7684\u80fd\u529b\uff0c\u5bf9\u4e8e Node \u5e94\u7528\u7684\u652f\u6301\u53ea\u662f\u9644\u5e26\uff0c\u540c\u65f6\uff0c\u7531\u4e8e Node \u5e94\u7528\u4e2d\u53ef\u80fd\u5b58\u5728\u5404\u79cd\u53ef\u80fd\u7684\u5b9a\u5236\u9700\u6c42\uff0c\u5728\u6846\u67b6\u5c42\u5b9a\u5236\u540c\u6837\u4e0d\u73b0\u5b9e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003\u4e0b\u65b9 \u5b9a\u5236 GraphQL \u4e2d\u95f4\u4ef6 \u4e00\u8282\u4e86\u89e3\u66f4\u591a\u3002")))),(0,l.kt)("h2",{id:"serverless-\u5e94\u7528"},"Serverless \u5e94\u7528"),(0,l.kt)("p",null,"\u5927\u81f4\u7684\u4f7f\u7528\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  Inject,\n  ServerlessTrigger,\n  ServerlessFunction,\n  ServerlessTriggerType,\n  App,\n} from '@midwayjs/decorator';\nimport { Context, IMidwayFaaSApplication } from '@midwayjs/faas';\nimport { createApolloServerHandler } from 'apollo-server-midway';\nimport { SampleResolver } from '../resolvers/sample.resolver';\nimport { DogResolver } from '../resolvers/dog.resolver';\nimport path from 'path';\n\nconst apolloHandlerFuncName = 'apollo-handler';\n\nconst APOLLO_SERVER_MIDWAY_PATH = '/apollo';\n\n@Provide()\nexport class HelloHTTPService {\n  @Inject()\n  ctx: Context;\n\n  @App()\n  app: IMidwayFaaSApplication;\n\n  @ServerlessFunction({\n    functionName: apolloHandlerFuncName,\n  })\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: APOLLO_SERVER_MIDWAY_PATH,\n    method: 'get',\n  })\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: APOLLO_SERVER_MIDWAY_PATH,\n    method: 'post',\n  })\n  async apolloHandler() {\n    return await createApolloServerHandler({\n      path: '/',\n      app: this.app,\n      context: this.ctx,\n      schema: {\n        resolvers: [SampleResolver, DogResolver],\n      },\n    });\n  }\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u5206\u51e0\u4e2a\u90e8\u5206\u8bb2\u89e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u63a8\u8350\u5728\u51fd\u6570\u4e0a\u540c\u65f6\u6307\u5b9a GET \u4e0e POST \u65b9\u6cd5\u89e6\u53d1\u5668\uff0c\u5e76\u914d\u7f6e\u76f8\u540c\u7684\u8def\u5f84\u3002\u8fd9\u4e00\u884c\u4e3a\u662f\u4e3a\u4e86\u5141\u8bb8\u4f60\u901a\u8fc7 GET \u65b9\u6cd5\u5728\u672c\u5730\u5f00\u53d1\u4e2d\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/graphql/graphql-playground"},"GraphQL Playground"),"\uff08\u4e00\u4e2a GraphQL IDE\uff09\uff08\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u5c06\u88ab\u7981\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"prodPlayground")," \u9009\u9879\u6765\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u542f\u7528\uff0c\u4f46\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\uff09\uff0c\u5e76\u4f7f\u7528 POST \u65b9\u6cd5\u4f5c\u4e3a API \u7684\u771f\u6b63\u627f\u63a5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u51fd\u6570\u8def\u5f84\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"ServerlessTrigger"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"path"),"\uff09\u4e0e GraphQL API \u8def\u5f84\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"createApolloServerHandler"),"\u9009\u9879\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"path"),"\uff09\u662f\u5e76\u5b58\u7684\uff0c\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"/apollo-handler/")," \u8bbf\u95ee GraphQL API\uff0c\u5373 \u51fd\u6570\u540d\uff08\u51fd\u6570\u8def\u5f84\uff09/\u3002\u5982\u679c\u914d\u7f6e GraphQL Path \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"/graphql"),"\uff0c\u5219\u8bbf\u95ee\u5730\u5740\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"/apollo-handler/graphql"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u53ef\u7528\u9009\u9879\u53c2\u8003\u6700\u540e\u7684\u90e8\u5206\uff0c\u6ce8\u610f\uff0c\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"li"},"options.apollo.schema")," \u88ab\u6307\u5b9a\uff0c\u90a3\u4e48 ",(0,l.kt)("inlineCode",{parentName:"li"},"options.schema")," \u5c06\u88ab\u5ffd\u7565\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"options.apollo\uff1aApollo Server \u7684\u521d\u59cb\u5316\u53c2\u6570"),(0,l.kt)("li",{parentName:"ul"},"options.schema\uff1aTypeGraphQL buildSchemaSync \u53c2\u6570")))),(0,l.kt)("h2",{id:"node-\u5e94\u7528"},"Node \u5e94\u7528"),(0,l.kt)("p",null,"Node \u5e94\u7528\u9700\u8981\u4f7f\u7528\u6846\u67b6\u5bf9\u5e94\u7684\u4e2d\u95f4\u4ef6\uff0c\u6574\u4f53\u4ee3\u7801\u4f1a\u88ab\u4ee5 Midway Component \u7684\u5f62\u5f0f\u52a0\u8f7d\uff0c\u5982\u5728 Koa \u5e94\u7528\u4e2d\uff0c\u9700\u8981\u8fd9\u4e48\u505a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nimport { SampleResolver } from '../resolvers/sample.resolver';\nimport { CreateGraphQLMiddlewareOption } from 'apollo-server-midway';\n\nexport const graphql: CreateGraphQLMiddlewareOption = {\n  schema: {\n    resolvers: [SampleResolver],\n  },\n};\n\n// configuration.ts\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { IMidwayKoaApplication } from '@midwayjs/koa';\nimport * as GraphQL from 'apollo-server-midway';\n\n@Configuration({\n  imports: [GraphQL],\n  importConfigs: ['./config'],\n})\nexport class ContainerConfiguration implements ILifeCycle {\n  @App()\n  app: IMidwayKoaApplication;\n\n  async onReady(): Promise<void> {\n    this.app.use(\n      // Express \u4e0b\u7684\u547d\u540d\u7a7a\u95f4\uff1agraphql:GraphQLExpressMiddleware\n      await this.app.generateMiddleware('graphql:GraphQLKoaMiddleware')\n    );\n  }\n}\n")),(0,l.kt)("p",null,"\u5728 Express \u5e94\u7528\u4e2d\uff0c \u5c06\u5176\u6362\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql:GraphQLExpressMiddleware")," \u5373\u53ef\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u4ec5\u6709 Koa / Express \u652f\u6301\u3002")),(0,l.kt)("p",null,"\u4e0a\u9762\u5c55\u793a\u4e86\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u6ce8\u5165\u914d\u7f6e\u7684\u80fd\u529b\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Config")," \u7684\u65b9\u5f0f\u5c06\u914d\u7f6e\u6ce8\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"ContainerConfiguration")," \u7c7b\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\n\u200b"),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("h2",{id:"\u5b9a\u5236-graphql-\u4e2d\u95f4\u4ef6"},"\u5b9a\u5236 GraphQL \u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u5b9a\u5236 GraphQL \u4e2d\u95f4\u4ef6\u7684\u6210\u672c\u5b9e\u9645\u4e0a\u975e\u5e38\u4f4e\u7684\uff0c\u4e0d\u5230 100 \u884c\u4ee3\u7801\u5373\u53ef\u5b9e\u73b0\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u793a\u4f8b\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/LinbuduLab/apollo-server-midway/blob/main/packages/koa-app-sample/src/middlewares/extend.ts"},"koa-app-sample"),"\u200b")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4ee5 Koa \u4e3a\u4f8b\n\u200b"),(0,l.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e2d\u95f4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Config, App } from '@midwayjs/decorator';\nimport { IWebMiddleware, IMidwayKoaApplication, IMidwayKoaContext, IMidwayKoaNext } from '@midwayjs/koa';\n\nimport { ApolloServer, ServerRegistration } from 'apollo-server-koa';\nimport { buildSchemaSync } from 'type-graphql';\nimport {\n  ApolloServerPluginLandingPageGraphQLPlayground,\n  ApolloServerPluginLandingPageDisabled,\n} from 'apollo-server-core';\n\nimport { SampleResolver } from '../resolvers/sample.resolver';\n\n@Provide('extend:GraphQLKoaMiddleware')\nexport class GraphQLMiddleware implements IWebMiddleware {\n  @Config('apollo')\n  config: ServerRegistration;\n\n  @App()\n  app: IMidwayKoaApplication;\n\n  resolve() {\n    return async (_ctx: IMidwayKoaContext, next: IMidwayKoaNext) => {\n      const container = this.app.getApplicationContext();\n\n      const schema = buildSchemaSync({\n        resolvers: [SampleResolver],\n        // \u76f4\u63a5\u4f20\u5165 container\uff0c\u610f\u5473\u7740\u4f7f\u7528\u5e94\u7528\u4e0a\u4e0b\u6587\u4f5c\u4e3a\u5bb9\u5668\n        // container,\n        // \u4ece Apollo Context \u4e2d\u83b7\u53d6 container \uff0c\u610f\u5473\u7740\u4f7f\u7528\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4f5c\u4e3a\u5bb9\u5668\n        container: ({ context }: ResolverData<{ container: IMidwayContainer }>) => context.container,\n        emitSchemaFile: 'schema.graphql',\n      });\n\n      const server = new ApolloServer({\n        schema,\n        // \u8fd9\u91cc\u7684 ctx \u5b9e\u9645\u4e0a\u662f\u88ab Midway \u5904\u7406\u8fc7\u7684\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u62ff\u5230 requestContext\n        context: ({ ctx }: { ctx: IMidwayKoaContext }) => {\n          return {\n            // \u8fd4\u56de\u8bf7\u6c42\u4e0a\u4e0b\u6587\u5bb9\u5668\u4f9b TypeGraphQL \u4f7f\u7528\n            container: ctx.requestContext,\n            // \u8fd4\u56de\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4f9b Resolver \u4e2d\u4f7f\u7528\n            reqCtx: ctx,\n          };\n        },\n        plugins: [\n          ['production'].includes(process.env.NODE_ENV) || process.env.DISABLE_PLAYGROUND\n            ? ApolloServerPluginLandingPageDisabled()\n            : ApolloServerPluginLandingPageGraphQLPlayground({\n                settings: {\n                  // playground settings\n                },\n              }),\n        ],\n      });\n      await server.start();\n\n      server.applyMiddleware({\n        app: this.app,\n        ...this.config,\n      });\n\n      await next();\n    };\n  }\n}\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u8fd9\u91cc\u7684\u903b\u8f91\u5176\u5b9e\u662f\u5f88\u7b80\u5355\u7684\uff0c\u4e0e\u6846\u67b6\u5185\u7f6e\u4e0d\u540c\u7684\u662f\u5b9a\u5236\u4e86 GraphQL Context\uff0c\u5305\u542b\u5e94\u7528\u4e0a\u4e0b\u6587\u4e0e\u8bf7\u6c42\u4e0a\u4e0b\u6587\u3002",(0,l.kt)("strong",{parentName:"p"},"\u53e6\u5916\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u91cc\u7684 "),(0,l.kt)("inlineCode",{parentName:"p"},"**Context**"),(0,l.kt)("strong",{parentName:"p"}," \u9700\u8981\u4f7f\u7528\u51fd\u6570\uff0c\u6765\u786e\u4fdd\u6bcf\u6b21\u8bf7\u6c42\u6765\u65f6\u80fd\u4fdd\u6301\u66f4\u65b0\uff0c\u5c24\u5176\u662f\u5f53\u4f60\u9700\u8981\u4f7f\u7528\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u5982 cookie\u3001headers \u7b49\u65f6\u3002"),"\n\u5728 Resolver \u4e2d\u4f60\u5c31\u53ef\u4ee5\u62ff\u5230\u5173\u8054\u8bf7\u6c42\u4e0a\u4e0b\u6587\u7684\u4fe1\u606f\u4e86\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMidwayContainer } from '@midwayjs/core';\nimport { Provide, Inject, App } from '@midwayjs/decorator';\nimport { IMidwayKoaContext } from '@midwayjs/koa';\nimport { Resolver, Query, Ctx } from 'type-graphql';\n\nimport { SampleType } from '../graphql/sample.type';\n\ninterface IContext {\n  container: IMidwayContainer;\n  reqCtx: IMidwayKoaContext;\n}\n\n@Provide()\n@Resolver((type) => SampleType)\nexport class SampleResolver {\n  @Query((type) => SampleType)\n  QueryApplicationContext(@Ctx() ctx: IContext): SampleType {\n    console.log(ctx.reqCtx.header['authorization']);\n    return {\n      SampleField: 'SampleField',\n      Child: {\n        ChildField: 'ChildField',\n      },\n    };\n  }\n}\n")),(0,l.kt)("p",null,"\u52a0\u8f7d\u65b9\u5f0f\u4ecd\u7136\u4fdd\u6301\u4e00\u81f4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport { ILifeCycle, IMidwayContainer } from '@midwayjs/core';\nimport { IMidwayKoaApplication } from '@midwayjs/koa';\n\n@Configuration({\n  importConfigs: ['./config'],\n})\nexport class ContainerConfiguration implements ILifeCycle {\n  @App()\n  app: IMidwayKoaApplication;\n\n  async onReady(container: IMidwayContainer): Promise<void> {\n    this.app.use(\n      // Use extend middleware\n      await this.app.generateMiddleware('extend:GraphQLKoaMiddleware')\n    );\n  }\n\n  async onStop(): Promise<void> {}\n}\n")),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TypeGraphQL \u652f\u6301\u4f7f\u7528\u5916\u90e8 IoC \u5bb9\u5668\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5728 Resolver Class \u4e2d\u81ea\u7136\u7684\u4f7f\u7528 Midway \u7684\u4f9d\u8d56\u6ce8\u5165\u4f53\u7cfb\uff0c\u4f46\u8bf7\u786e\u4fdd\u4f7f ",(0,l.kt)("inlineCode",{parentName:"li"},"Resolver")," \u7c7b\u4e2d\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"Provide")," \u88c5\u9970\u5668\u3002\u5728 Serverless \u4e2d\uff0c \u5bb9\u5668\u6765\u81ea\u4e8e\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"li"},"context.requestContext"),"\uff0c\u800c\u5728 Node \u5e94\u7528\u4e2d\uff0c\u5bb9\u5668\u6765\u81ea\u4e8e\u5e94\u7528\u4e0a\u4e0b\u6587\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"app.getApplicationContext"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},'resolvers: [path.resolve(this.app.getBaseDir(), "resolvers/*")]')," \u7684\u5f62\u5f0f\u4e00\u6b21\u6027\u52a0\u8f7d\u6240\u6709\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684 resolver\uff0c\u4f46\u6ce8\u610f\u7684\u662f\uff0c\u8bf7\u5173\u95ed ",(0,l.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"declaration")," ",(0,l.kt)("inlineCode",{parentName:"li"},"inlineSourceMap")," ",(0,l.kt)("inlineCode",{parentName:"li"},"sourceMap")," \u9009\u9879\uff0c\u907f\u514d ",(0,l.kt)("inlineCode",{parentName:"li"},".d.ts")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},".js.map")," \u6587\u4ef6\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"li"},"inlineSourceMap")," \u88ab\u9519\u8bef\u7684\u8fdb\u884c\u8bfb\u53d6\u800c\u5bfc\u81f4\u62a5\u9519\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u96c6\u56e2\u5185\u90e8\u7528\u6237\uff0c\u7531\u4e8e FaaS \u9ed8\u8ba4\u7684\u6784\u5efa\u5668\u5f3a\u5236\u8981\u6c42 sourceMap \u542f\u7528\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165 Resolver \u7c7b\u6216\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvers/${ process.env.NODE_ENV === 'development' ? '*.ts' : '*.js' }")," \u52a0\u8f7d\u3002")))),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("h2",{id:"\u81ea\u52a8\u751f\u6210-typegraphql-\u7c7b\u578b\u5b9a\u4e49"},"\u81ea\u52a8\u751f\u6210 TypeGraphQL \u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4ece RESTFul API \u8fc1\u79fb\uff0c\u6216\u5df2\u6709\u786e\u5b9a\u7684\u63a5\u53e3\u6587\u4ef6\u683c\u5f0f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/LinbuduLab/json-to-type-graphql"},"json-type-graphql")," \u8fd9\u4e2a\u5e93\uff08\u4e0e Apollo-Server-Midway \u662f\u540c\u4e00\u4e2a\u4f5c\u8005\uff09\u6765\u8fdb\u884c\u4e00\u4e9b\u81ea\u52a8\u5316\u7684\u4ee3\u7801\u751f\u6210\uff0c\u6700\u7b80\u5355\u7684\u4f7f\u7528\u5982\u56fe\u6240\u793a\uff1a\n\u200b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import transformer from 'json-type-graphql';\nimport path from 'path';\n\n(async () => {\n  await transformer({\n    reader: {\n      url: 'http://127.0.0.1:7001/',\n    },\n    writter: {\n      outputPath: path.join(__dirname, './generated.ts'),\n    },\n  });\n})();\n")),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u4f1a\u751f\u6210\u8fd9\u6837\u4e00\u4e2a\u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ObjectType, Field, Int, ID } from 'type-graphql';\n\n@ObjectType()\nexport class Root {\n  @Field()\n  success!: boolean;\n\n  @Field()\n  message!: string;\n}\n")),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("p",null,"\u76ee\u524d\uff0cjson-to-type-graphql \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u80fd\u529b\uff1a\n\u200b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bf9\u8c61\u3001JSON \u6587\u4ef6\u6216\u8005\u662f URL \u4f5c\u4e3a\u6570\u636e\u6e90"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u7684\u9884\u5904\u7406\u5668\uff08pre-processer\uff09\u3001\u540e\u5904\u7406\u5668\uff08post-processer\uff09\u6765 hook \u8fdb\u5165\u6267\u884c\u903b\u8f91\u5185\u90e8"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5d4c\u5957\u7684\u5bf9\u8c61\uff0c\u4ee5\u53ca\u6570\u7ec4\u5165\u53e3\u7684 JSON\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"[{},{}]"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u5bf9\u5177\u6709\u7236\u5b50\u5173\u7cfb\u7684 Class \u8fdb\u884c\u6392\u5e8f\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"li"},"P-C1-C11-C12-C2-C21-C3-C31"),"."),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 Class \u540d\u7684\u524d\u7f00\u4e0e\u540e\u7f00\u914d\u7f6e\uff0c\u652f\u6301 TypeGraphQL ",(0,l.kt)("inlineCode",{parentName:"li"},"@Field()")," \u88c5\u9970\u5668\u7684 ReturnType")),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528 Prisma \u4f5c\u4e3a ORM\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/MichalLytek/typegraphql-prisma"},"typegraphql-prisma")," \u8fd9\u4e2a\u5e93\uff08\u6765\u81ea\u4e8e TypeGraphQL \u4f5c\u8005\uff09\u6765\u4ece Prisma Schema \u751f\u6210 TypeGraphQL Class\u3001Resolver\u3002"),(0,l.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h3",{id:"serverless"},"Serverless"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context"),"\uff1a \u5fc5\u4f20\uff0c\u4f7f\u7528 FaaS Context \u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),"\uff1aGraphQL API \u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"/graphql"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app"),"\uff1aFaaS \u5e94\u7528\u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prodPlayground"),"\uff1a\u5373\u4fbf\u5728\u751f\u4ea7\u73af\u5883\u4e5f\u5f00\u542f GraphQL Playground\uff0c\u540c\u65f6\u4f1a\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"introspection")," \u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"appendFaaSContext"),"\uff1a\u5c06 FaaS \u4e0a\u4e0b\u6587\u4e5f\u6ce8\u5165\u5230 GraphQL Context \u4e2d\uff0c\u53ef\u901a\u8fc7 TypeGraphQL ",(0,l.kt)("inlineCode",{parentName:"li"},"@Ctx")," \u88c5\u9970\u5668\u83b7\u53d6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"builtInPlugins"),"\uff1a\u89c1 \u5185\u7f6e\u63d2\u4ef6\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apollo"),"\uff1a\u652f\u6301\u7684 Apollo Server \u9009\u9879\uff0c\u53c2\u8003\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schema"),"\uff1a\u652f\u6301\u7684 TypeGraphQL buildSchemaSync \u9009\u9879\uff0c\u53c2\u8003\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disableHealthCheck"),"\uff1a\u7981\u7528 Apollo Server \u5185\u7f6e\u7684 Health Check\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onHealthCheck"),"\uff1a\u81ea\u5b9a\u4e49 Apollo Server \u5185\u7f6e\u7684 Health Check \u884c\u4e3a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disableHealthResolver"),"\uff1a\u7981\u7528\u5185\u7f6e \u7684 Health Check Resolver\u3002")),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),"\uff1aGraphQL API \u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"/graphql"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"prodPlayground"),"\uff1a\u5373\u4fbf\u5728\u751f\u4ea7\u73af\u5883\u4e5f\u5f00\u542f GraphQL Playground\uff0c\u540c\u65f6\u4f1a\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"li"},"introspection")," \u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"appendApplicationContext"),"\uff1a\u5c06\u5e94\u7528\u4e0a\u4e0b\u6587\u4e5f\u6ce8\u5165\u5230 GraphQL Context \u4e2d\uff0c\u53ef\u901a\u8fc7 TypeGraphQL ",(0,l.kt)("inlineCode",{parentName:"li"},"@Ctx")," \u88c5\u9970\u5668\u83b7\u53d6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"builtInPlugins"),"\uff1a\u89c1 \u5185\u7f6e\u7684\u63d2\u4ef6\u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apollo"),"\uff1a\u652f\u6301\u7684 Apollo Server \u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"schema"),"\uff1a\u652f\u6301\u7684 TypeGraphQL buildSchemaSync \u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disableHealthCheck"),"\uff1a\u7981\u7528 Apollo Server \u5185\u7f6e\u7684 Health Check\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"onHealthCheck"),"\uff1a\u81ea\u5b9a\u4e49 Apollo Server \u5185\u7f6e\u7684 Health Check \u884c\u4e3a\uff0cKoa \u4e0e Express \u4e0b\u7684\u5177\u4f53\u5165\u53c2\u4e0d\u540c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cors"),"\uff1a\u5728 Koa \u4e0b\u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"@koa/cors")," \u914d\u7f6e\uff0c\u5728 Express \u4e0b\u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"cors")," \u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bodyParserConfig"),"\uff1a\u5728 Koa \u4e0b\u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"koa-bodyparser")," \u914d\u7f6e\uff0c\u5728 Express \u4e0b\u7b49\u540c\u4e8e ",(0,l.kt)("inlineCode",{parentName:"li"},"body-parser")," \u914d\u7f6e\u3002")),(0,l.kt)("h3",{id:"\u5185\u7f6e\u63d2\u4ef6"},"\u5185\u7f6e\u63d2\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resolveTime")," \u5c06\u8bf7\u6c42\u6d88\u8017\u7684\u65f6\u95f4\u5728 GraphQL Extensions \u4e2d\u8fd4\u56de",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),"\uff1a\u662f\u5426\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"queryComplexity")," \u68c0\u67e5 GraphQL Query \u7684\u590d\u6742\u5ea6",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enable"),"\uff1a\u662f\u5426\u542f\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"maxComlexity"),"\uff1a\u6700\u5927\u590d\u6742\u5ea6"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"throwOnMaximum"),"\uff1a\u5728\u8d85\u51fa\u6700\u5927\u590d\u6742\u5ea6\u65f6\uff0c\u662f\u5426\u629b\u51fa\u9519\u8bef"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contextExtension"),"\uff1a\u5c06 Midway Container \u7684\u4fe1\u606f\u4ee5\u53ca\u5e94\u7528\u4e0a\u4e0b\u6587\u4fe1\u606f\u5728 GraphQL Extensions \u4e2d\u8fd4\u56de\uff0c\u7528\u4e8e DEBUG",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enabled"),"\uff1a\u662f\u5426\u542f\u7528"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"printSchema"),"\uff1a\u5c06 API \u4f7f\u7528\u7684 GraphQL Schema \u5728 GraphQL Extensions \u4e2d\u8fd4\u56de",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"enable"),"\uff1a\u662f\u5426\u542f\u7528"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sort"),"\uff1a\u662f\u5426\u8fdb\u884c\u8bcd\u6cd5\u6392\u5e8f\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"lexicographicSortSchema"),"\uff09")))),(0,l.kt)("p",null,"\u200b"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u7c7b\u578b\u5b9a\u4e49"},"\u914d\u7f6e\u7c7b\u578b\u5b9a\u4e49"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export type UsableApolloOption = Pick<\n  ApolloServerConfig,\n  | 'persistedQueries'\n  | 'plugins'\n  | 'context'\n  | 'formatError'\n  | 'formatResponse'\n  | 'rootValue'\n  | 'dataSources'\n  | 'introspection'\n  | 'mocks'\n  | 'mockEntireSchema'\n  | 'schema'\n>;\n\nexport type UsableBuildSchemaOption = Pick<\n  BuildSchemaOptions,\n  'authChecker' | 'authMode' | 'dateScalarMode' | 'globalMiddlewares' | 'nullableByDefault' | 'skipCheck' | 'resolvers'\n>;\n\nexport type BuiltInPluginConfiguration = {\n  /**\n   * Enable Apollo-Resolve-Time plugin to report GraphQL resolving time as GraphQL Extension.\n   */\n  resolveTime?: {\n    enable?: boolean;\n  };\n  /**\n   * Enable Apollo-Query-Complexity plugin to report GraphQL query complexity as GraphQL Extension,\n   * and reject request when query complexity is greater than configurated.\n   */\n  queryComplexity?: {\n    enable?: boolean;\n    maxComlexity?: number;\n    throwOnMaximum?: boolean;\n  };\n  /**\n   * Enable plugin to send back `MidwayJS Container` information\u3001Application Context as GraphQL Extension.\n   */\n  contextExtension?: {\n    enable?: boolean;\n  };\n  /**\n   * Enable plugin to send back generated `GraphQL Schema` as GraphQL Extension.\n   */\n  printSchema?: {\n    enable?: boolean;\n    sort?: boolean;\n  };\n};\n\nexport type CreateGraphQLMiddlewareOption = {\n  /**\n   * GraphQL API path\n   */\n  path?: string;\n  /**\n   * Enable GraphQL Playground even in production.\n   * Requires `apollo.introspection` to be true for working correctly.\n   */\n  prodPlaygound?: boolean;\n  /**\n   * Add `Application Context` to GraphQL Context which you can get in GraphQL Resolvers.\n   */\n  appendApplicationContext?: boolean;\n  /**\n   * Built-In plugin options.\n   */\n  builtInPlugins?: BuiltInPluginConfiguration;\n  /**\n   * Supported ApolloServer options.\n   */\n  apollo?: UsableApolloOption;\n  /**\n   * Supported TyepeGraphQL buildSchemaSync options.\n   */\n  schema?: UsableBuildSchemaOption & Pick<BuildSchemaOptions, 'emitSchemaFile' | 'container'>;\n  /**\n   * Disable Apollo-Server health check.\n   */\n  disableHealthCheck?: boolean;\n};\n\nexport interface CreateKoaGraphQLMiddlewareOption extends CreateGraphQLMiddlewareOption {\n  /**\n   * CORS options, equal to @koa/cors options.\n   */\n  cors?: CORSOptions | boolean;\n  /**\n   * Customize health check handler.\n   */\n  onHealthCheck?: KoaServerRegistration['onHealthCheck'];\n  /**\n   * BodyParser options, equal to koa-bodyparser options.\n   */\n  bodyParserConfig?: BodyParserOptions | boolean;\n}\n\nexport interface CreateExpressGraphQLMiddlewareOption extends CreateGraphQLMiddlewareOption {\n  /**\n   * CORS options, equal to cors options.\n   */\n  cors?: corsMiddleware.CorsOptions | corsMiddleware.CorsOptionsDelegate | boolean;\n  /**\n   * Customize health check handler.\n   */\n  onHealthCheck?: ExpressServerRegistration['onHealthCheck'];\n  /**\n   * BodyParser options, equal to bodyparser options.\n   */\n  bodyParserConfig?: OptionsJson | boolean;\n}\n\nexport type CreateApolloHandlerOption = {\n  /**\n   * Required. FaaS Context.\n   */\n  context: Context;\n  /**\n   * GraphQL API path\n   */\n  path?: string;\n  /**\n   * FaaS Application.\n   */\n  app?: IMidwayFaaSApplication;\n  /**\n   * Enable GraphQL Playground even in production.\n   * Requires `apollo.introspection` to be true for working correctly.\n   */\n  prodPlaygound?: boolean;\n  /**\n   * Add `FaaS Context` to GraphQL Context which you can get in GraphQL Resolvers.\n   */\n  appendFaaSContext?: boolean;\n  /**\n   * Built-In plugin options.\n   */\n  builtInPlugins?: BuiltInPluginConfiguration;\n  /**\n   * Supported ApolloServer options.\n   */\n  apollo?: UsableApolloOption;\n  /**\n   * Supported TyepeGraphQL buildSchemaSync options.\n   */\n  schema?: UsableBuildSchemaOption;\n  /**\n   * Disable Apollo-Server health check.\n   */\n  disableHealthCheck?: boolean;\n  /**\n   * Disable Built-In health check resolver.\n   */\n  disableHealthResolver?: boolean;\n  /**\n   * Customize health check handler.\n   */\n  onHealthCheck?: (req: MidwayReq) => Promise<unknown>;\n};\n")))}u.isMDXComponent=!0}}]);
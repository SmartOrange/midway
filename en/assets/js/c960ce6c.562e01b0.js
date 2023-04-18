"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={},l="Guards",i={unversionedId:"guard",id:"guard",title:"Guards",description:"Starting from v3.6.0, Midway provides guard capability.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guard.md",sourceDirName:".",slug:"/guard",permalink:"/en/docs/guard",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/guard.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"pipeline",permalink:"/en/docs/pipe"},next:{title:"Use components",permalink:"/en/docs/midway_component"}},s={},d=[{value:"Write guards",id:"write-guards",level:2},{value:"Use guards",id:"use-guards",level:2},{value:"Routing guard",id:"routing-guard",level:3},{value:"Global guard",id:"global-guard",level:3},{value:"Custom error",id:"custom-error",level:2},{value:"Example of Role-Based Authentication",id:"example-of-role-based-authentication",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guards"},"Guards"),(0,a.kt)("p",null,"Starting from v3.6.0, Midway provides guard capability."),(0,a.kt)("p",null,"The guard determines whether a given request is handled by the routing handler based on certain conditions that appear at runtime (such as permissions, roles, access control lists, etc.)."),(0,a.kt)("p",null,"In ordinary applications, these logics are usually processed in the middleware, but the logic of the middleware is too common, and it cannot be combined with routing methods gracefully. For this reason, we have designed guards after the middleware and before entering the routing method, which can facilitate method authentication and other processing."),(0,a.kt)("p",null,"The guard will execute ",(0,a.kt)("strong",{parentName:"p"},"after")," the middleware and ",(0,a.kt)("strong",{parentName:"p"},"before")," the routing method."),(0,a.kt)("p",null,"For the following code, we will take ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," as an example."),(0,a.kt)("h2",{id:"write-guards"},"Write guards"),(0,a.kt)("p",null,"In general, you can write a guard in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/guard")," folder."),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/guard/auth.guard.ts")," to verify whether the route can be accessed by the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller\n\u2502   \u2502   \u251c\u2500\u2500 user.controller.ts\n\u2502   \u2502   \u2514\u2500\u2500 home.controller.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u251c\u2500\u2500 guard\n\u2502   \u2502   \u2514\u2500\u2500 auth.guard.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,a.kt)("p",null,"Midway uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Guard")," decorator to identify the guard. The sample code is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"canActivate")," method is used to verify whether subsequent methods can be accessed in the request. When true is returned, subsequent methods will be executed. When false is ",(0,a.kt)("inlineCode",{parentName:"p"},"canActivate"),", 403 error codes will be thrown."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Note that currently only class Controller can use guards.")),(0,a.kt)("h2",{id:"use-guards"},"Use guards"),(0,a.kt)("p",null,"Guards can be applied to different frameworks, under http, can be applied to globals, controllers and methods."),(0,a.kt)("h3",{id:"routing-guard"},"Routing guard"),(0,a.kt)("p",null,"After writing the guard, we need to apply it to each controller route."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"UseGuard")," decorators, we can apply them to classes and methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller } from '@midwayjs/core';\nimport { AuthGuard } from '../guard/auth.guard';\n\n@UseGuard(AuthGuard)\n@Controller('/')\nexport class HomeController {\n\n}\n")),(0,a.kt)("p",null,"Midway also provides middleware parameters on route decorators such as ",(0,a.kt)("inlineCode",{parentName:"p"},"@Get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Post")," to facilitate middleware interception of a single route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/core';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\nimport { AuthGuard } from '../guard/auth.guard';\n\n@Controller('/')\nexport class HomeController {\n\n  @UseGuard(AuthGuard)\n  @Get('/', { middleware: [ ReportMiddleware ]})\n  async home() {\n  }\n}\n")),(0,a.kt)("p",null,"You can also pass in arrays."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseGuard([AuthGuard, Auth2Guard])\n")),(0,a.kt)("h3",{id:"global-guard"},"Global guard"),(0,a.kt)("p",null,"We need to join the guard list of the current framework before the application starts. ",(0,a.kt)("inlineCode",{parentName:"p"},"useGuard")," method, we can add the guard to the guard list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { App, Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { AuthGuard } from './guard/auth.guard';\n\n@Configuration({\n  imports: [koa]\n  // ...\n})\nexport class MainConfiguration {\n\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    this.app.useGuard(AuthGuard);\n  }\n}\n")),(0,a.kt)("p",null,"In the same way, multiple guards can be added."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"async onReady() {\n  this.app.useGuard([AuthGuard, Auth2Guard]);\n}\n")),(0,a.kt)("h2",{id:"custom-error"},"Custom error"),(0,a.kt)("p",null,"By default, when the guard's ",(0,a.kt)("inlineCode",{parentName:"p"},"canActivate")," method returns false, the framework throws a 403 error (",(0,a.kt)("inlineCode",{parentName:"p"},"ForbiddenError")," )."),(0,a.kt)("p",null,"You can also decide on your own in the guard the errors that need to be thrown."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard, httpError } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, suppilerClz, methodName: string): Promise<boolean> {\n    // ...\n    if (methodName ==='xxx') {\n      throw new httpError.ForbiddenError();\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"example-of-role-based-authentication"},"Example of Role-Based Authentication"),(0,a.kt)("p",null,"In general, we associate method access with roles, and let's simply implement a user role-based access control."),(0,a.kt)("p",null,"First, we define a ",(0,a.kt)("inlineCode",{parentName:"p"},"@Role")," decorator to set the access permissions of the method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/decorator/role.decorator.ts\nimport { savePropertyMetadata } from '@midwayjs/core';\n\nexport const ROLE_META_KEY = 'role:name'\n\nexport function Role(roleName: string | string[]): MethodDecorator {\n  return (target, propertyKey, descriptor) => {\n    roleName = [].concat(roleName);\n    // Save only metadata\n    savePropertyMetadata(ROLE_META_KEY, roleName, target, propertyKey);\n  };\n}\n")),(0,a.kt)("p",null,"Write a guard for role authentication."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IMiddleware, Guard, IGuard, getPropertyMetadata } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { ROLE_META_KEY } from '../decorator/role.decorator.ts';\n\n@Guard()\nexport class AuthGuard implements IGuard<Context> {\n  async canActivate(context: Context, supplierClz, methodName: string): Promise<boolean> {\n    // Get role information from class metadata\n    const roleNameList = getPropertyMetadata<string[]>(ROLE_META_KEY, supplierClz, methodName);\n    if (roleNameList && roleNameList.length && context.user.role) {\n      // Assume that the middleware has already obtained the user role information and saved it to context.user.role\n            // Directly determine whether to change the role\n      return roleNameList.includes(context.user.role);\n    }\n\n    return false;\n  }\n}\n")),(0,a.kt)("p",null,"Use this guard on the route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/core';\nimport { ReportMiddleware } from '../middleware/report.middlweare';\nimport { AuthGuard } from '../guard/auth.guard';\n\n@UseGuard(AuthGuard)\n@Controller('/user')\nexport class HomeController {\n\n  // Only admin access is allowed\n  @Role(['admin'])\n  @Get('/getUserRoles')\n  async getUserRoles() {\n    // ...\n  }\n}\n")),(0,a.kt)("p",null,"Only when ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.user.role")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," is allowed to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"/getUserRoles")," route."))}c.isMDXComponent=!0}}]);
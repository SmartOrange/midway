"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={},l="Local task",i={unversionedId:"extensions/cron",id:"extensions/cron",title:"Local task",description:"Unlike the bull component, the cron component provides local task capabilities, that is, every process on every machine will execute. If you need to execute tasks only once between different machines or different processes, please use bull component .",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/cron.md",sourceDirName:"extensions",slug:"/extensions/cron",permalink:"/en/docs/extensions/cron",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/cron.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Task Queues",permalink:"/en/docs/extensions/bull"},next:{title:"JWT",permalink:"/en/docs/extensions/jwt"}},s={},c=[{value:"Install components",id:"install-components",level:2},{value:"Using components",id:"using-components",level:2},{value:"Write task processing class",id:"write-task-processing-class",level:2},{value:"Task Management",id:"task-management",level:2},{value:"Get task object",id:"get-task-object",level:3},{value:"Start and stop tasks",id:"start-and-stop-tasks",level:3},{value:"context",id:"context",level:2},{value:"Component logger",id:"component-logger",level:2},{value:"Global configuration",id:"global-configuration",level:2}],p={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-task"},"Local task"),(0,o.kt)("p",null,"Unlike the bull component, the cron component provides local task capabilities, that is, every process on every machine will execute. If you need to execute tasks only once between different machines or different processes, please use ",(0,o.kt)("a",{parentName:"p",href:"./bull"},"bull component")," ."),(0,o.kt)("p",null,"Related Information:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Available for Standard Items"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Available for Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contains independent main frame"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Contains standalone logs"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("h2",{id:"install-components"},"Install components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cron@3 --save\n")),(0,o.kt)("p",null,"Or add the following dependencies in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," and reinstall."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "dependencies": {\n     "@midwayjs/cron": "^3.0.0",\n     //...\n   },\n}\n')),(0,o.kt)("h2",{id:"using-components"},"Using components"),(0,o.kt)("p",null,"Configure components into code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as cron from '@midwayjs/cron';\n\n@Configuration({\n   imports: [\n     //...\n     cron\n   ]\n})\nexport class MainConfiguration {\n   //...\n}\n")),(0,o.kt)("h2",{id:"write-task-processing-class"},"Write task processing class"),(0,o.kt)("p",null,"Decorate a class with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Job")," decorator to quickly define a job handler."),(0,o.kt)("p",null,"For example, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"sync.job.ts")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/job")," directory for some data synchronization tasks, the code is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/job/sync.job.ts\nimport { Job, IJob } from '@midwayjs/cron';\nimport { FORMAT } from '@midwayjs/core';\n\n@Job({\n   cronTime: FORMAT.CRONTAB.EVERY_PER_30_MINUTE,\n   start: true,\n})\nexport class DataSyncCheckerJob implements IJob {\n   async onTick() {\n     //...\n   }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Job")," decorator is used to decorate a task class, and the framework will automatically convert it into a task when it is initialized."),(0,o.kt)("p",null,"The task class needs to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"IJob")," interface and implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTick")," method. Whenever the task is triggered, the ",(0,o.kt)("inlineCode",{parentName:"p"},"onTick")," method will be called automatically."),(0,o.kt)("p",null,"Additionally, there is an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"onComplete")," method to be executed after ",(0,o.kt)("inlineCode",{parentName:"p"},"onTick")," has completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Job({\n   cronTime: FORMAT.CRONTAB.EVERY_PER_30_MINUTE,\n   start: true,\n})\nexport class DataSyncCheckerJob implements IJob {\n   async onTick() {\n     //...\n   }\n  \n   async onComplete() {\n     // Record some data, etc., not very useful\n   }\n}\n")),(0,o.kt)("p",null,"Common parameters of the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Job")," decorator are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cronTime"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"crontab expression")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"start"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to automatically start the task")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"runOnInit"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether to execute once at initialization")))),(0,o.kt)("p",null,"For more parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kelektiv/node-cron"},"Cron"),"."),(0,o.kt)("h2",{id:"task-management"},"Task Management"),(0,o.kt)("p",null,"In addition to timing tasks, we also manually manage tasks through the API provided by the framework."),(0,o.kt)("p",null,"For example, the following code only defines a task, but does not start execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Job('syncJob', {\n   cronTime: '*/2 * * * * *', // execute every 2s\n})\nexport class DataSyncCheckerJob implements IJob {\n   async onTick() {\n     //...\n   }\n}\n")),(0,o.kt)("p",null,"We define a job called ",(0,o.kt)("inlineCode",{parentName:"p"},"syncJob")," and give it a default schedule."),(0,o.kt)("h3",{id:"get-task-object"},"Get task object"),(0,o.kt)("p",null,"We can get the task object in two ways."),(0,o.kt)("p",null,"It is used to inject a task through ",(0,o.kt)("inlineCode",{parentName:"p"},"@InjectJob"),", and the parameter is the class itself or the task name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, Inject } from '@midwayjs/core';\nimport * as cron from '@midwayjs/cron';\nimport { InjectJob, CronJob } from '@midwayjs/cron';\nimport { DataSyncCheckerJob } from './job/sync.job';\n\n@Configuration({\n   imports: [\n     cron\n   ],\n})\nexport class ContainerConfiguration {\n   @InjectJob(DataSyncCheckerJob)\n   syncJob: CronJob;\n  \n   @InjectJob('syncJob')\n   syncJob2: CronJob;\n\n   async onServerReady() {\n     // this.syncJob === this.syncJob2\n   }\n}\n\n")),(0,o.kt)("p",null,"Obtained through the Framework API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, Inject } from '@midwayjs/core';\nimport * as cron from '@midwayjs/cron';\nimport { InjectJob, CronJob } from '@midwayjs/cron';\nimport { DataSyncCheckerJob } from './job/sync.job';\n\n@Configuration({\n   imports: [\n     cron\n   ],\n})\nexport class ContainerConfiguration {\n   @Inject()\n   cronFramework: cron.Framework;\n\n   async onServerReady() {\n     const syncJob = this.cronFramework.getJob(DataSyncCheckerJob);\n     const syncJob2 = this.cronFramework.getJob('syncJob');\n    \n     // syncJob === syncJob2\n   }\n}\n\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that the task object must be obtained after the ",(0,o.kt)("inlineCode",{parentName:"p"},"onServerReady")," life cycle or startup.")),(0,o.kt)("h3",{id:"start-and-stop-tasks"},"Start and stop tasks"),(0,o.kt)("p",null,"We can start this task after initialization or after some program execution is completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, Inject } from '@midwayjs/core';\nimport * as cron from '@midwayjs/cron';\nimport { InjectJob, CronJob } from '@midwayjs/cron';\nimport { DataSyncCheckerJob } from './job/sync.job';\n\n@Configuration({\n   imports: [\n     cron\n   ],\n})\nexport class ContainerConfiguration {\n   @InjectJob(DataSyncCheckerJob)\n   syncJob: CronJob;\n\n   async onServerReady() {\n     this.syncJob.start();\n    \n     //...\n     this.syncJob.stop();\n   }\n}\n\n")),(0,o.kt)("h2",{id:"context"},"context"),(0,o.kt)("p",null,"Task execution is in request scope, which has a special Context object structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Context extends IMidwayContext {\n   job: CronJob;\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CronJob")," type here comes from the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-cron")," package."),(0,o.kt)("h2",{id:"component-logger"},"Component logger"),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.logger")," will be recorded in ",(0,o.kt)("inlineCode",{parentName:"p"},"midway-cron.log"),"."),(0,o.kt)("p",null,"We can configure this logger object individually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n   midwayLogger: {\n     //...\n     clients: {\n       //...\n       cronLogger: {\n         fileLogName: 'midway-cron.log',\n       },\n     }\n   }\n}\n")),(0,o.kt)("h2",{id:"global-configuration"},"Global configuration"),(0,o.kt)("p",null,"Some global configurations can be made for the Job, which will be merged with the configuration of each Job."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n   cron: {\n     defaultCronJobOptions: {\n       //...\n     }\n   }\n}\n")),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kelektiv/node-cron/blob/main/lib/job.js#L51"},"CronJobParameters")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultCronJobOptions")," configuration items here"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},o="Task Queues",s={unversionedId:"extensions/bull",id:"extensions/bull",title:"Task Queues",description:"Queues are a powerful design pattern that can help you meet common application scaling and performance challenges. Some of the problems queues can help you solve.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/bull.md",sourceDirName:"extensions",slug:"/extensions/bull",permalink:"/en/docs/extensions/bull",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/bull.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Swagger",permalink:"/en/docs/extensions/swagger"},next:{title:"Local task",permalink:"/en/docs/extensions/cron"}},i={},u=[{value:"Installing components",id:"installing-components",level:2},{value:"Using components",id:"using-components",level:2},{value:"Some concepts",id:"some-concepts",level:2},{value:"Basic configuration",id:"basic-configuration",level:2},{value:"Writing task processors",id:"writing-task-processors",level:2},{value:"Executing tasks",id:"executing-tasks",level:2},{value:"Executing tasks manually",id:"executing-tasks-manually",level:3},{value:"Adding execution parameters",id:"adding-execution-parameters",level:3},{value:"Task status and management",id:"task-status-and-management",level:3},{value:"Delayed execution",id:"delayed-execution",level:3},{value:"Middleware and error handling",id:"middleware-and-error-handling",level:3},{value:"Context",id:"context",level:3},{value:"More task options",id:"more-task-options",level:3},{value:"Repeatedly executed tasks",id:"repeatedly-executed-tasks",level:2},{value:"Common Cron expressions",id:"common-cron-expressions",level:2},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Clean up previous tasks",id:"clean-up-previous-tasks",level:3},{value:"Clearing task history",id:"clearing-task-history",level:3},{value:"Redis Clustering",id:"redis-clustering",level:3},{value:"Queue Management",id:"queue-management",level:2},{value:"Manual queue creation",id:"manual-queue-creation",level:3},{value:"Get the queue",id:"get-the-queue",level:3},{value:"Queue common operations",id:"queue-common-operations",level:3},{value:"Component logging",id:"component-logging",level:2},{value:"About Redis version",id:"about-redis-version",level:2},{value:"Bull UI",id:"bull-ui",level:2},{value:"Common problems",id:"common-problems",level:2},{value:"1. EVALSHA error",id:"1-evalsha-error",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"task-queues"},"Task Queues"),(0,r.kt)("p",null,"Queues are a powerful design pattern that can help you meet common application scaling and performance challenges. Some of the problems queues can help you solve."),(0,r.kt)("p",null,"Examples are as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Smoothing out peaks. You can start resource-intensive tasks at any time and then add them to a queue instead of executing them synchronously. Let task processes pull tasks from the queue in a controlled manner. It is also easy to add new queue consumers to extend back-end task processing."),(0,r.kt)("li",{parentName:"ul"},"Decompose single tasks that might block the Node.js event loop. For example, if a user request requires CPU-intensive work like audio transcoding, this task can be delegated to another process, freeing up the user-facing process to maintain a response."),(0,r.kt)("li",{parentName:"ul"},"Provide reliable communication channels across various services. For example, you can queue tasks (jobs) in one process or service and use them in another process or service. You can receive notifications (by listening for status events) when a job completes, errors, or other status changes during the job lifecycle of any process or service. When a queue producer or consumer fails, their state is retained and job processing can be automatically restarted when the node is restarted.")),(0,r.kt)("p",null,"Midway provides the @midwayjs/bull package as an abstraction/wrapper on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull"},"Bull"),", a popular, well-supported, high performance NPP-based application. well-supported, high-performance implementation of the Node.js-based queueing system. This package makes it easy to integrate Bull Queues into your application."),(0,r.kt)("p",null,"Bull uses Redis to hold job data, and when using Redis, the Queue architecture is fully distributed and platform independent. For example, you can run some Queue producers, consumers in one (or more) nodes (processes), and other producers and consumers on other nodes."),(0,r.kt)("p",null,"This chapter introduces the @midwayjs/bull package. We also recommend reading the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull/blob/master/REFERENCE.md"},"Bull documentation")," for more background and implementation details."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"As of v3.6.0, the original task scheduling ",(0,r.kt)("inlineCode",{parentName:"li"},"@midwayjs/task")," module is deprecated, so if you check the history documentation, please refer to ","[here]","(. /legacy/task)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"bull is a distributed task management system and must rely on redis"))))),(0,r.kt)("p",null,"Related information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Available for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Available for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Available for Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Include standalone mainframe"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Includes standalone logging"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"installing-components"},"Installing components"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/bull@3 --save\n")),(0,r.kt)("p",null,"Or reinstall it after adding the following dependencies to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/bull": "^3.0.0",\n    // ...\n  },\n}\n')),(0,r.kt)("h2",{id:"using-components"},"Using components"),(0,r.kt)("p",null,"Configure the bull component into the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as bull from '@midwayjs/bull';\n\n@Configuration({\n  imports: [\n    // ...\n    bull\n  ]\n})\nexport class MainConfiguration {\n  // ...\n}\n")),(0,r.kt)("h2",{id:"some-concepts"},"Some concepts"),(0,r.kt)("p",null,"Bull divides the entire queue into three parts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1, Queue queue, which manages tasks"),(0,r.kt)("li",{parentName:"ul"},"2, Job, each task object, you can start and stop control of the task"),(0,r.kt)("li",{parentName:"ul"},"3\u3001Processor, task processing, the actual logical execution part")),(0,r.kt)("h2",{id:"basic-configuration"},"Basic configuration"),(0,r.kt)("p",null,"bull is a distributed task manager with a strong dependency on redis, configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.default.ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  bull: {\n    // default queue configuration\n    defaultQueueOptions: {\n        redis: 'redis://127.0.0.1:32768',\n    }\n  },\n}\n")),(0,r.kt)("p",null,"With account password case."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  bull: {\n    defaultQueueOptions: {\n      redis: {\n        port: 6379,\n        host: '127.0.0.1',\n        password: 'foobared',\n      },\n    }\n  },\n}\n")),(0,r.kt)("p",null,"All queues will reuse this configuration."),(0,r.kt)("h2",{id:"writing-task-processors"},"Writing task processors"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Processor")," decorator to decorate a class for quickly defining a task processor (we don't use Job here to avoid subsequent ambiguity)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@Processor")," decorator needs to be passed the name of a Queue (queue) that will be created automatically when the framework starts if there is no queue named ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,r.kt)("p",null,"For example, we write the following code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/queue/test.queue.ts")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/queue/test.queue.ts\nimport { Processor, IProcessor } from '@midwayjs/bull';\n\n@Processor('test')\nexport class TestProcessor implements IProcessor {\n  async execute() {\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,"At startup, the framework automatically finds and initializes the above processor code, and automatically creates a Queue named ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,r.kt)("h2",{id:"executing-tasks"},"Executing tasks"),(0,r.kt)("p",null,"After defining the Processor, we need to execute it manually since it is not specified how to execute it."),(0,r.kt)("p",null,"By getting the corresponding queue, we can easily execute the task."),(0,r.kt)("h3",{id:"executing-tasks-manually"},"Executing tasks manually"),(0,r.kt)("p",null,"For example, we can execute it after the project is started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, Inject } from '@midwayjs/core';\nimport * as bull from '@midwayjs/bull';\n\n@Configuration({\n  imports: [\n    // ...\n    bull\n  ]\n})\nexport class MainConfiguration {\n\n  @Inject()\n  bullFramework: bull;\n\n  //...\n\n  async onServerReady() {\n    // Get the Processor-related queue\n    const testQueue = this.bullFramework.getQueue('test');\n    // Execute this task immediately\n    await testQueue?.runJob();\n  }\n}\n")),(0,r.kt)("h3",{id:"adding-execution-parameters"},"Adding execution parameters"),(0,r.kt)("p",null,"We can also attach some default parameters to the execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Processor('test')\nexport class TestProcessor implements IProcessor {\n  async execute(params) {\n    // params.aaa => 1\n  }\n}\n\n\n// invoke\nconst testQueue = this.bullFramework.getQueue('test');\n// Execute this task immediately\nawait testQueue?.runJob({\n  aaa: 1,\n  bbb: 2,\n});\n")),(0,r.kt)("h3",{id:"task-status-and-management"},"Task status and management"),(0,r.kt)("p",null,"After executing ",(0,r.kt)("inlineCode",{parentName:"p"},"runJob"),", we can get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// invoke\nconst testQueue = this.bullFramework.getQueue('test');\nconst job = await testQueue?.runJob();\n")),(0,r.kt)("p",null,"With this Job object, we can do progress management."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Update progress\nawait job.progress(60);\n// Get the progress\nconst progress = await job.process();\n// => 60\n")),(0,r.kt)("p",null,"Gets the job status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const state = await job.getState();\n// state => 'delayed' Delayed state\n// state => 'completed' completed state\n")),(0,r.kt)("p",null,"For more Job API, please see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md"},"documentation"),"."),(0,r.kt)("h3",{id:"delayed-execution"},"Delayed execution"),(0,r.kt)("p",null,"There are also some additional options when executing tasks."),(0,r.kt)("p",null,"For example, delay execution by 1s."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const testQueue = this.bullFramework.getQueue('test');\n// Execute this task immediately\nawait testQueue?.runJob({}, { delay: 1000 });\n")),(0,r.kt)("h3",{id:"middleware-and-error-handling"},"Middleware and error handling"),(0,r.kt)("p",null,"The Bull component contains a framework that can be started independently, with its own App object and Context structure."),(0,r.kt)("p",null,"We can configure separate middleware and error filters for bull's App."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Configuration({\n  imports: [\n    // ...\n    bull\n  ]\n})\nexport class MainConfiguration {\n\n  @App('bull')\n  bullApp: bull.Application;\n\n  //...\n\n  async onReady() {\n    this.bullApp.useMiddleare( /*middleware*/);\n    this.bullApp.useFilter( /*filter*/);\n  }\n}\n")),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"The task processor execution is in the request scope, which has a special Context object structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Context extends IMidwayContext {\n  jobId: JobId;\n  job: Job,\n  from: new (...args) => IProcessor;\n}\n")),(0,r.kt)("p",null,"We can access the current Job object directly from the ctx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/queue/test.queue.ts\nimport { Processor, IProcessor, Context } from '@midwayjs/bull';\n\n@Processor('test')\nexport class TestProcessor implements IProcessor {\n\n  @Inject()\n  ctx: Context;\n\n  async execute() {\n    // ctx.jobId => xxxx\n  }\n}\n")),(0,r.kt)("h3",{id:"more-task-options"},"More task options"),(0,r.kt)("p",null,"In addition to the above delay, there are more execution options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"options"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The optional priority value. The range is from 1 (highest priority) to MAX_INT (lowest priority). Note that using priority has a slight performance impact, so please use it with caution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time (in milliseconds) to wait for this job to be processed. Note that both the server and the client should synchronize their clocks in order to get an accurate delay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attempts"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The total number of attempts before the job completes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repeat"),(0,r.kt)("td",{parentName:"tr",align:null},"RepeatOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"Repeat task configuration according to the cron specification, see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queueadd"},"RepeatOpts")," for more information, and the following Repeat tasks are described below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backoff"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," BackoffOpts"),(0,r.kt)("td",{parentName:"tr",align:null},"Backoff settings for automatic retries on task failure. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/OptimalBits/bull/blob/master/REFERENCE.md#queueadd"},"BackoffOpts"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lifo"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, add the task to the right end of the queue instead of the left end (default is false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of milliseconds for which the task failed due to a timeout error.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jobId"),(0,r.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},"Override job id - By default, the job id is a unique integer, but you can use this setting to override it. If you use this option, it is up to you to ensure that the jobId is unique. If you try to add a job with an id that already exists, it will not be added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeOnComplete"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, removes the job upon successful completion. If set to number, the number of tasks to keep for the specified task. The default behavior is to keep the task information in the completed list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeOnFail"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, removes the task if it fails after all attempts. If set to number, specify the number of tasks to keep. The default behavior is to keep the task information in the failed list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stackTraceLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Limits the number of stack trace lines that will be recorded in the stack trace.")))),(0,r.kt)("h2",{id:"repeatedly-executed-tasks"},"Repeatedly executed tasks"),(0,r.kt)("p",null,"In addition to manual execution, we can also quickly configure repeated execution of tasks with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Processor")," decorator parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Processor, IProcessor } from '@midwayjs/bull';\nimport { FORMAT } from '@midwayjs/core';\n\n@Processor('test', {\n  repeat: {\n    cron: FORMAT.CRONTAB.EVERY_PER_5_SECOND\n  }\n})\nexport class TestProcessor implements IProcessor {\n  @Inject()\n  logger;\n\n  async execute() {\n    // ...\n  }\n}\n")),(0,r.kt)("h2",{id:"common-cron-expressions"},"Common Cron expressions"),(0,r.kt)("p",null,"For Cron expressions, the format is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"*    *    *    *    *    *\n\u252c    \u252c    \u252c    \u252c    \u252c    \u252c\n\u2502    \u2502    \u2502    \u2502    \u2502    |\n\u2502    \u2502    \u2502    \u2502    \u2502    \u2514 day of week (0 - 7) (0 or 7 is Sun)\n\u2502    \u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n\u2502    \u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of month (1 - 31)\n\u2502    \u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n\u2502    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 second (0 - 59, optional)\n")),(0,r.kt)("p",null,"Common expressions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Execute every 5 seconds: ",(0,r.kt)("inlineCode",{parentName:"li"},"*/5 * * * * * *")),(0,r.kt)("li",{parentName:"ul"},"Execute every 1 minute: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 */1 * * * * * ")),(0,r.kt)("li",{parentName:"ul"},"Once every hour at 20 minutes: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 20 * * * * * ")),(0,r.kt)("li",{parentName:"ul"},"Once a day at 0:00: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 0 0 * * * *")),(0,r.kt)("li",{parentName:"ul"},"Once a day at 2:35: ",(0,r.kt)("inlineCode",{parentName:"li"},"0 35 2 * * * *"))),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://cron.qqe2.com/"},"online tool")," to confirm the time of the next execution."),(0,r.kt)("p",null,"Midway provides some common expressions on the framework side in ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," for your use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FORMAT } from '@midwayjs/core';\n\n// cron expressions executed per minute\nFORMAT.CRONTAB.EVERY_MINUTE\n")),(0,r.kt)("p",null,"There are some other expressions built in."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"expression"),(0,r.kt)("th",{parentName:"tr",align:null},"corresponding time"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"per second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"per minute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_HOUR"),(0,r.kt)("td",{parentName:"tr",align:null},"Hourly")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_DAY"),(0,r.kt)("td",{parentName:"tr",align:null},"Every day at 0:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_DAY_ZERO_FIFTEEN"),(0,r.kt)("td",{parentName:"tr",align:null},"0:15 PM per day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_DAY_ONE_FIFTEEN"),(0,r.kt)("td",{parentName:"tr",align:null},"1:15 PM per day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_PER_5_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"every 5 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_PER_10_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"every 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_PER_30_SECOND"),(0,r.kt)("td",{parentName:"tr",align:null},"every 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CRONTAB.EVERY_PER_5_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"every 5 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_PER_10_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"every 10 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EVERY_PER_30_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"every 30 minutes")))),(0,r.kt)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,r.kt)("h3",{id:"clean-up-previous-tasks"},"Clean up previous tasks"),(0,r.kt)("p",null,"By default, the framework automatically cleans up any previously unscheduled ",(0,r.kt)("strong",{parentName:"p"},"repeating tasks"),", keeping the queue of repeating tasks up to date for each one. If you don't need to clean up in some environments, you can turn it off separately."),(0,r.kt)("p",null,"For example, you do not need to clean up duplicates of."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.prod.ts\nexport default {\n  // ...\n  bull: {\n    clearRepeatJobWhenStart: false,\n  },\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you don't clean up, if the previous queue is executed at 10s and now it is modified to 20s, both timings will be stored in Redis, resulting in duplicate code execution."),(0,r.kt)("p",{parentName:"admonition"},"In daily development, if you do not clean up, it is easy to have this problem of repeated code execution. However, in a cluster deployment scenario, where multiple servers are restarted in turn, it may cause the timing task to be cleaned up accidentally, please evaluate the timing of the switch.")),(0,r.kt)("p",null,"It is also possible to clean up all tasks manually at startup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration, App, Inject } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { join } from 'path';\nimport * as bull from '@midwayjs/bull';\n\n@Configuration({\n  imports: [koa, bull],\n  importConfigs: [join(__dirname, '. /config')],\n})\nexport class MainConfiguration {\n  @App()\n  app: koa;\n\n  @Inject()\n  bullFramework: bull;\n\n  async onReady() {\n    // At this stage, the decorator queue has not been created yet, use the API to create the queue manually in advance, the decorator will reuse the queue with the same name\n    const queue = this.bullFramework.createQueue('user');\n    // perform cleanup manually via queue\n    await queue.obliterate({ force: true });\n  }\n}\n")),(0,r.kt)("h3",{id:"clearing-task-history"},"Clearing task history"),(0,r.kt)("p",null,"When Redis is turned on, by default, bull will record all successful and failed task keys, which may cause a key spike in redis, we can configure the option to clean up after success or failure."),(0,r.kt)("p",null,"By default"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3 task records are kept on success"),(0,r.kt)("li",{parentName:"ul"},"10 task records are retained on failure")),(0,r.kt)("p",null,"This can also be configured via parameters."),(0,r.kt)("p",null,"For example, in the decorator configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FORMAT } from '@midwayjs/core';\nimport { IProcessor, Processor } from '@midwayjs/bull';\n\n@Processor('user', {\n  repeat: {\n    cron: FORMAT.CRONTAB.EVERY_MINUTE,\n  },\n  removeOnComplete: 3, // remove task records after success, keep up to 3 recent records\n  removeOnFail: 10,   // remove task records after failure\n})\nexport class UserService implements IProcessor {\n  execute(data: any) {\n    // ...\n  }\n}\n\n")),(0,r.kt)("p",null,"Can also be configured in the global config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  bull: {\n    defaultQueueOptions: {\n      // default job configuration\n      defaultJobOptions: {\n        // Keep 10 records\n        removeOnComplete: 10,\n      },\n    },\n  },\n}\n")),(0,r.kt)("h3",{id:"redis-clustering"},"Redis Clustering"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createClient")," method provided by bull to access custom redis instances so you can access Redis clusters."),(0,r.kt)("p",null,"For example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport Redis from 'ioredis';\n\nconst clusterOptions = {\n  enableReadyCheck: false, // must be false\n  retryDelayOnClusterDown: 300,\n  retryDelayOnFailover: 1000,\n  retryDelayOnTryAgain: 3000,\n  slotsRefreshTimeout: 10000,\n  maxRetriesPerRequest: null // must be null\n}\n\nconst redisClientInstance = new Redis.\n  Cluster([\n    port: 7000,\n    host: '127.0.0.1'\n  },\n  {\n    port: 7002,\n    host: '127.0.0.1'\n  },\n], clusterOptions);\n\nexport default {\n  bull: {\n    defaultQueueOptions: {\n      createClient: (type, opts) => {\n        return redisClientInstance;\n      },\n      // The keys stored for these tasks all start with the same key to distinguish the user's original redis configuration\n      prefix: '{midway-bull}',\n    },\n  }\n}\n")),(0,r.kt)("h2",{id:"queue-management"},"Queue Management"),(0,r.kt)("p",null,"Queues are inexpensive, each Job is bound to a queue, and in some cases we can also manage queues manually by performing operations on them."),(0,r.kt)("h3",{id:"manual-queue-creation"},"Manual queue creation"),(0,r.kt)("p",null,"In addition to simply defining a queue using ",(0,r.kt)("inlineCode",{parentName:"p"},"@Processor"),", we can also create it using the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, Inject } from '@midwayjs/core';\nimport * as bull from '@midwayjs/bull';\n\n@Configuration({\n  imports: [\n    // ...\n    bull\n  ]\n})\nexport class MainConfiguration {\n\n  @Inject()\n  bullFramework: bull.Framework;\n\n  async onReady() {\n    const testQueue = this.bullFramework.createQueue('test', {\n      redis: {\n        port: 6379,\n        host: '127.0.0.1',\n        password: 'foobared',\n      },\n      prefix: '{midway-bull}',\n    });\n\n    // ...\n  }\n}\n")),(0,r.kt)("p",null,"After creating a queue manually with ",(0,r.kt)("inlineCode",{parentName:"p"},"createQueue"),", the queue will still be saved automatically. If the queue name is used by ",(0,r.kt)("inlineCode",{parentName:"p"},"@Processor")," at startup, the already created queue is automatically used."),(0,r.kt)("p",null,"For example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// will automatically use the queue with the same name created manually above\n@Processor('test')\nexport class TestProcessor implements IProcessor {\n  async execute(params) {\n  }\n}\n")),(0,r.kt)("h3",{id:"get-the-queue"},"Get the queue"),(0,r.kt)("p",null,"We can simply get the queue based on the queue name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," const testQueue = bullFramework.getQueue('test');\n")),(0,r.kt)("p",null,"You can also get it through a decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { InjectQueue, BullQueue } from '@midwayjs/bull';\nimport { Provide } from '@midwayjs/core';\n\n@Provide()\nexport class UserService {\n  @InjectQueue('test')\n  testQueue: BullQueue;\n\n  async invoke() {\n    await this.testQueue.pause();\n    // ...\n  }\n}\n")),(0,r.kt)("h3",{id:"queue-common-operations"},"Queue common operations"),(0,r.kt)("p",null,"Suspend the queue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await testQueue.pause();\n")),(0,r.kt)("p",null,"Continue the queue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"await testQueue.resume();\n")),(0,r.kt)("p",null,"Queue events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Local events pass the job instance...\ntestQueue.on('progress', function (job, progress) {\n  console.log(`Job ${job.id} is ${progress * 100}% ready!`);\n});\n\ntestQueue.on('completed', function (job, result) {\n  console.log(`Job ${job.id} completed! Result: ${result}`);\n  job.remove();\n});\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md"},"here")," for the full queue API."),(0,r.kt)("h2",{id:"component-logging"},"Component logging"),(0,r.kt)("p",null,"The component has its own log, which by default will be ",(0,r.kt)("inlineCode",{parentName:"p"},"ctx.logger")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"midway-bull.log"),"."),(0,r.kt)("p",null,"We can configure this logger object separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  midwayLogger: {\n    // ...\n    bullLogger: {\n      fileLogName: 'midway-bull.log',\n    },\n  }\n}\n")),(0,r.kt)("p",null,"The output format of this log, we can also configure separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  bull: {\n    // ...\n    contextLoggerFormat: info => {\n      const { jobId, from } = info.ctx;\n      return `${info.timestamp} ${info.LEVEL} ${info.pid} [${jobId} ${from.name}] ${info.message}`;\n    },\n  }\n}\n")),(0,r.kt)("h2",{id:"about-redis-version"},"About Redis version"),(0,r.kt)("p",null,"Please choose the latest version (>=5) if possible. Currently, there is a problem of scheduled task creation failure on lower versions of redis."),(0,r.kt)("h2",{id:"bull-ui"},"Bull UI"),(0,r.kt)("p",null,"In a distributed scenario, we can leverage the Bull UI to simplify management."),(0,r.kt)("p",null,"Similar to the bull component, it needs to be installed and enabled independently."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/bull-board@3 --save\n")),(0,r.kt)("p",null,"Or reinstall it after adding the following dependencies to ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/bull-board": "^3.0.0",\n    // ...\n  },\n}\n')),(0,r.kt)("p",null,"Configure the bull-board component into the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/core';\nimport * as bull from '@midwayjs/bull';\nimport * as bullBoard from '@midwayjs/bull-board';\n\n@Configuration({\n  imports: [\n    // ...\n    bull,\n    bullBoard,\n  ]\n})\nexport class MainConfiguration {\n  //...\n}\n")),(0,r.kt)("p",null,"The default access path is: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.1:7001/ui"),"."),(0,r.kt)("p",null,"The effect is as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01j4wEFb1UacPxA06gs_!!6000000002534-2-tps-1932-1136.png",alt:null})),(0,r.kt)("p",null,"The base path can be modified by configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.prod.ts\nexport default {\n  // ...\n  bullBoard: {\n    basePath: '/ui',\n  },\n}\n")),(0,r.kt)("h2",{id:"common-problems"},"Common problems"),(0,r.kt)("h3",{id:"1-evalsha-error"},"1. EVALSHA error"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01KfjCKT1yypmNPDkIL_!!6000000006648-2-tps-3540-102.png",alt:"image.png"})),(0,r.kt)("p",null,"This problem is basically clear, the problem will appear on the clustered version of redis."),(0,r.kt)("p",null,"The reason is that redis does hash on the key to determine the storage slot, and the key of @midwayjs/bull hits a different slot in this step under the cluster."),(0,r.kt)("p",null,"The workaround is to include {} in the prefix configuration of the task and force redis to only calculate the hash in {}, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix: '{midway-task}'"),"."))}m.isMDXComponent=!0}}]);
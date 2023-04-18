"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19065],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>g});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return o?t.createElement(g,a(a({ref:n},c),{},{components:o})):t.createElement(g,a({ref:n},c))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=o[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},98954:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=o(87462),r=(o(67294),o(3905));const s={},a="MongoDB",i={unversionedId:"legacy/mongodb",id:"legacy/mongodb",title:"MongoDB",description:'In this chapter, we choose Typegoose as the MongoDB ORM library based on it. As he described, "Define Mongoose models using TypeScript classes" is very well combined with TypeScript.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/legacy/mongodb.md",sourceDirName:"legacy",slug:"/legacy/mongodb",permalink:"/en/docs/legacy/mongodb",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/legacy/mongodb.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Mongoose version dependency",id:"mongoose-version-dependency",level:2},{value:"Use Typegoose",id:"use-typegoose",level:2},{value:"1. Install components",id:"1-install-components",level:3},{value:"2. Configure connection information",id:"2-configure-connection-information",level:3},{value:"3. Simple directory structure",id:"3-simple-directory-structure",level:3},{value:"3. Create an entity file",id:"3-create-an-entity-file",level:3},{value:"4, reference entities, call the database.",id:"4-reference-entities-call-the-database",level:3},{value:"5, multi-Library situation",id:"5-multi-library-situation",level:3},{value:"Direct use of mongoose",id:"direct-use-of-mongoose",level:2},{value:"1. Install components",id:"1-install-components-1",level:3},{value:"2. Open the components",id:"2-open-the-components",level:3},{value:"2. Configuration",id:"2-configuration",level:3},{value:"3. Use",id:"3-use",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"1. E002: You are using a NodeJS Version below 12.22.0",id:"1-e002-you-are-using-a-nodejs-version-below-12220",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb"},"MongoDB"),(0,r.kt)("p",null,"In this chapter, we choose ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose"},"Typegoose"),' as the MongoDB ORM library based on it. As he described, "Define Mongoose models using TypeScript classes" is very well combined with TypeScript.'),(0,r.kt)("p",null,'Simply put, Typegoose using TypeScript "wrappers" to write Mongoose models, most of its capabilities are provided by ',(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"mongoose")," libraries."),(0,r.kt)("p",null,"You can also directly select the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"mongoose")," library to use, and we will describe it separately."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This document is obsolete from v3.4.0.")),(0,r.kt)("h2",{id:"mongoose-version-dependency"},"Mongoose version dependency"),(0,r.kt)("p",null,"The mongoose is also related to the version of MongoDB Server used by your server, as follows, please note."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 2.4.x: mongoose ^3.8 or 4.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 2.6.x: mongoose ^3.8.8 or 4.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.0.x: mongoose ^3.8.22, 4.x, or 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.2.x: mongoose ^4.3.0 or 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.4.x: mongoose ^4.7.3 or 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 3.6.x: mongoose 5.x"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 4.0.x: mongoose ^5.2.0"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 4.2.x: mongoose ^5.7.0"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 4.4.x: mongoose ^5.10.0"),(0,r.kt)("li",{parentName:"ul"},"MongoDB Server 5.x: mongoose ^6.0.0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mongoose related dependencies are complex and correspond to different versions. At this stage, we mainly use mongoose v5 and v6.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"From ",(0,r.kt)("a",{parentName:"p",href:"mailto:mongoose@v5.11.0"},"mongoose@v5.11.0")," on, mongoose the definition is officially supported, there is no need to install the @types/mongoose dependency package.")),(0,r.kt)("p",null,"The installation package depends on the following version:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Support MongoDB Server 5.x")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "mongoose": "^6.0.7 ",\n    "@typegoose/typegoose": "9.0.0", // This dependency needs to be installed using typegoose\n  },\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Support MongoDB Server 4.4.x")),(0,r.kt)("p",null,"The following versions do not require additional definition packages to be installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    "mongoose": "^5.13.3 ",\n    "@typegoose/typegoose": "^8.0.0",   // This dependency needs to be installed using typegoose\n  },\n')),(0,r.kt)("p",null,"The following versions require additional definition packages to be installed (not recommended)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' "dependencies": {\n    "mongodb": "3.6.3", // The version is written inside the mongoose\n    "mongoose": "~5.10.18 ",\n    "@typegoose/typegoose": "7.0.0", // This dependency needs to be installed using typegoose\n },\n "devDependencies": {\n    "@types/mongodb": "3.6.3", // this version can only be used\n    "@types/mongoose": "~5.10.3 ",\n }\n')),(0,r.kt)("p",null,"The remaining MongoDB installation modules are similar and have not been tested."),(0,r.kt)("h2",{id:"use-typegoose"},"Use Typegoose"),(0,r.kt)("h3",{id:"1-install-components"},"1. Install components"),(0,r.kt)("p",null,"Install Typegoose components to provide access to MongoDB."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that please check the first section to write/install mongoose and other related dependency packages in advance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/typegoose@3 --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    // Components\n    "@midwayjs/typegoose": "^3.0.0",\n    // mongoose dependency in the previous section\n  },\n  "devDependencies": {\n    // mongoose dependency in the previous section\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"After installation, you need to manually configure ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),". The code is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as typegoose from '@midwayjs/typegoose';\n\n@Configuration({\n  imports: [\n    typegoose // Load typegoose Components\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In this component, midway just makes a simple configuration regularization and injects it into the initialization process.")),(0,r.kt)("h3",{id:"2-configure-connection-information"},"2. Configure connection information"),(0,r.kt)("p",null,"Add the configuration of the connection to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    client: {\n      uri: 'mongodb://localhost:27017/test',\n      options: {\n        useNewUrlParser: true\n        useUnifiedTopology: true\n        user: '***********',\n        pass: '***********'\n      }\n    }\n  },\n}\n")),(0,r.kt)("h3",{id:"3-simple-directory-structure"},"3. Simple directory structure"),(0,r.kt)("p",null,"Let's take a simple project as an example. Please refer to other structures yourself."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MyProject\n\u251c\u2500\u2500 src                                         // TS root directory\n\u2502   \u251c\u2500\u2500 config\n\u2502   \u2502   \u2514\u2500\u2500 config.default.ts       // Application Profile\n\u2502   \u251c\u2500\u2500 entity                                  // entity (database Model) directory\n\u2502   \u2502   \u2514\u2500\u2500 user.ts                         // entity file\n\u2502   \u251c\u2500\u2500 configuration.ts                // Midway configuration file\n\u2502   \u2514\u2500\u2500 service                                 // Other Service directory\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"Here, our database entities are mainly located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," directory (non-mandatory). This is a simple convention."),(0,r.kt)("h3",{id:"3-create-an-entity-file"},"3. Create an entity file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { prop } from '@typegoose/typegoose';\nimport { EntityModel } from '@midwayjs/typegoose';\n\n@EntityModel()\nexport class User {\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n")),(0,r.kt)("p",null,"Equivalent to the following code that uses the Mongoose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const userSchema = new mongoose.Schema({\n  name: String\n  jobs: [{ type: String }]\n});\n\nconst User = mongoose.model('User', userSchema);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Therefore, typegoose just simplify the process of creating model.")),(0,r.kt)("h3",{id:"4-reference-entities-call-the-database"},"4, reference entities, call the database."),(0,r.kt)("p",null,"The sample code is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/core';\nimport { InjectEntityModel } from '@midwayjs/typegoose';\nimport { ReturnModelType } from '@typegoose/typegoose';\nimport { User } from '../entity/user';\n\n@Provide()\nexport class TestService {\n\n  @InjectEntityModel(User)\n  userModel: ReturnModelType<typeof User>;\n\n  async getTest() {\n    // create data\n    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an \"as\" assertion, to have types for all properties\n\n    // find data\n    const user = await this.userModel.findById(id).exec();\n    console.log(user)\n  }\n}\n")),(0,r.kt)("h3",{id:"5-multi-library-situation"},"5, multi-Library situation"),(0,r.kt)("p",null,"First configure multiple connections."),(0,r.kt)("p",null,"Add the configuration of the connection to ",(0,r.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," represents the default connection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    clients: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        }\n      },\n      Db1: {\n        uri: 'mongodb://localhost:27017/test1',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        }\n      }\n    }\n  },\n}\n")),(0,r.kt)("p",null,"Use fixed connections when defining instances, such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@EntityModel() // default connection is used by default\nclass User {\n\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n\n@EntityModel({\n  connectionName: 'db1' // db1 connection is used here\n})\nclass User2 {\n\n  @prop()\n  public name?: string;\n\n  @prop({ type: () => [String] })\n  public jobs?: string[];\n}\n")),(0,r.kt)("p",null,"When in use, inject specific connections"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class TestService {\n\n  @InjectEntityModel(User)\n  userModel: ReturnModelType<typeof User>;\n\n  @InjectEntityModel(User2)\n  user2Model: ReturnModelType<typeof User2>;\n\n  async getTest() {\n    const { _id: id } = await this.userModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User); // an \"as\" assertion, to have types for all properties\n    const user = await this.userModel.findById(id).exec();\n    console.log(user)\n\n    const { _id: id2 } = await this.user2Model.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User2); // an \"as\" assertion, to have types for all properties\n    const user2 = await this.user2Model.findById(id2).exec();\n    console.log(user2)\n  }\n}\n\n")),(0,r.kt)("h2",{id:"direct-use-of-mongoose"},"Direct use of mongoose"),(0,r.kt)("p",null,"mongoose component is the basic component of typegoose, sometimes we can use it directly."),(0,r.kt)("h3",{id:"1-install-components-1"},"1. Install components"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that please check the first section to write/install mongoose and other related dependency packages in advance.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/mongoose --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    // Components\n    "@midwayjs/mongoose": "^3.0.0",\n    // mongoose dependency in the previous section\n  },\n  "devDependencies": {\n    // mongoose dependency in the previous section\n    // ...\n  }\n}\n')),(0,r.kt)("h3",{id:"2-open-the-components"},"2. Open the components"),(0,r.kt)("p",null,"After installation, you need to manually configure ",(0,r.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),". The code is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as mongoose from '@midwayjs/mongoose';\n\n@Configuration({\n  imports: [\n    mongoose // Load mongoose Components\n  ],\n  importConfigs: [\n    join(__dirname, './config')\n  ]\n})\nexport class MainConfiguration {\n\n}\n")),(0,r.kt)("h3",{id:"2-configuration"},"2. Configuration"),(0,r.kt)("p",null,"Same as typegoose, or typegoose use mongoose configuration."),(0,r.kt)("p",null,"Single library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    client: {\n      uri: 'mongodb://localhost:27017/test',\n      options: {\n        useNewUrlParser: true\n        useUnifiedTopology: true\n        user: '***********',\n        pass: '**********'\n      }\n    }\n  },\n}\n")),(0,r.kt)("p",null,"Multi-library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  mongoose: {\n    clients: {\n      default: {\n        uri: 'mongodb://localhost:27017/test',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        }\n      },\n      Db1: {\n        uri: 'mongodb://localhost:27017/test1',\n        options: {\n          useNewUrlParser: true\n          useUnifiedTopology: true\n          user: '***********',\n          pass: '***********'\n        }\n      }\n    }\n  },\n}\n")),(0,r.kt)("h3",{id:"3-use"},"3. Use"),(0,r.kt)("p",null,"When there is only one default connection or the default connection is directly used, we can directly use the encapsulated ",(0,r.kt)("inlineCode",{parentName:"p"},"MongooseConnectionService")," object to create the model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject } from '@midwayjs/core';\nimport { MongooseConnectionService } from '@midwayjs/mongoose';\nimport { Schema, Document } from 'mongoose';\n\ninterface User extends Document {\n  name: string;\n  email: string;\n  avatar: string;\n}\n\n@Provide()\nexport class TestService {\n\n  @Inject()\n  conn: MongooseConnectionService;\n\n  async invoke() {\n    const schema = new Schema<User>({\n      name: { type: String, required: true}\n      email: { type: String, required: true}\n      avatar: String\n    });\n    const UserModel = this.conn.model<User>('User', schema);\n    const doc = new UserModel({\n      name: 'Bill',\n      email: 'bill@initech.com',\n      avatar: 'https:// I .imgur.com/dM7Thhn.png'\n    });\n    await doc.save();\n  }\n}\n\n")),(0,r.kt)("p",null,"If multiple other connections are configured, obtain the connection from the factory method before using it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MongooseConnectionServiceFactory } from '@midwayjs/mongoose';\nimport { Schema } from 'mongoose';\n\n@Provide()\nexport class TestService {\n\n  @Inject()\n  connFactory: MongooseConnectionServiceFactory;\n\n  async invoke() {\n    // get db1 connection\n    const conn = this.connFactory.get('db1');\n\n    // get default connection\n    const defaultConn = this.connFactory.get('default');\n\n  }\n}\n\n")),(0,r.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,r.kt)("h3",{id:"1-e002-you-are-using-a-nodejs-version-below-12220"},"1. E002: You are using a NodeJS Version below 12.22.0"),(0,r.kt)("p",null,"Node version verification has been added to the new version @typegoose/typegoose (v8, v9). if your Node.js version is lower than v12.22.0, this prompt will appear."),(0,r.kt)("p",null,"Under normal circumstances, please upgrade Node.js to this version or above to solve the problem."),(0,r.kt)("p",null,"In special scenarios, such as when the Serverless cannot modify the Node.js version and the version is lower than v12.22, the v12 version can actually be subversions, which can be bypassed by temporarily modifying the process.version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nObject.defineProperty(process, 'version', {\n  value: 'v12.22.0',\n  writable: true,\n});\n\n// other code\n\nexport class MainConfiguration {}\n")))}u.isMDXComponent=!0}}]);
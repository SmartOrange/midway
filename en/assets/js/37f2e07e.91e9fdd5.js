"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7429],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o="Swagger",s={unversionedId:"extensions/swagger",id:"extensions/swagger",title:"Swagger",description:"\u57fa\u4e8e\u6700\u65b0\u7684 OpenAPI 3.0.3 \u5b9e\u73b0\u4e86\u65b0\u7248\u7684 Swagger \u7ec4\u4ef6\u3002",source:"@site/docs/extensions/swagger.md",sourceDirName:"extensions",slug:"/extensions/swagger",permalink:"/en/docs/extensions/swagger",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/swagger.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"\u53c2\u6570\u6821\u9a8c",permalink:"/en/docs/extensions/validate"},next:{title:"\u4efb\u52a1\u8c03\u5ea6",permalink:"/en/docs/extensions/task"}},d={},m=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f00\u542f\u7ec4\u4ef6",id:"\u5f00\u542f\u7ec4\u4ef6",level:2},{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u7c7b\u578b\u548c\u53c2\u6570",id:"\u7c7b\u578b\u548c\u53c2\u6570",level:3},{value:"ApiExtraModel",id:"apiextramodel",level:4},{value:"\u8def\u7531\u5b9a\u4e49",id:"\u8def\u7531\u5b9a\u4e49",level:3},{value:"Query \u5b9a\u4e49",id:"query-\u5b9a\u4e49",level:4},{value:"Body \u5b9a\u4e49",id:"body-\u5b9a\u4e49",level:4},{value:"\u8def\u7531\u6807\u7b7e",id:"\u8def\u7531\u6807\u7b7e",level:3},{value:"\u8bf7\u6c42 Header",id:"\u8bf7\u6c42-header",level:3},{value:"\u8bf7\u6c42 Response",id:"\u8bf7\u6c42-response",level:3},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u6388\u6743\u9a8c\u8bc1",id:"\u6388\u6743\u9a8c\u8bc1",level:3},{value:"basic",id:"basic",level:4},{value:"bearer",id:"bearer",level:4},{value:"oauth2",id:"oauth2",level:4},{value:"cookie",id:"cookie",level:4},{value:"apikey",id:"apikey",level:4},{value:"custom",id:"custom",level:4},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:2},{value:"\u88c5\u9970\u5668\u5217\u8868",id:"\u88c5\u9970\u5668\u5217\u8868",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"swagger"},"Swagger"),(0,l.kt)("p",null,"\u57fa\u4e8e\u6700\u65b0\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI 3.0.3")," \u5b9e\u73b0\u4e86\u65b0\u7248\u7684 Swagger \u7ec4\u4ef6\u3002"),(0,l.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/swagger@3 --save\n$ npm install swagger-ui-dist --save-dev\n")),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5728\u670d\u52a1\u5668\u4e0a\u8f93\u51fa Swagger API \u9875\u9762\uff0c\u5219\u9700\u8981\u5c06 swagger-ui-dist \u5b89\u88c5\u5230\u4f9d\u8d56\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install swagger-ui-dist --save\n")),(0,l.kt)("p",null,"\u6216\u8005\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/swagger": "^3.0.0",\n    // \u5982\u679c\u4f60\u5e0c\u671b\u5728\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\n    "swagger-ui-dist": "^4.2.1",\n    // ...\n  },\n  "devDependencies": {\n    // \u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u5728\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\n    "swagger-ui-dist": "^4.2.1",\n    // ...\n  }\n}\n')),(0,l.kt)("h2",{id:"\u5f00\u542f\u7ec4\u4ef6"},"\u5f00\u542f\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u589e\u52a0\u7ec4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as swagger from '@midwayjs/swagger';\n\n@Configuration({\n  imports: [\n    // ...\n    swagger\n  ]\n})\nexport class ContainerConfiguration {\n\n}\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u542f\u7528\u7684\u73af\u5883\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u6307\u7684\u662f\u201c\u53ea\u5728 local \u73af\u5883\u4e0b\u542f\u7528\u201d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as swagger from '@midwayjs/swagger';\n\n@Configuration({\n  imports: [\n    // ...\n    {\n      component: swagger,\n      enabledEnvironment: ['local']\n    }\n  ]\n})\nexport class ContainerConfiguration {\n\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u542f\u52a8\u9879\u76ee\uff0c\u8bbf\u95ee\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:7001/swagger-ui/index.html"},"http://127.0.0.1:7001/swagger-ui/index.html")),(0,l.kt)("h2",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u7c7b\u578b\u548c\u53c2\u6570"},"\u7c7b\u578b\u548c\u53c2\u6570"),(0,l.kt)("p",null,"Swagger \u7ec4\u4ef6\u4f1a\u8bc6\u522b\u5404\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"@Controller")," \u4e2d\u6bcf\u4e2a\u8def\u7531\u65b9\u6cd5\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Body()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@Query()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@Param()")," \u88c5\u9970\u5668\uff0c\u63d0\u53d6\u8def\u7531\u65b9\u6cd5\u53c2\u6570\u548c\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u4e00\u4e2a\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Post('/:id', { summary: 'test'})\nasync create(@Body() createCatDto: CreateCatDto, @Param('id') id: number): Promise<Cat> {\n  return this.catsService.create(createCatDto);\n}\n")),(0,l.kt)("p",null,"\u7ec4\u4ef6\u542f\u52a8\u65f6\u4f1a\u63d0\u53d6\u5176\u4e2d\u7684\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN012WJPrd22H6QQZuXqJ_!!6000000007094-0-tps-1672-796.jpg",alt:"swagger1"})),(0,l.kt)("p",null,"\u56fe\u4e2d\u53ef\u4ee5\u770b\u5230 id\uff0c\u4ee5\u53ca request body \u53c2\u6570 Schema \u4e3a CreateCatDto\u3002\u5176\u4e2d CreateCatDto \u5b57\u6bb5\u90fd\u662f\u7a7a\u7684\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiProperty(...)")," \u88c5\u9970\u5668\u53ef\u4ee5\u7528\u6765\u58f0\u660e\u6a21\u578b\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiProperty } from \"@midwayjs/swagger\";\n\nexport class CreateCatDto {\n  @ApiProperty({ example: 'Kitty', description: 'The name of the Catname'})\n  name: string;\n\n  @ApiProperty({ example: '1', description: 'The name of the Catage'})\n  age: number;\n\n  @ApiProperty({ example: 'bbbb', description: 'The name of the Catbreed'})\n  breed: string;\n}\n")),(0,l.kt)("p",null,"Swagger UI \u4e2d\u5c55\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN013UI5Ha1JSrt84NApB_!!6000000001028-0-tps-1672-486.jpg",alt:"swagger2"})),(0,l.kt)("p",null,"\u4ece\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u5bf9\u6bcf\u4e2a\u5b57\u6bb5\u6dfb\u52a0\u4e86 example\u3001description\uff0c\u81f3\u4e8e\u5b57\u6bb5\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"design:type")," \u6765\u63d0\u53d6\uff0c\u5f53\u7136\u4e5f\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiProperty(...)")," \u4e2d\u901a\u8fc7 type \u548c format \u6765\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiProperty({\n  type: 'integer',\n  format: 'int32',\n  example: '1',\n  description: 'The name of the Catage'\n})\nage: number;\n")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u6570\u7ec4\u7c7b\u578b\uff0c\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"design:type")," \u4e0d\u652f\u6301\u8303\u578b\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e type \u5b57\u6bb5\u6765\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiProperty({\n  type: [String],\n  example: ['1'],\n  description: 'The name of the Catage'\n})\nbreeds: string[];\n")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u679a\u4e3e\u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e enmu \u5b57\u6bb5\u6765\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum HelloWorld {\n  One = 'One',\n  Two = 'Two',\n  Three = 'Three',\n}\n\n@ApiProperty({\n  enum: ['One', 'Two', 'Three'],\n  description: 'The name of the Catage'\n})\nhello: HelloWorld;\n")),(0,l.kt)("p",null,"Swagger UI \u4e2d\u5c55\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN015M37MU1KgtdNfqsgp_!!6000000001194-0-tps-1406-426.jpg",alt:"swagger3"})),(0,l.kt)("h4",{id:"apiextramodel"},"ApiExtraModel"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4e0d\u5e0c\u671b\u901a\u8fc7 type \u6765\u5b9a\u4e49 model \u7c7b\u578b\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 Controller \u4e2d\u6216\u8005 Model Class \u4e2d\u52a0\u5165 @ApiExtraModel \u6765\u589e\u52a0\u989d\u5916\u7684 schema \u7c7b\u578b\u63cf\u8ff0\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiExtraModel(TestExtraModel)\n@Controller()\nclass HelloController {\n  @Post('/:id', { summary: 'test'})\n  @ApiResponse({\n    status: 200,\n    content: {\n      'application/json': {\n        schema: {\n          properties: {\n            data: { '$ref': getSchemaPath(TestExtraModel)}\n          }\n        }\n      }\n    }\n  })\n  async create(@Body() createCatDto: CreateCatDto, @Param('id') id: number): Promise<Cat> {\n    return this.catsService.create(createCatDto);\n  }\n}\n\n// or\n@ApiExtraModel(TestExtraModel)\nclass TestModel {\n  @ApiProperty({\n    item: {\n      $ref: getSchemaPath(TestExtraModel)\n    },\n    description: 'The name of the Catage'\n  })\n  one: TestExtraModel;\n}\n")),(0,l.kt)("h3",{id:"\u8def\u7531\u5b9a\u4e49"},"\u8def\u7531\u5b9a\u4e49"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI")," \u5b9a\u4e49\u7684 paths \u5c31\u662f\u5404\u4e2a\u8def\u7531\u8def\u5f84\uff0c\u4e14\u6bcf\u4e2a\u8def\u7531\u8def\u5f84\u90fd\u6709 HTTP \u65b9\u6cd5\u7684\u5b9a\u4e49\uff0c\u6bd4\u5982 GET\u3001POST\u3001DELETE\u3001PUT \u7b49\u3002"),(0,l.kt)("h4",{id:"query-\u5b9a\u4e49"},"Query \u5b9a\u4e49"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiQuery")," \u6765\u5b9a\u4e49 Query \u6570\u636e\u3002"),(0,l.kt)("p",null,"\u57fa\u7840\u4f7f\u7528\uff0c\u4f1a\u81ea\u52a8\u8bc6\u522b ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query")," \u88c5\u9970\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Get('/get_user')\nasync getUser(@Query('name') name: string) {\n  return 'hello';\n}\n")),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Query"),"  \u4ee5\u5bf9\u8c61\u5f62\u5f0f\uff0c\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiQuery")," \u6307\u5b9a\u4e00\u4e2a name \u53c2\u6570\uff0c\u5bf9\u8c61\u7c7b\u578b\u9700\u8981\u914d\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiProperty")," \u4f7f\u7528\uff0c\u5426\u5219\u8868\u5355\u4f1a\u53d8\u4e3a\u53ea\u8bfb\u5f62\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserDTO {\n  @ApiProperty()\n  name: string;\n}\n\n@Get('/get_user')\n@ApiQuery({\n  name: 'query'\n})\nasync getUser(@Query() dto: UserDTO) {\n  // ...\n}\n")),(0,l.kt)("h4",{id:"body-\u5b9a\u4e49"},"Body \u5b9a\u4e49"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiBody")," \u6765\u5b9a\u4e49 Body \u6570\u636e\u3002"),(0,l.kt)("p",null," ",(0,l.kt)("inlineCode",{parentName:"p"},"@Body"),"  \u5bf9\u8c61\u7c7b\u578b\u9700\u8981\u914d\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiProperty")," \u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export class UserDTO {\n  @ApiProperty()\n  name: string;\n}\n\n@Post('/update_user')\nasync upateUser(@Body() dto: UserDTO) {\n  // ...\n}\n")),(0,l.kt)("p",null,"\u5982\u9700\u5176\u4ed6\u7ec6\u8282\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiBody")," \u589e\u5f3a\u3002"),(0,l.kt)("h3",{id:"\u8def\u7531\u6807\u7b7e"},"\u8def\u7531\u6807\u7b7e"),(0,l.kt)("p",null,"Swagger \u4f1a\u5bf9 paths \u5206\u6807\u7b7e\uff0c\u5982\u679c Controller \u672a\u5b9a\u4e49\u4efb\u4f55\u6807\u7b7e\uff0c\u5219\u4f1a\u9ed8\u8ba4\u5f52\u7ec4\u5230 default \u4e0b\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiTags([...])")," \u6765\u81ea\u5b9a\u4e49 Controller \u6807\u7b7e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiTags(['hello'])\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h3",{id:"\u8bf7\u6c42-header"},"\u8bf7\u6c42 Header"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiHeader({...})")," \u88c5\u9970\u5668\u6765\u5b9a\u4e49 Header \u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiHeader({\n  name: 'x-test-one',\n  description: 'this is test one'\n})\n@ApiTags(['hello'])\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h3",{id:"\u8bf7\u6c42-response"},"\u8bf7\u6c42 Response"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiResponse({...})")," \u6765\u81ea\u5b9a\u4e49\u8bf7\u6c42 Response\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Get('/:id')\n@ApiResponse({\n  status: 200,\n  description: 'The found record',\n  type: Cat,\n})\nfindOne(@Param('id') id: string, @Query('test') test: any): Cat {\n  return this.catsService.findOne(+id);\n}\n")),(0,l.kt)("p",null,"\u8fd8\u63d0\u4f9b\u4e86\u5176\u4ed6\u4e0d\u9700\u8981\u8bbe\u7f6e status \u7684\u88c5\u9970\u5668\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiOkResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiCreatedResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiAcceptedResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiNoContentResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiMovedPermanentlyResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiBadRequestResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiUnauthorizedResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiNotFoundResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiForbiddenResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiMethodNotAllowedResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiNotAcceptableResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiRequestTimeoutResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiConflictResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiTooManyRequestsResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiGoneResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiPayloadTooLargeResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiUnsupportedMediaTypeResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiUnprocessableEntityResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiInternalServerErrorResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiNotImplementedResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiBadGatewayResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiServiceUnavailableResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiGatewayTimeoutResponse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@ApiDefaultResponse()"))),(0,l.kt)("p",null,"HTTP \u8bf7\u6c42\u8fd4\u56de\u7684\u6570\u636e\u6a21\u578b\u5b9a\u4e49\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a type\uff0c\u5f53\u7136\u8fd9\u4e2a\u6570\u636e\u6a21\u578b\u9700\u8981\u901a\u8fc7\u88c5\u9970\u5668 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiProperty")," \u6765\u63cf\u8ff0\u5404\u4e2a\u5b57\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiProperty } from '@midwayjs/swagger';\n\nexport class Cat {\n  @ApiProperty({ example: 'Kitty', description: 'The name of the Cat'})\n  name: string;\n\n  @ApiProperty({ example: 1, description: 'The age of the Cat' })\n  age: number;\n\n  @ApiProperty({\n    example: 'Maine Coon',\n    description: 'The breed of the Cat',\n  })\n  breed: string;\n}\n")),(0,l.kt)("p",null,"Swagger \u8fd8\u652f\u6301\u5e26\u524d\u7f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"x-")," \u7684\u6269\u5c55\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiExtension(x-..., {...})")," \u88c5\u9970\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiExtension('x-hello', { hello: 'world' })\n")),(0,l.kt)("h3",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiBody")," \u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"contentType")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Post('/:id', { summary: 'test'})\n@ApiBody({\n  description: 'this is body',\n  contentType: BodyContentType.Multipart\n})\n@ApiParam({ description: 'this is id' })\nasync create(@Body() createCatDto: CreateCatDto, @Param('id') id: number): Promise<Cat> {\n  return this.catsService.create(createCatDto);\n}\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateCatDto")," \u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiProperty")," \u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"format")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiProperty({\n  type: 'string',\n  format: 'binary',\n  description: 'this is file test'\n})\nfile: any;\n")),(0,l.kt)("p",null,"Swagger UI \u4e2d\u5c55\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01KlDHNt24mMglN1fyH_!!6000000007433-0-tps-1598-434.jpg",alt:"swagger4"})),(0,l.kt)("p",null,"\u517c\u5bb9 Upload \u7ec4\u4ef6\uff0c\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiBody()")," \u88c5\u9970\u5668\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Post('/test')\n@ApiBody({ description: 'hello file' })\n@ApiBody({ description: 'hello fields', type: Cat })\nasync upload(@File() f: any, @Fields() data: Cat) {\n  return null;\n}\n")),(0,l.kt)("p",null,"Swagger UI \u4e2d\u5c55\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01icnwZE24OY5vdkkKx_!!6000000007381-0-tps-1272-1026.jpg",alt:"swagger5"})),(0,l.kt)("p",null,"\u4e0d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@ApiBody()")," \u88c5\u9970\u5668\u63cf\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Post('/test1')\nasync upload1(@Files() f: any[], @Fields() data: Cat) {\n  return null;\n}\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u9700\u8981 swagger \u5c55\u793a\u4e86\uff0c\u8bf7\u52a1\u5fc5\u6dfb\u52a0\u7c7b\u578b\uff08\u88c5\u9970\u5668\u5bf9\u5e94\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca @ApiBody \u4e2d\u7684 type\uff09\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002"))),(0,l.kt)("p",null,"Swagger UI \u4e2d\u5c55\u793a\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01w9dZxe1YQJv3uOycZ_!!6000000003053-0-tps-1524-1118.jpg",alt:"swagger6"})),(0,l.kt)("h3",{id:"\u6388\u6743\u9a8c\u8bc1"},"\u6388\u6743\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u6388\u6743\u9a8c\u8bc1\u914d\u7f6e\u6765\u8bbe\u7f6e\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u6211\u4eec\u652f\u6301\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"basic"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"bearer"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"cookie"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"oauth2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"apikey"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"custom"),"\u3002"),(0,l.kt)("h4",{id:"basic"},"basic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 basic \u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  swagger: {\n    auth: {\n      authType: 'basic',\n    },\n  },\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054 Controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiBasicAuth()\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h4",{id:"bearer"},"bearer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 bearer \u9a8c\u8bc1\uff08bearerFormat \u4e3a JWT\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  swagger: {\n    auth: {\n      authType: 'bearer',\n    },\n  },\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054 Controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiBearerAuth()\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h4",{id:"oauth2"},"oauth2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 oauth2 \u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  swagger: {\n    auth: {\n      authType: 'oauth2',\n      flows: {\n        implicit: {\n          authorizationUrl: 'http://example.org/api/oauth/dialog',\n          scopes: {\n            'write:pets': 'modify pets in your account',\n            'read:pets': 'read your pets'\n          }\n        },\n        authorizationCode: {\n          authorizationUrl: 'https://example.com/api/oauth/dialog',\n          tokenUrl: 'https://example.com/api/oauth/token',\n          scopes: {\n            'write:pets': 'modify pets in your account',\n            'read:pets': 'read your pets'\n          }\n        },\n      },\n    },\n  },\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054 Controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiOAuth2()\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h4",{id:"cookie"},"cookie"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 cookie \u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  swagger: {\n    auth: {\n      authType: 'cookie',\n      securityName: 'testforcookie',\n      cookieName: 'connect.sid',\n    },\n  },\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054 Controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiCookieAuth('testforcookie')\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h4",{id:"apikey"},"apikey"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528 cookie \u9a8c\u8bc1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  swagger: {\n    auth: {\n      authType: 'apikey',\n        name: 'api_key'\n    },\n  },\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054 Controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiSecurity('api_key')\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h4",{id:"custom"},"custom"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u65b9\u5f0f\uff0c\u9700\u8981\u81ea\u5df1\u8bbe\u8ba1\u53c2\u6570\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  swagger: {\n    auth: {\n      authType: 'custom',\n      name: 'mycustom'\n      // ...\n    },\n  },\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054 Controller")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@ApiSecurity('mycustom')\n@Controller('/hello')\nexport class HelloController {}\n")),(0,l.kt)("h2",{id:"\u53c2\u6570\u914d\u7f6e"},"\u53c2\u6570\u914d\u7f6e"),(0,l.kt)("p",null,"Swagger \u7ec4\u4ef6\u63d0\u4f9b\u4e86\u548c ",(0,l.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI")," \u4e00\u81f4\u7684\u53c2\u6570\u914d\u7f6e\u80fd\u529b\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u914d\u7f6e\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u914d\u7f6e\u9879\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * see https://swagger.io/specification/\n */\nexport interface SwaggerOptions {\n  /**\n   * \u9ed8\u8ba4\u503c: My Project\n   * https://swagger.io/specification/#info-object title \u5b57\u6bb5\n   */\n  title?: string;\n  /**\n   * \u9ed8\u8ba4\u503c: This is a swagger-ui for midwayjs project\n   * https://swagger.io/specification/#info-object description \u5b57\u6bb5\n   */\n  description?: string;\n  /**\n   * \u9ed8\u8ba4\u503c: 1.0.0\n   * https://swagger.io/specification/#info-object version \u5b57\u6bb5\n   */\n  version?: string;\n  /**\n   * https://swagger.io/specification/#info-object contact \u5b57\u6bb5\n   */\n  contact?: ContactObject;\n  /**\n   * https://swagger.io/specification/#info-object license \u5b57\u6bb5\n   */\n  license?: LicenseObject;\n  /**\n   * https://swagger.io/specification/#info-object termsOfService \u5b57\u6bb5\n   */\n  termsOfService?: string;\n  /**\n   * https://swagger.io/specification/#openapi-object externalDocs \u5b57\u6bb5\n   */\n  externalDocs?: ExternalDocumentationObject;\n  /**\n   * https://swagger.io/specification/#openapi-object servers \u5b57\u6bb5\n   */\n  servers?: Array<ServerObject>;\n  /**\n   * https://swagger.io/specification/#openapi-object tags \u5b57\u6bb5\n   */\n  tags?: Array<TagObject>;\n  /**\n   * \u53ef\u4ee5\u53c2\u8003 https://swagger.io/specification/#security-scheme-object\n   */\n  auth?: AuthOptions | AuthOptions[];\n  /**\n   * \u9ed8\u8ba4\u503c: /swagger-ui\n   * \u8bbf\u95ee swagger ui \u7684\u8def\u5f84\n   */\n  swaggerPath?: string;\n  /**\n   * \u5bf9\u8def\u7531 tag \u8fdb\u884c ascii \u6392\u5e8f\n   * \u53ef\u4ee5\u4f7f\u7528 1-xxx\u30012-xxx\u30013-xxx \u6765\u5b9a\u4e49 tag\n   */\n  tagSortable?: boolean;\n}\n/**\n * \u7ee7\u627f\u81ea https://swagger.io/specification/#security-scheme-object\n */\nexport interface AuthOptions extends Omit<SecuritySchemeObject, 'type'> {\n  /**\n   * \u9a8c\u6743\u7c7b\u578b\n   * basic  => http basic \u9a8c\u8bc1\n   * bearer => http jwt \u9a8c\u8bc1\n   * cookie => cookie \u65b9\u5f0f\u9a8c\u8bc1\n   * oauth2 => \u4f7f\u7528 oauth2\n   * apikey => apiKey\n   * custom => \u81ea\u5b9a\u4e49\u65b9\u5f0f\n   */\n  authType: AuthType;\n  /**\n   * https://swagger.io/specification/#security-scheme-object type \u5b57\u6bb5\n   */\n  type?: SecuritySchemeType;\n  /**\n   * authType = cookie \u65f6\u53ef\u4ee5\u4fee\u6539\uff0c\u901a\u8fc7 ApiCookie \u88c5\u9970\u5668\u5173\u8054\u7684\u540d\u79f0\n   */\n  securityName?: string;\n  /**\n   * authType = cookie \u65f6\u53ef\u4ee5\u4fee\u6539\uff0ccookie \u7684\u540d\u79f0\n   */\n  cookieName?: string;\n}\n")),(0,l.kt)("h2",{id:"\u88c5\u9970\u5668\u5217\u8868"},"\u88c5\u9970\u5668\u5217\u8868"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u6240\u6709\u88c5\u9970\u5668\u53c2\u8003\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nestjs/swagger"},"@nestjs/swagger")," \u7684\u8bbe\u8ba1\uff0c\u90fd\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},"Api")," \u524d\u7f00\u3002\u8fd9\u91cc\u5217\u51fa\u5168\u90e8\u88c5\u9970\u5668\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u88c5\u9970\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301\u6a21\u5f0f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiBody")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiExcludeEndpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiExcludeController")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiHeader")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller/Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiHeaders")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller/Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiOperation")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiProperty")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiPropertyOptional")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiResponseProperty")),(0,l.kt)("td",{parentName:"tr",align:null},"Model Property")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiQuery")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiResponse")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiTags")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller/Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiExtension")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiBasicAuth")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiBearerAuth")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiCookieAuth")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiOAuth2")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiSecurity")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiParam")),(0,l.kt)("td",{parentName:"tr",align:null},"Method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@ApiExtraModel")),(0,l.kt)("td",{parentName:"tr",align:null},"Controller/Model")))))}c.isMDXComponent=!0}}]);
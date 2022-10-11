"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3704],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},804:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],i={},p="Sequelize",s={unversionedId:"extensions/sequelize",id:"extensions/sequelize",title:"Sequelize",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Midway \u4e2d\u4f7f\u7528 Sequelize\u3002",source:"@site/docs/extensions/sequelize.md",sourceDirName:"extensions",slug:"/extensions/sequelize",permalink:"/docs/extensions/sequelize",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/sequelize.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"TypeORM",permalink:"/docs/extensions/orm"},next:{title:"Redis",permalink:"/docs/extensions/redis"}},m={},u=[{value:"\u548c\u8001\u5199\u6cd5\u7684\u533a\u522b",id:"\u548c\u8001\u5199\u6cd5\u7684\u533a\u522b",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5b89\u88c5\u6570\u636e\u5e93 Driver",id:"\u5b89\u88c5\u6570\u636e\u5e93-driver",level:2},{value:"\u542f\u7528\u7ec4\u4ef6",id:"\u542f\u7528\u7ec4\u4ef6",level:2},{value:"\u6a21\u578b\u5b9a\u4e49",id:"\u6a21\u578b\u5b9a\u4e49",level:2},{value:"1\u3001\u521b\u5efa Model\uff08Entity\uff09",id:"1\u521b\u5efa-modelentity",level:3},{value:"2\u3001\u4e3b\u952e",id:"2\u4e3b\u952e",level:3},{value:"3\u3001\u65f6\u95f4\u5217",id:"3\u65f6\u95f4\u5217",level:3},{value:"4\u3001\u666e\u901a\u5217",id:"4\u666e\u901a\u5217",level:3},{value:"\u6570\u636e\u6e90\u914d\u7f6e",id:"\u6570\u636e\u6e90\u914d\u7f6e",level:2},{value:"\u6a21\u578b\u5173\u8054",id:"\u6a21\u578b\u5173\u8054",level:2},{value:"\u4e00\u5bf9\u591a",id:"\u4e00\u5bf9\u591a",level:3},{value:"\u591a\u5bf9\u591a",id:"\u591a\u5bf9\u591a",level:3},{value:"\u4e00\u5bf9\u4e00",id:"\u4e00\u5bf9\u4e00",level:3},{value:"\u9759\u6001\u64cd\u4f5c\u65b9\u6cd5",id:"\u9759\u6001\u64cd\u4f5c\u65b9\u6cd5",level:2},{value:"\u4fdd\u5b58",id:"\u4fdd\u5b58",level:3},{value:"\u67e5\u627e\u548c\u66f4\u65b0",id:"\u67e5\u627e\u548c\u66f4\u65b0",level:3},{value:"Repository \u6a21\u5f0f",id:"repository-\u6a21\u5f0f",level:2},{value:"\u542f\u52a8 Repository \u6a21\u5f0f",id:"\u542f\u52a8-repository-\u6a21\u5f0f",level:3},{value:"\u4f7f\u7528 Repository \u6a21\u5f0f",id:"\u4f7f\u7528-repository-\u6a21\u5f0f",level:3},{value:"\u591a\u5e93\u7684\u652f\u6301",id:"\u591a\u5e93\u7684\u652f\u6301",level:3},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],d={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sequelize"},"Sequelize"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u5728 Midway \u4e2d\u4f7f\u7528 Sequelize\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5f53\u524d\u6a21\u5757\u4ece v3.4.0 \u5f00\u59cb\u5df2\u7ecf\u91cd\u6784\uff0c\u5386\u53f2\u5199\u6cd5\u517c\u5bb9\uff0c\u5982\u679c\u67e5\u8be2\u5386\u53f2\u6587\u6863\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"../legacy/sequelize"},"\u8fd9\u91cc"),"\u3002"))),(0,l.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("h2",{id:"\u548c\u8001\u5199\u6cd5\u7684\u533a\u522b"},"\u548c\u8001\u5199\u6cd5\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u4f7f\u7528\u65b0\u7248\u672c\u7684\u7528\u6cd5\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684\u6d41\u7a0b\uff0c\u5c06\u8001\u4ee3\u7801\u8fdb\u884c\u4fee\u6539\uff0c\u65b0\u8001\u4ee3\u7801\u4e0d\u80fd\u6df7\u7528\u3002"),(0,l.kt)("p",null,"\u5347\u7ea7\u65b9\u6cd5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"1\u3001\u8bf7\u5728\u4e1a\u52a1\u4f9d\u8d56\u4e2d\u663e\u5f0f\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"sequelize")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"sequelize-typescript")),(0,l.kt)("li",{parentName:"ul"},"2\u3001\u4e0d\u518d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseTable")," \u88c5\u9970\u5668\uff0c\u800c\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"sequelize-typescript")," \u5305\u5bfc\u51fa\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Table")," \u88c5\u9970\u5668"),(0,l.kt)("li",{parentName:"ul"},"3\u3001\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"src/config.default")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"sequelize")," \u90e8\u5206\u914d\u7f6e\u8c03\u6574\uff0c\u53c2\u8003\u4e0b\u9762\u7684\u6570\u636e\u6e90\u914d\u7f6e\u90e8\u5206",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"3.1 \u4fee\u6539\u4e3a\u6570\u636e\u6e90\u7684\u5f62\u5f0f ",(0,l.kt)("inlineCode",{parentName:"li"},"sequelize.dataSource")),(0,l.kt)("li",{parentName:"ul"},"3.2 \u5c06\u5b9e\u4f53\u6a21\u578b\u5728\u6570\u636e\u6e90\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"entities")," \u5b57\u6bb5\u4e2d\u58f0\u660e")))),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/sequelize@3 sequelize sequelize-typescript --save\n")),(0,l.kt)("p",null,"\u6216\u8005\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/sequelize": "^3.0.0",\n    "sequelize": "^6.21.3",\n    "sequelize-typescript": "^2.1.0"\n    // ...\n  },\n  "devDependencies": {\n    // ...\n  }\n}\n')),(0,l.kt)("h2",{id:"\u5b89\u88c5\u6570\u636e\u5e93-driver"},"\u5b89\u88c5\u6570\u636e\u5e93 Driver"),(0,l.kt)("p",null,"\u5e38\u7528\u6570\u636e\u5e93\u9a71\u52a8\u5982\u4e0b\uff0c\u9009\u62e9\u4f60\u5bf9\u5e94\u8fde\u63a5\u7684\u6570\u636e\u5e93\u7c7b\u578b\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# for MySQL or MariaDB\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 mysql2 \u66ff\u4ee3\nnpm install mysql --save\nnpm install mysql2 --save\n\n# for PostgreSQL or CockroachDB\nnpm install pg --save\n\n# for SQLite\nnpm install sqlite3 --save\n\n# for Microsoft SQL Server\nnpm install mssql --save\n\n# for sql.js\nnpm install sql.js --save\n\n# for Oracle\nnpm install oracledb --save\n\n# for MongoDB(experimental)\nnpm install mongodb --save\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u6587\u6863\uff0c\u6211\u4eec\u5c06\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"mysql2")," \u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u7ec4\u4ef6"},"\u542f\u7528\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u6587\u4ef6\u4e2d\u542f\u7528\u7ec4\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { join } from 'path';\nimport * as sequelize from '@midwayjs/sequelize';\n\n@Configuration({\n  imports: [\n    // ...\n    sequelize,\n  ],\n  importConfigs: [join(__dirname, './config')],\n})\nexport class MainConfiguration implements ILifeCycle {\n  // ...\n}\n")),(0,l.kt)("h2",{id:"\u6a21\u578b\u5b9a\u4e49"},"\u6a21\u578b\u5b9a\u4e49"),(0,l.kt)("h3",{id:"1\u521b\u5efa-modelentity"},"1\u3001\u521b\u5efa Model\uff08Entity\uff09"),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u6a21\u578b\u548c\u6570\u636e\u5e93\u5173\u8054\uff0c\u5728\u5e94\u7528\u4e2d\u7684\u6a21\u578b\u5c31\u662f\u6570\u636e\u5e93\u8868\uff0c\u5728 Sequelize \u4e2d\uff0c\u6a21\u578b\u662f\u548c\u5b9e\u4f53\u7ed1\u5b9a\u7684\uff0c\u6bcf\u4e00\u4e2a\u5b9e\u4f53\uff08Entity) \u6587\u4ef6\uff0c\u5373\u662f Model\uff0c\u4e5f\u662f\u5b9e\u4f53\uff08Entity\uff09\u3002"),(0,l.kt)("p",null,"\u5728\u793a\u4f8b\u4e2d\uff0c\u9700\u8981\u4e00\u4e2a\u5b9e\u4f53\uff0c\u6211\u4eec\u8fd9\u91cc\u62ff ",(0,l.kt)("inlineCode",{parentName:"p"},"person")," \u4e3e\u4f8b\u3002\u65b0\u5efa entity \u76ee\u5f55\uff0c\u5728\u5176\u4e2d\u6dfb\u52a0\u5b9e\u4f53\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"person.ts")," \uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f53\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/entity/person.ts\nimport { Table, Model, Column, HasMany } from 'sequelize-typescript';\n\n@Table\nclass Hobby extends Model {\n  @Column\n  name: string;\n}\n\n@Table\nclass Person extends Model {\n  @Column\n  name: string;\n\n  @Column\n  birthday: Date;\n\n  @HasMany(() => Hobby)\n  hobbies: Hobby[];\n}\n")),(0,l.kt)("p",null,"\u8981\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u5b9e\u4f53\u6587\u4ef6\u7684\u6bcf\u4e00\u4e2a\u5c5e\u6027\uff0c\u5176\u5b9e\u662f\u548c\u6570\u636e\u5e93\u8868\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c\u57fa\u4e8e\u73b0\u6709\u7684\u6570\u636e\u5e93\u8868\uff0c\u6211\u4eec\u5f80\u4e0a\u6dfb\u52a0\u5185\u5bb9\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Table")," \u88c5\u9970\u5668\u53ef\u4ee5\u5728\u4e0d\u4f20\u9012\u4efb\u4f55\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u66f4\u591a\u53c2\u6570\u8bf7\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-definition.html#configuration"},"\u5b9a\u4e49\u9009\u9879")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Table({\n  timestamps: true,\n  ...\n})\nclass Person extends Model {}\n")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5b9e\u4f53\u5217\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/tool/sequelize_generator"},"sequelize_generator")," \u5de5\u5177\u751f\u6210\u3002"),(0,l.kt)("h3",{id:"2\u4e3b\u952e"},"2\u3001\u4e3b\u952e"),(0,l.kt)("p",null,"\u4e3b\u952e (id) \u5c06\u4ece\u57fa\u7c7b Model \u7ee7\u627f\u3002 \u4e00\u822c\u6765\u8bf4\u4e3b\u952e\u662f Integer \u7c7b\u578b\u5e76\u4e14\u662f\u81ea\u589e\u7684\u3002"),(0,l.kt)("p",null,"\u4e3b\u952e\u8bbe\u7f6e\u6709\u4e24\u79cd\u65b9\u6cd5\uff0c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"@Column({primaryKey: true})")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"@PrimaryKey"),"\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, PrimaryKey } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @PrimaryKey\n  name: string;\n}\n")),(0,l.kt)("h3",{id:"3\u65f6\u95f4\u5217"},"3\u3001\u65f6\u95f4\u5217"),(0,l.kt)("p",null,"\u4e3b\u8981\u6307\u4ee3\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"@CreatedAt"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@UpdatedAt"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@DeletedAt")," \u5355\u4e2a\u88c5\u9970\u5668\u6807\u6ce8\u7684\u5217\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @CreatedAt\n  creationDate: Date;\n\n  @UpdatedAt\n  updatedOn: Date;\n\n  @DeletedAt\n  deletionDate: Date;\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u88c5\u9970\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@CreatedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamps=true")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"createdAt='creationDate'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@UpdatedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamps=true")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"updatedAt='updatedOn'"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@DeletedAt")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f1a\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"td"},"timestamps=true"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"paranoid=true")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"deletedAt='deletionDate'"))))),(0,l.kt)("h3",{id:"4\u666e\u901a\u5217"},"4\u3001\u666e\u901a\u5217"),(0,l.kt)("p",null,"@Column \u88c5\u9970\u5668\u7528\u4e8e\u6807\u6ce8\u666e\u901a\u5217\uff0c\u53ef\u4ee5\u5728\u4e0d\u4f20\u9012\u4efb\u4f55\u53c2\u6570\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u3002 \u4f46\u662f\u56e0\u6b64\u9700\u8981\u80fd\u591f\u81ea\u52a8\u63a8\u65ad js \u7c7b\u578b\uff08\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://github.com/sequelize/sequelize-typescript#type-inference"},"\u7c7b\u578b\u63a8\u65ad"),"\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @Column\n  name: string;\n}\n")),(0,l.kt)("p",null,"\u6216\u8005\u6307\u5b9a\u5217\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Column, DataType } from 'sequelize-typescript';\n\n@Table\nclass Person extends Model {\n  @Column(DataType.TEXT)\n  name: string;\n}\n")),(0,l.kt)("p",null,"\u66f4\u591a\u7c7b\u578b\u63cf\u8ff0\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/models-definition.html#configuration"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column, DataType } from 'sequelize-typescript'\n\n@Table\nclass Person extends Model {\n  @Column({\n    type: DataType.FLOAT,\n    comment: 'Some value',\n    ...\n  })\n  value: number;\n}\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u88c5\u9970\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@Column")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u63a8\u5bfc\u7684 ",(0,l.kt)("a",{parentName:"td",href:"https://sequelize.org/v5/manual/models-definition.html#data-types"},"dataType")," \u4f5c\u4e3a\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@Column(dataType: DataType)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u5f0f\u8bbe\u7f6e ",(0,l.kt)("a",{parentName:"td",href:"https://sequelize.org/v5/manual/models-definition.html#data-types"},"dataType"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"@Column(options: AttributeOptions)")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,l.kt)("a",{parentName:"td",href:"https://sequelize.org/v5/manual/models-definition.html#configuration"},"attribute options"))))),(0,l.kt)("h2",{id:"\u6570\u636e\u6e90\u914d\u7f6e"},"\u6570\u636e\u6e90\u914d\u7f6e"),(0,l.kt)("p",null,"\u65b0\u7248\u672c\u6211\u4eec\u542f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"../data_source"},"\u6570\u636e\u6e90\u673a\u5236"),"\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/config.default.ts")," \u4e2d\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nimport { Person } from '../entity/person';\n\nexport default {\n  // ...\n  sequelize: {\n    dataSource: {\n      default: {\n        database: 'test4',\n        username: 'root',\n        password: '123456',\n        host: '127.0.0.1',\n        port: 3306,\n        encrypt: false,\n        dialect: 'mysql',\n        define: { charset: 'utf8' },\n        timezone: '+08:00',\n        entities: [Person],\n      },\n    },\n    sync: false, // \u672c\u5730\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7sync: true\u76f4\u63a5createTable\n  },\n};\n")),(0,l.kt)("p",null,"\u5982\u9700\u4ee5\u76ee\u5f55\u626b\u63cf\u5f62\u5f0f\u5173\u8054\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"../data_source"},"\u6570\u636e\u6e90\u7ba1\u7406"),"\u3002"),(0,l.kt)("h2",{id:"\u6a21\u578b\u5173\u8054"},"\u6a21\u578b\u5173\u8054"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"HasMany")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@HasOne")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@BelongsTo"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"@BelongsToMany")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@ForeignKey")," \u88c5\u9970\u5668\u5728\u6a21\u578b\u4e2d\u76f4\u63a5\u63cf\u8ff0\u5173\u7cfb\u3002"),(0,l.kt)("h3",{id:"\u4e00\u5bf9\u591a"},"\u4e00\u5bf9\u591a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';\n\n@Table\nexport class Player extends Model {\n  @Column\n  name: string;\n\n  @Column\n  num: number;\n\n  @ForeignKey(() => Team)\n  @Column\n  teamId: number;\n\n  @BelongsTo(() => Team)\n  team: Team;\n}\n\n@Table\nexport class Team extends Model {\n  @Column\n  name: string;\n\n  @HasMany(() => Player)\n  players: Player[];\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sequelize-typescript")," \u4f1a\u5728\u5185\u90e8\u8fdb\u884c\u5173\u8054\uff0c\u4f1a\u81ea\u52a8\u67e5\u8be2\u51fa\u76f8\u5173\u7684\u4f9d\u8d56\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"find")," \u67e5\u8be2\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const team = await Team.findOne({ include: [Player] });\n\nteam.players.forEach((player) => {\n  console.log(`Player ${player.name}`);\n});\n")),(0,l.kt)("h3",{id:"\u591a\u5bf9\u591a"},"\u591a\u5bf9\u591a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Model, Column, ForeignKey, BelongsToMany } from 'sequelize-typescript';\n\n@Table\nexport class Book extends Model {\n  @BelongsToMany(() => Author, () => BookAuthor)\n  authors: Author[];\n}\n\n@Table\nexport class Author extends Model {\n  @BelongsToMany(() => Book, () => BookAuthor)\n  books: Book[];\n}\n\n@Table\nexport class BookAuthor extends Model {\n  @ForeignKey(() => Book)\n  @Column\n  bookId: number;\n\n  @ForeignKey(() => Author)\n  @Column\n  authorId: number;\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u7c7b\u578b\uff0c\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u6bd4\u5982\u4e0a\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"BookAuthor"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Author")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"books")," \u7684\u7c7b\u578b\uff0c\u53ef\u80fd\u4f1a\u4e22\u5931\u67d0\u4e9b\u5c5e\u6027\uff0c\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@BelongsToMany(() => Book, () => BookAuthor)\nbooks: Array<Book & {BookAuthor: BookAuthor}>;\n")),(0,l.kt)("h3",{id:"\u4e00\u5bf9\u4e00"},"\u4e00\u5bf9\u4e00"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u5bf9\u4e00\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@HasOne(...)"),"\uff08\u5173\u7cfb\u7684\u5916\u952e\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u6a21\u578b\u4e0a\uff09\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@BelongsTo(...)"),"\uff08\u5173\u7cfb\u7684\u5916\u952e\u5b58\u5728\u4e8e\u6b64\u6a21\u578b\u4e0a\uff09\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Table, Column, Model, BelongsTo, ForeignKey } from 'sequelize-typescript';\nimport { User } from './User';\n\n@Table\nexport class Photo extends Model {\n  @ForeignKey(() => User)\n  @Column({\n    comment: '\u7528\u6237Id',\n  })\n  userId: number;\n\n  @BelongsTo(() => User)\n  user: User;\n\n  @Column({\n    comment: '\u540d\u5b57',\n  })\n  name: string;\n}\n\n@Table\nexport class User extends Model {\n  @Column\n  name: string;\n}\n")),(0,l.kt)("h2",{id:"\u9759\u6001\u64cd\u4f5c\u65b9\u6cd5"},"\u9759\u6001\u64cd\u4f5c\u65b9\u6cd5"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u5355\u4e2a\u6570\u636e\u6e90\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u9759\u6001\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u4fdd\u5b58"},"\u4fdd\u5b58"),(0,l.kt)("p",null,"\u5728\u9700\u8981\u8c03\u7528\u7684\u5730\u65b9\uff0c\u4f7f\u7528\u5b9e\u4f53\u6a21\u578b\u6765\u64cd\u4f5c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { Person } from '../entity/person';\n\n@Provide()\nexport class PersonService {\n  async createPerson() {\n    const person = new Person({ name: 'bob', age: 99 });\n    await person.save();\n  }\n}\n")),(0,l.kt)("h3",{id:"\u67e5\u627e\u548c\u66f4\u65b0"},"\u67e5\u627e\u548c\u66f4\u65b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide } from '@midwayjs/decorator';\nimport { Person } from '../entity/person';\n\n@Provide()\nexport class PersonService {\n  async updatePerson() {\n    const person = await Person.findOne();\n    // \u66f4\u65b0\n    person.age = 100;\n    await person.save();\n\n    await Person.update(\n      {\n        name: 'bobby',\n      },\n      {\n        where: { id: 1 },\n      }\n    );\n  }\n}\n")),(0,l.kt)("h2",{id:"repository-\u6a21\u5f0f"},"Repository \u6a21\u5f0f"),(0,l.kt)("p",null,"Repository \u6a21\u5f0f\u53ef\u4ee5\u5c06\u67e5\u627e\u3001\u521b\u5efa\u7b49\u9759\u6001\u64cd\u4f5c\u4ece\u6a21\u578b\u5b9a\u4e49\u4e2d\u5206\u79bb\u51fa\u6765\u3002\u5b83\u8fd8\u652f\u6301\u4e0e\u591a\u4e2a sequelize \u5b9e\u4f8b\uff08\u591a\u6570\u636e\u6e90\uff09\u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("h3",{id:"\u542f\u52a8-repository-\u6a21\u5f0f"},"\u542f\u52a8 Repository \u6a21\u5f0f"),(0,l.kt)("p",null,"\u548c\u6570\u636e\u6e90\u914d\u7f6e\u76f8\u540c\uff0c\u53ea\u662f\u591a\u4e86\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nimport { Person } from '../entity/person';\n\nexport default {\n  // ...\n  sequelize: {\n    dataSource: {\n      default: {\n        // ...\n        entities: [Person],\n\n        // \u591a\u4e86\u8fd9\u4e00\u4e2a\n        repositoryMode: true,\n      },\n    },\n    sync: false,\n  },\n};\n")),(0,l.kt)("p",null,"\u5982\u679c\u662f\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u52a1\u5fc5\u5728\u6bcf\u4e2a\u6570\u636e\u6e90\u90fd\u5f00\u542f\u8be5\u5c5e\u6027\uff0c\u5f00\u542f\u540e\uff0c\u539f\u6709\u7684\u9759\u6001\u64cd\u4f5c\u65b9\u6cd5\u4e0d\u518d\u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Repository")," \u7684\u64cd\u4f5c\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-repository-\u6a21\u5f0f"},"\u4f7f\u7528 Repository \u6a21\u5f0f"),(0,l.kt)("p",null,"\u57fa\u672c API \u548c\u9759\u6001\u64cd\u4f5c\u76f8\u540c\uff0cMidway \u5bf9\u5176\u8fdb\u884c\u4e86\u4e00\u4e9b\u7b80\u5355\u5305\u88f9\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"InjectRepository")," \u88c5\u9970\u5668\u53ef\u4ee5\u5728\u670d\u52a1\u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"Repository"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/decorator';\nimport { InjectRepository } from '@midwayjs/sequelize';\nimport { Photo } from '../entity/photo';\nimport { User } from '../entity/user';\nimport { Op } from 'sequelize';\n\n@Controller('/')\nexport class HomeController {\n  @InjectRepository(User)\n  userRepository: Repository<User>;\n\n  @InjectRepository(Photo)\n  photoRepository: Repository<Photo>;\n\n  @Get('/')\n  async home() {\n    // \u67e5\u8be2\n    let result = await this.photoRepository.findAll();\n    console.log(result);\n\n    // \u65b0\u589e\n    await this.photoRepository.create({\n      name: '123',\n    });\n\n    // \u5220\u9664\n    await this.photoRepository.destroy({\n      where: {\n        name: '123',\n      },\n    });\n\n    // \u8054\u5408\u67e5\u8be2\n    // SELECT * FROM photo WHERE name = \"23\" OR name = \"34\";\n    let result = await this.photoRepository.findAll({\n      where: {\n        [Op.or]: [{ name: '23' }, { name: '34' }],\n      },\n    });\n    // => result\n\n    // \u8fde\u8868\u67e5\u8be2\n    let result = await this.userRepository.findAll({ include: [Photo] });\n    // => result\n  }\n}\n")),(0,l.kt)("p",null,"\u5173\u4e8e OP \u7684\u66f4\u591a\u7528\u6cd5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://sequelize.org/v5/manual/querying.html"},"https://sequelize.org/v5/manual/querying.html")),(0,l.kt)("h3",{id:"\u591a\u5e93\u7684\u652f\u6301"},"\u591a\u5e93\u7684\u652f\u6301"),(0,l.kt)("p",null,"\u5728 Repository \u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"InjectRepository")," \u53c2\u6570\u4e2d\u6307\u5b9a\u7279\u5b9a\u7684\u6570\u636e\u6e90\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller } from '@midwayjs/decorator';\nimport { InjectRepository } from '@midwayjs/sequelize';\nimport { Photo } from '../entity/photo';\nimport { User } from '../entity/user';\n\n@Controller('/')\nexport class HomeController {\n  // \u6307\u5b9a\u67d0\u4e2a\u6570\u636e\u6e90\n  @InjectRepository(User, 'default')\n  userRepository: Repository<User>;\n  // ...\n}\n")),(0,l.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u7684\u6587\u6863\uff0c\u7ffb\u8bd1\u81ea sequelize-typescript\uff0c\u66f4\u591a API \uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"(https://github.com/sequelize/sequelize-typescrip)"},"\u82f1\u6587\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e9b ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ddzyan/midway-practice"},"\u6848\u4f8b")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u9047\u5230\u6bd4\u8f83\u590d\u6742\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://sequelize.org/v5/manual/raw-queries.html"},"raw query \u65b9\u6cd5"))))}c.isMDXComponent=!0}}]);
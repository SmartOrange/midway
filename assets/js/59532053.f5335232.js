"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9699],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9554:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),p=["components"],i={title:"TS \u65b0\u624b\u6307\u5357"},o=void 0,s={unversionedId:"ts_guide",id:"version-1.0.0/ts_guide",title:"TS \u65b0\u624b\u6307\u5357",description:"Typescript \u548c Javascript \u65e2\u76f8\u4f3c\u53c8\u6709\u7740\u8bb8\u591a\u4e0d\u540c\uff0c\u4ee5\u5f80\u7684 Node.js \u5e94\u7528\u548c\u6a21\u5757\u5927\u591a\u90fd\u662f Javascript \u5199\u7684\u3002",source:"@site/versioned_docs/version-1.0.0/ts_guide.md",sourceDirName:".",slug:"/ts_guide",permalink:"/docs/1.0.0/ts_guide",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/ts_guide.md",tags:[],version:"1.0.0",frontMatter:{title:"TS \u65b0\u624b\u6307\u5357"},sidebar:"common",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/docs/1.0.0/quickstart"},next:{title:"\u8def\u7531\u548c\u63a7\u5236\u5668",permalink:"/docs/1.0.0/controller"}},u={},c=[{value:"\u5e94\u7528\u76ee\u5f55\u7ed3\u6784",id:"\u5e94\u7528\u76ee\u5f55\u7ed3\u6784",level:2},{value:"ts \u4f9d\u8d56",id:"ts-\u4f9d\u8d56",level:3},{value:"src \u548c dist",id:"src-\u548c-dist",level:3},{value:"tsconfig.json \u6587\u4ef6",id:"tsconfigjson-\u6587\u4ef6",level:3},{value:"tslint.json",id:"tslintjson",level:3},{value:"\u5173\u4e8e\u5bfc\u51fa\u548c\u5bfc\u5165",id:"\u5173\u4e8e\u5bfc\u51fa\u548c\u5bfc\u5165",level:2},{value:"export \u53d8\u91cf",id:"export-\u53d8\u91cf",level:3},{value:"\u9ed8\u8ba4\u5bfc\u51fa",id:"\u9ed8\u8ba4\u5bfc\u51fa",level:3},{value:"default \u5bfc\u51fa",id:"default-\u5bfc\u51fa",level:3},{value:"\u4e00\u822c\u5bfc\u5165",id:"\u4e00\u822c\u5bfc\u5165",level:3},{value:"\u9ed8\u8ba4\u5bfc\u5165",id:"\u9ed8\u8ba4\u5bfc\u5165",level:3},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Typescript \u548c Javascript \u65e2\u76f8\u4f3c\u53c8\u6709\u7740\u8bb8\u591a\u4e0d\u540c\uff0c\u4ee5\u5f80\u7684 Node.js \u5e94\u7528\u548c\u6a21\u5757\u5927\u591a\u90fd\u662f Javascript \u5199\u7684\u3002"),(0,l.kt)("p",null,"\u800c Midway \u5728\u963f\u91cc\u6c89\u6dc0\u591a\u5e74\uff0c\u5728\u591a\u4eba\u534f\u4f5c\u548c\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\u6211\u4eec\u53d1\u73b0\uff0cTypescript \u7684\u63a5\u53e3\u5b9a\u4e49\u548c\u7c7b\u578b\u7cfb\u7edf\uff0c\u4f7f\u5f97\u5e94\u7528\u7f16\u7801\u51fa\u9519\u7684\u6982\u7387\u5927\u5927\u964d\u4f4e\u3002"),(0,l.kt)("p",null,"\u5728\u5168\u65b0\u7684\u4f53\u7cfb\u4e2d\uff0c\u6211\u4eec ",(0,l.kt)("strong",{parentName:"p"},"\u63a8\u8350\u4f7f\u7528 TypeScript \u8bed\u6cd5\u6765\u7f16\u7801"),"\u3002"),(0,l.kt)("h2",{id:"\u5e94\u7528\u76ee\u5f55\u7ed3\u6784"},"\u5e94\u7528\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("p",null,"\u867d\u7136 TypeScript \u7684\u76ee\u5f55\u591a\u79cd\u591a\u6837\uff0c\u4f46\u662f\u5728\u7edf\u4e00\u7684\u7f16\u7801\u89c4\u8303\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5e38\u7528\u7684\u4e00\u79cd\uff0c\u8fd9\u91cc\u5c31\u7b80\u5355\u4ecb\u7ecd\u6211\u4eec\u5e38\u89c1\u7684\u76ee\u5f55\u4ee5\u53ca\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 app\n\xa0\xa0 \u251c\u2500\u2500 README.md\n\xa0\xa0 \u251c\u2500\u2500 .gitignore\n\xa0\xa0 \u251c\u2500\u2500 package.json\n\xa0\xa0 \u251c\u2500\u2500 src\n\xa0\xa0 \u251c\u2500\u2500 dist\n\xa0\xa0 \u251c\u2500\u2500 test\n\xa0\xa0 \u251c\u2500\u2500 tsconfig.json\n\xa0\xa0 \u2514\u2500\u2500 tslint.json\n")),(0,l.kt)("p",null,"\u6700\u5e38\u89c1\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff0c\u6211\u4eec\u4e00\u4e00\u6765\u4ecb\u7ecd\u3002"),(0,l.kt)("h3",{id:"ts-\u4f9d\u8d56"},"ts \u4f9d\u8d56"),(0,l.kt)("p",null,"\u5728\u4ecb\u7ecd\u76ee\u5f55\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u4ecb\u7ecd\u5e94\u7528\u9700\u8981\u5b89\u88c5\u7684\u4f9d\u8d56\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u5df2\u7ecf\u4f5c\u4e3a\u9ed8\u8ba4\u5185\u5bb9\u5728\u811a\u624b\u67b6\u4e2d\u63d0\u4f9b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// in package.json\n"devDependencies": {\n  "@types/mocha": "^5.2.5",\n  "@types/node": "^10.5.5",\n  "ts-node": "^7.0.1",\n  "tslint": "^5.9.1",\n  "typescript": "^2.8.0"\n}\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u4f9d\u8d56\u6709\u4e24\u90e8\u5206\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@types/*")," \u5f00\u5934\u7684\u5b9a\u4e49\u6587\u4ef6\u548c\u5176\u4ed6 ts \u8fd0\u884c\u65f6\u9700\u8981\u7684\u6587\u4ef6\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@types/node - Node.js \u7684\u5b9a\u4e49\u5305\uff0c\u6709\u4e86\u5b83\u539f\u751f\u5185\u7f6e\u7684\u6a21\u5757\u5c31\u6709\u4e86\u7c7b\u578b\u5b9a\u4e49\uff0c@types/mocha \u540c\u7406"),(0,l.kt)("li",{parentName:"ul"},"typescript - \u5fae\u8f6f\u63d0\u4f9b\u7684 ts \u6838\u5fc3\u5305\uff0c\u63d0\u4f9b\u4e86\u9ad8\u9636\u7684\u8bed\u6cd5\u7cd6\u652f\u6301\uff0c\u540c\u65f6\u4e5f\u63d0\u4f9b\u4e86 tsc \u7b49\u7f16\u8bd1\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},"ts-node - \u4e09\u65b9\u63d0\u4f9b\u7684\u8fd0\u884c\u73af\u5883\uff0c\u7531\u4e8e js \u8fd0\u884c\u65e0\u9700\u7f16\u8bd1\uff0c\u53ea\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"li"},"node index.js")," \u5373\u53ef\u8fd0\u884c\uff0c\u540c\u7406\uff0c\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"ts-node index.ts")," \u6765\u76f4\u63a5\u8fd0\u884c ts\uff0c\u65b9\u4fbf\u5f00\u53d1")),(0,l.kt)("h3",{id:"src-\u548c-dist"},"src \u548c dist"),(0,l.kt)("p",null,"\u7531\u4e8e Typescript \u662f\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\uff0c\u867d\u7136\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u53ef\u4ee5\u901a\u8fc7\u7c7b\u4f3c ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},"ts-node")," \u8fd9\u6837\u7684\u6a21\u5757\u6765\u7b80\u5316\uff0c\u4f46\u662f\u6700\u7ec8\u5e94\u7528\u90e8\u7f72\u524d\uff0c\u8fd8\u662f\u9700\u8981\u6253\u5305\u7f16\u8bd1\u7684\uff0cmidway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"midway-bin build")," \u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1\uff0c\u8fd9\u4e00\u5185\u5bb9\u5c06\u5728\u5de5\u5177\u90e8\u5206\u6765\u63d0\u4f9b\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u5b58\u653e Typescript \u6e90\u6587\u4ef6\uff0cTypescript \u6e90\u6587\u4ef6\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"*.ts")," \u7ed3\u5c3e\uff0c\u800c\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"*.js"),"\uff0c\u5728\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u548c\u6e90\u6587\u4ef6\u4e00\u4e00\u5bf9\u5e94\u3002"),(0,l.kt)("h3",{id:"tsconfigjson-\u6587\u4ef6"},"tsconfig.json \u6587\u4ef6"),(0,l.kt)("p",null,"\u8fd9\u662f TypeScript \u7684\u6838\u5fc3\u914d\u7f6e\u6587\u4ef6\uff0c\u4e00\u822c\u5728\u5e94\u7528\u6839\u76ee\u5f55\uff0c\u91cc\u9762\u7684\u914d\u7f6e\u9879\u4e00\u822c\u662f\u90fd\u662f\u6307\u5b9a\u7f16\u8bd1\u73af\u5883\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "ES2017",\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "experimentalDecorators": true,\n    "noImplicitThis": true,\n    "noUnusedLocals": true,\n    "stripInternal": true,\n    "pretty": true,\n    "declaration": true,\n    "sourceMap": true,\n    "outDir": "dist",\n    "lib": ["es2017", "dom"]\n  },\n  "exclude": ["dist", "node_modules", "test"]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"experimentalDecorators")," \u5c31\u662f\u7528\u6765\u8868\u793a\u662f\u5426\u542f\u7528\u88c5\u9970\u5668\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"noUnusedLocals")," \u8868\u793a\u662f\u5426\u5b58\u5728\u6ca1\u6709\u4f7f\u7528\u7684\u672c\u5730\u53d8\u91cf\u7f16\u8bd1\u65f6\u62a5\u9519\uff0c\u8fd9\u4e9b\u914d\u7f6e\u4fe1\u606f\u90fd\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"\u8fd9\u91cc")," \u67e5\u8be2\u5230\u3002"),(0,l.kt)("h3",{id:"tslintjson"},"tslint.json"),(0,l.kt)("p",null,"Tslint \u5bf9\u5e94\u4e8e Eslint \u6216\u8005 Jslint\uff0c\u7528\u4e8e\u5728\u4e0d\u540c\u65f6\u671f\u8fdb\u884c\u68c0\u67e5\uff0c\u8fd9\u91cc\u7684\u914d\u7f6e\u4e5f\u548c Eslint \u975e\u5e38\u76f8\u4f3c\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6709\u4e00\u4e9b\u89c4\u5219\uff0c\u6bcf\u6761\u6709\u5bf9\u5e94\u4e86\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u4f7f\u7528\u5355\u5f15\u53f7\uff0c\u4e0d\u5141\u8bb8 ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u5173\u952e\u5b57\u7b49\uff0c\u5982\u679c\u89c9\u5f97\u5f00\u53d1\u4e60\u60ef\u4e0d\u540c\uff0c\u53ef\u4ee5\u6839\u636e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/palantir/tslint"},"\u5b98\u65b9\u89c4\u5219")," \u8fdb\u884c\u8c03\u6574\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u77e5\u9053 Tslint \u6709\u4ec0\u4e48\u533a\u522b\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://ts.xcatliu.com/engineering/lint.html"},"\u8fd9\u7bc7\u6587\u7ae0")),(0,l.kt)("h2",{id:"\u5173\u4e8e\u5bfc\u51fa\u548c\u5bfc\u5165"},"\u5173\u4e8e\u5bfc\u51fa\u548c\u5bfc\u5165"),(0,l.kt)("p",null,"\u6211\u4eec\u5e38\u7528\u7684\u5bfc\u51fa\u6709\u4e24\u79cd\u5199\u6cd5\u3002"),(0,l.kt)("h3",{id:"export-\u53d8\u91cf"},"export \u53d8\u91cf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// js \u5199\u6cd5\nfunction alert() {}\nexports.alert = alert;\nexports.config = { a: 1 };\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// ts \u5199\u6cd5\nexport function alert() {}\n\nexport const config = { a: 1 };\n")),(0,l.kt)("p",null,"\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u5173\u952e\u5b57\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u5bfc\u51fa"},"\u9ed8\u8ba4\u5bfc\u51fa"),(0,l.kt)("p",null,"\u5728\u4ee5\u524d\u6211\u4eec\u5f88\u4e60\u60ef ",(0,l.kt)("inlineCode",{parentName:"p"},"module.exports")," \u6765\u5c06\u6574\u4e2a\u5bf9\u8c61\u8fdb\u884c\u5bfc\u51fa\uff0c\u800c\u5207\u6362\u5230 ts \u4e4b\u540e\uff0c\u8bf7\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u8fd9\u79cd\u505a\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// js \u5199\u6cd5\nmodule.exports = {\n  a: 1,\n};\n\nmodule.exports = () => {\n  console.log(111);\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// ts \u5199\u6cd5\nexport = {\n  a: 1,\n};\n\nexport = () => {\n  console.log(111);\n};\n")),(0,l.kt)("p",null,"\u4e24\u79cd\u5199\u6cd5\u65e0\u6cd5\u5e76\u5b58\uff0c\u8bf7\u5c3d\u91cf\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u8fdb\u884c\u5bfc\u51fa\u3002"),(0,l.kt)("h3",{id:"default-\u5bfc\u51fa"},"default \u5bfc\u51fa"),(0,l.kt)("p",null,"\u5728\u5f88\u591a\u65f6\u5019\uff0c\u5728\u4ee3\u7801\u4e2d\u4f1a\u6709\u505a ",(0,l.kt)("inlineCode",{parentName:"p"},"default \u5bfc\u51fa\u7684\u652f\u6301"),"\uff0c\u6bd4\u5982\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"egg-core")," \u4e2d\u7684\u52a0\u8f7d\u90e8\u5206:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// require js module\nconst obj = require(filepath);\nif (!obj) return obj;\n// it's es module\nif (obj.__esModule) return 'default' in obj ? obj.default : obj;\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c06\u4ee3\u7801\u5199\u6210\u5982\u4e0b\u4e5f\u662f\u53ef\u4ee5\u652f\u6301\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {};\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u6210 js\uff0c\u5219\u4f1a\u53d8\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.defineProperty(exports, '__esModule', { value: true });\nexports.default = {};\n")),(0,l.kt)("h3",{id:"\u4e00\u822c\u5bfc\u5165"},"\u4e00\u822c\u5bfc\u5165"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5728 js \u4e0a\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," \u5173\u952e\u5b57\u8fdb\u884c\u5bfc\u5165\uff0c\u800c\u5728 ts \u8bed\u6cd5\u4e0b\uff0c\u8fd9\u6837\u5bfc\u5165\u4f1a\u4e22\u5931\u7c7b\u578b\uff0c\u6240\u4ee5\u5728 ts \u4e0b\u5199\u6cd5\u6709\u6240\u4e0d\u540c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// js \u5199\u6cd5\nconst applicatoin = require('midway').application;\nconst { applicatoin } = require('midway');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// ts \u5199\u6cd5\nimport { applicatoin } from 'midway';\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u5199\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"midway")," \u5305\u4e2d\u7684\u7c7b\u578b\u5b9a\u4e49\u624d\u53ef\u4ee5\u88ab\u6b63\u5e38\u89e3\u6790\u3002"),(0,l.kt)("p",null,"\u53ea\u6709\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u8fdb\u884c\u5bfc\u51fa\u7684\u5c5e\u6027\u624d\u80fd\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"import"),"\uff0c\u4e0d\u7136\u5c31\u9700\u8981\u6362\u4e00\u79cd\u5199\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u9ed8\u8ba4\u5bfc\u5165"},"\u9ed8\u8ba4\u5bfc\u5165"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u4e09\u65b9\u5305\u6216\u8005\u5185\u7f6e\u6a21\u5757\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"module.exports")," \u51fa\u6765\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// js \u5199\u6cd5\nconst path = require('path');\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," \u505a\u5168\u90e8\u5bfc\u51fa\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// ts \u5199\u6cd5\nimport * as path from 'path';\n")),(0,l.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ts.xcatliu.com/"},"Typescript \u5165\u95e8\u6559\u7a0b")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://zhongsp.gitbooks.io/typescript-handbook/"},"Typescript Handbook"))))}m.isMDXComponent=!0}}]);
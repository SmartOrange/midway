"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[443],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,N=u["".concat(p,".").concat(s)]||u[s]||d[s]||i;return n?r.createElement(N,o(o({ref:t},c),{},{components:n})):r.createElement(N,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1245:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="\u8fd0\u884c\u73af\u5883",m={unversionedId:"environment",id:"environment",title:"\u8fd0\u884c\u73af\u5883",description:"Node.js \u5e94\u7528\u4e00\u822c\u901a\u8fc7 NODE_ENV \u6765\u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u6765\u6ee1\u8db3\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u4e0d\u540c\u9700\u6c42\u3002\u6bd4\u5982\u5728 production \u73af\u5883\u4e0b\uff0c\u5f00\u542f\u7f13\u5b58\uff0c\u4f18\u5316\u6027\u80fd\uff0c\u800c\u5728 development \u73af\u5883\u4e0b\uff0c\u4f1a\u6253\u5f00\u6240\u6709\u7684\u65e5\u5fd7\u5f00\u5173\uff0c\u8f93\u51fa\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u7b49\u7b49\u3002",source:"@site/docs/environment.md",sourceDirName:".",slug:"/environment",permalink:"/docs/environment",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/environment.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u8c03\u8bd5",permalink:"/docs/debugger"},next:{title:"\u591a\u73af\u5883\u914d\u7f6e",permalink:"/docs/env_config"}},c={},d=[{value:"\u6307\u5b9a\u8fd0\u884c\u73af\u5883",id:"\u6307\u5b9a\u8fd0\u884c\u73af\u5883",level:2},{value:"\u4ee3\u7801\u4e2d\u83b7\u53d6\u73af\u5883",id:"\u4ee3\u7801\u4e2d\u83b7\u53d6\u73af\u5883",level:2},{value:"\u5e38\u89c1\u7684\u73af\u5883\u53d8\u91cf\u503c",id:"\u5e38\u89c1\u7684\u73af\u5883\u53d8\u91cf\u503c",level:2},{value:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u83b7\u53d6\u73af\u5883",id:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u83b7\u53d6\u73af\u5883",level:2}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,i.kt)("p",null,"Node.js \u5e94\u7528\u4e00\u822c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u6765\u83b7\u53d6\u73af\u5883\u53d8\u91cf\uff0c\u6765\u6ee1\u8db3\u4e0d\u540c\u73af\u5883\u4e0b\u7684\u4e0d\u540c\u9700\u6c42\u3002\u6bd4\u5982\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," \u73af\u5883\u4e0b\uff0c\u5f00\u542f\u7f13\u5b58\uff0c\u4f18\u5316\u6027\u80fd\uff0c\u800c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"development")," \u73af\u5883\u4e0b\uff0c\u4f1a\u6253\u5f00\u6240\u6709\u7684\u65e5\u5fd7\u5f00\u5173\uff0c\u8f93\u51fa\u8be6\u7ec6\u7684\u9519\u8bef\u4fe1\u606f\u7b49\u7b49\u3002"),(0,i.kt)("h2",{id:"\u6307\u5b9a\u8fd0\u884c\u73af\u5883"},"\u6307\u5b9a\u8fd0\u884c\u73af\u5883"),(0,i.kt)("p",null,"\u7531\u4e8e\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u4f1a\u88ab\u4e00\u4e9b\u5de5\u5177\u5305\u62e6\u622a\u6ce8\u5165\uff0c\u6240\u4ee5\u5728 Midway \u4f53\u7cfb\u4e0b\uff0c\u6211\u4eec\u4f1a\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"MIDWAY_SERVER_ENV")," \u4f18\u5148\u83b7\u53d6\u73af\u5883\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u4f5c\u4e3a\u7b2c\u4e8c\u4f18\u5148\u7ea7\u83b7\u53d6\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u542f\u52a8\u65f6\u589e\u52a0\u73af\u5883\u53d8\u91cf\u6765\u6307\u5b9a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"MIDWAY_SERVER_ENV=prod npm start        // \u7b2c\u4e00\u4f18\u5148\u7ea7\nNODE_ENV=local npm start                // \u7b2c\u4e8c\u4f18\u5148\u7ea7\n")),(0,i.kt)("p",null,"\u5728 windows \u73af\u5883\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cross-env"},"cross-env")," \u6a21\u5757\u4ee5\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cross-env MIDWAY_SERVER_ENV=prod npm start    // \u7b2c\u4e00\u4f18\u5148\u7ea7\ncross-env NODE_ENV=local npm start            // \u7b2c\u4e8c\u4f18\u5148\u7ea7\n")),(0,i.kt)("h2",{id:"\u4ee3\u7801\u4e2d\u83b7\u53d6\u73af\u5883"},"\u4ee3\u7801\u4e2d\u83b7\u53d6\u73af\u5883"),(0,i.kt)("p",null,"Midway \u5728 app \u5bf9\u8c61\u4e0a\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"getEnv()")," \u65b9\u6cd5\u83b7\u53d6\u73af\u5883\uff0c\u9762\u5bf9\u4e0d\u540c\u7684\u4e0a\u5c42\u6846\u67b6\uff0cMidway \u90fd\u505a\u4e86\u76f8\u5e94\u7684\u5904\u7406\uff0c\u4fdd\u4f7f\u5f97\u5728\u4e0d\u540c\u573a\u666f\u4e0b\uff0c\u90fd\u62e5\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"getEnv()")," \u65b9\u6cd5\u3002\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Application } from '@midwayjs/koa';\n\n// process.env.MIDWAY_SERVER_ENV=prod\n\n@Provide()\nexport class UserService {\n  \n  @App()\n  app: Application;\n\n  async invoke() {\n    console.log(this.app.getEnv()); // prod\n  }\n}\n")),(0,i.kt)("p",null,"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"MIDWAY_SERVER_ENV")," \u90fd\u6ca1\u6709\u8d4b\u503c\uff0c\u90a3\u4e48\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"prod")," \u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u4f60\u4e0d\u80fd\u76f4\u63a5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"MIDWAY_SERVER_ENV")," \u6765\u83b7\u53d6\u73af\u5883\uff0c\u8fd9\u4e24\u4e2a\u503c\u90fd\u6709\u53ef\u80fd\u4e3a\u7a7a\uff0c\u4e14 Midway \u4e0d\u4f1a\u53cd\u5411\u8bbe\u7f6e\u5b83\u3002\u5982\u9700\u83b7\u53d6\u73af\u5883\uff0c\u8bf7\u901a\u8fc7 app.getEnv() \u83b7\u53d6\u5176\u4ed6\u6846\u67b6\u63d0\u4f9b\u7684 API \u65b9\u6cd5\u83b7\u53d6\u3002"))),(0,i.kt)("h2",{id:"\u5e38\u89c1\u7684\u73af\u5883\u53d8\u91cf\u503c"},"\u5e38\u89c1\u7684\u73af\u5883\u53d8\u91cf\u503c"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6bcf\u4e2a\u516c\u53f8\u90fd\u6709\u4e00\u4e9b\u81ea\u5df1\u7684\u73af\u5883\u53d8\u91cf\u503c\uff0c\u4e0b\u9762\u662f\u4e00\u4e9b\u5e38\u89c1\u7684\u73af\u5883\u53d8\u91cf\u503c\u4ee5\u53ca\u4ed6\u4eec\u5bf9\u5e94\u7684\u8bf4\u660e\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"local"),(0,i.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u5f00\u53d1\u73af\u5883")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dev/daily/development"),(0,i.kt)("td",{parentName:"tr",align:null},"\u65e5\u5e38\u5f00\u53d1\u73af\u5883")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pre/prepub"),(0,i.kt)("td",{parentName:"tr",align:null},"\u9884\u751f\u4ea7\u73af\u5883")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prod/production"),(0,i.kt)("td",{parentName:"tr",align:null},"\u751f\u4ea7\u73af\u5883")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"test/unittest"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5355\u5143\u6d4b\u8bd5\u73af\u5883")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"benchmark"),(0,i.kt)("td",{parentName:"tr",align:null},"\u6027\u80fd\u6d4b\u8bd5\u73af\u5883")))),(0,i.kt)("h2",{id:"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u83b7\u53d6\u73af\u5883"},"\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u4e2d\u83b7\u53d6\u73af\u5883"),(0,i.kt)("p",null,"\u5728\u4f9d\u8d56\u6ce8\u5165\u5bb9\u5668\u521d\u59cb\u5316\u7684\u8fc7\u7a0b\u4e2d\uff0cMidway \u9ed8\u8ba4\u521d\u59cb\u5316\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"EnvironmentService")," \u670d\u52a1\u7528\u6765\u89e3\u6790\u73af\u5883\uff0c\u5e76\u5728\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\uff0c\u6301\u7eed\u4fdd\u6301\u8fd9\u4e2a\u670d\u52a1\u5bf9\u8c61\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u8bf7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"./built_in_service#midwayenvironmentservice"},"\u73af\u5883\u670d\u52a1"),"\u3002"))}s.isMDXComponent=!0}}]);
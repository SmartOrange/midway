"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9272],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4176:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC"},s=void 0,c={unversionedId:"serverless/deploy_to_aliyun",id:"version-2.0.0/serverless/deploy_to_aliyun",title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC",description:"\u914d\u7f6e",source:"@site/versioned_docs/version-2.0.0/serverless/deploy_to_aliyun.md",sourceDirName:"serverless",slug:"/serverless/deploy_to_aliyun",permalink:"/en/docs/2.0.0/serverless/deploy_to_aliyun",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/deploy_to_aliyun.md",tags:[],version:"2.0.0",frontMatter:{title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC"},sidebar:"Serverless",previous:{title:"MNS \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",permalink:"/en/docs/2.0.0/serverless/aliyun_trigger_mns"},next:{title:"\u963f\u91cc\u4e91\u53d1\u5e03 FAQ",permalink:"/en/docs/2.0.0/serverless/deploy_aliyun_faq"}},p={},u=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"f.yml")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"provider")," \u6bb5\u843d\u5904\u786e\u4fdd\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"aliyun")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: aliyun\n")),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("p",null,"\u90e8\u7f72\u51fd\u6570\uff0c\u76f4\u63a5\u4f7f\u7528\u53d1\u5e03\u547d\u4ee4\u5373\u53ef\u6253\u5305\u5e76\u90e8\u7f72\u51fd\u6570\uff0cDeploy \u547d\u4ee4\u4f1a\u81ea\u52a8\u6253\u5305\uff0c\u5e76\u8c03\u7528\u963f\u91cc\u4e91\u5b98\u65b9\u90e8\u7f72\u5de5\u5177\u53d1\u5e03\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run deploy\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u8f93\u9519\u4e86\u4fe1\u606f\uff0c\u53ef\u4ee5\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npx midway-bin deploy --resetConfig")," \u4fee\u6539\u3002"))),(0,a.kt)("p",null,"\u963f\u91cc\u4e91\u90e8\u7f72\u9996\u6b21\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"accountId"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"accountKey"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"accountSecret")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654967-11e1bcbd-5a56-4239-99e1-5a1472ad49fd.png#align=left&display=inline&height=514&margin=%5Bobject%20Object%5D&originHeight=514&originWidth=1152&size=0&status=done&style=none&width=1152",width:"1152"}),(0,a.kt)("p",null,"\u76f8\u5173\u914d\u7f6e\u83b7\u53d6\uff0c\u53ef\u53c2\u7167\u4e0b\u65b9\u56fe\u7247\uff1a"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654949-9c14958c-3aff-403a-b89b-d03a3a95cd18.png#align=left&display=inline&height=696&margin=%5Bobject%20Object%5D&originHeight=696&originWidth=1832&size=0&status=done&style=none&width=1832",width:"1832"}),(0,a.kt)("p",null,"\u70b9\u51fb\u6b64\u5904\u8df3\u8f6c\u963f\u91cc\u4e91",(0,a.kt)("a",{parentName:"p",href:"https://account.console.aliyun.com/#/secure"},"\u5b89\u5168\u8bbe\u7f6e\u9875"),"\u3002"),(0,a.kt)("hr",null),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654950-19a811c5-2cf3-4843-a619-cfd744430fae.png#align=left&display=inline&height=184&margin=%5Bobject%20Object%5D&originHeight=592&originWidth=2406&size=0&status=done&style=none&width=746",width:"746"}),(0,a.kt)("p",null,"\u70b9\u51fb\u8df3\u8f6c\u963f\u91cc\u4e91\u4e2a\u4eba ",(0,a.kt)("a",{parentName:"p",href:"https://usercenter.console.aliyun.com/#/manage/ak"},"AccessKey \u9875\u9762"),"\u3002"),(0,a.kt)("p",null,"\u53d1\u5e03\u540e\uff0c\u963f\u91cc\u4e91\u4f1a\u8f93\u51fa\u4e00\u4e2a\u4e34\u65f6\u53ef\u7528\u7684\u57df\u540d\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5373\u53ef\u3002"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png#align=left&display=inline&height=193&margin=%5Bobject%20Object%5D&name=image.png&originHeight=193&originWidth=1219&size=35152&status=done&style=none&width=1219",width:"1219"}),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("p",null,"\u8bf7\u67e5\u8be2 ",(0,a.kt)("a",{parentName:"p",href:"/docs/deploy_aliyun_faq"},"\u963f\u91cc\u4e91\u53d1\u5e03 FAQ"),"\u3002"))}m.isMDXComponent=!0}}]);
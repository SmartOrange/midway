"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51636],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(o),m=r,d=c["".concat(u,".").concat(m)]||c[m]||k[m]||s;return o?n.createElement(d,a(a({ref:t},p),{},{components:o})):n.createElement(d,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},82184:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const s={title:"Hooks \u8bed\u6cd5"},a=void 0,i={unversionedId:"hooks/hooks_syntax",id:"version-2.0.0/hooks/hooks_syntax",title:"Hooks \u8bed\u6cd5",description:"Midway Hooks \u4f7f\u7528\u4e86\u7c7b\u4f3c\u4e8e React Hooks \u7684\u8bed\u6cd5\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u901a\u8fc7 Function + Hooks \u7684\u65b9\u5f0f\uff0c\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u6570\u636e\u5e76\u63d0\u4f9b Web \u670d\u52a1\u3002",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_syntax.md",sourceDirName:"hooks",slug:"/hooks/hooks_syntax",permalink:"/docs/2.0.0/hooks/hooks_syntax",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/hooks/hooks_syntax.md",tags:[],version:"2.0.0",frontMatter:{title:"Hooks \u8bed\u6cd5"},sidebar:"hooks",previous:{title:"\u63a5\u53e3\u5f00\u53d1 & \u524d\u7aef\u8c03\u7528",permalink:"/docs/2.0.0/hooks/hooks_api"},next:{title:"\u5185\u7f6e Hooks",permalink:"/docs/2.0.0/hooks/hooks_builtin"}},u={},l=[{value:"\u4ec0\u4e48\u662f Hooks",id:"\u4ec0\u4e48\u662f-hooks",level:2},{value:"\u4e0e React Hooks \u7684\u533a\u522b",id:"\u4e0e-react-hooks-\u7684\u533a\u522b",level:2},{value:"\u81ea\u5b9a\u4e49 Hooks",id:"\u81ea\u5b9a\u4e49-hooks",level:2}],p={toc:l},c="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Midway Hooks \u4f7f\u7528\u4e86\u7c7b\u4f3c\u4e8e React Hooks \u7684\u8bed\u6cd5\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u901a\u8fc7 Function + Hooks \u7684\u65b9\u5f0f\uff0c\u83b7\u53d6\u5f53\u524d\u8bf7\u6c42\u6570\u636e\u5e76\u63d0\u4f9b Web \u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," \u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff0c\u5e76\u8fd4\u56de\u5f53\u524d\u8bf7\u6c42\u7684 HTTP Method\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useContext } from '@midwayjs/hooks';\n\nexport function getHttpMethod() {\n  const { request } = useContext();\n  return request.method;\n}\n")),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662f-hooks"},"\u4ec0\u4e48\u662f Hooks"),(0,r.kt)("p",null,"Hooks \u662f\u4e00\u4e9b\u53ef\u4ee5\u8ba9\u4f60\u5728\u51fd\u6570\u91cc\u8bbf\u95ee\u5f53\u524d\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Hooks\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useContext: \u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587"),(0,r.kt)("li",{parentName:"ul"},"useLogger: \u83b7\u53d6 Logger"),(0,r.kt)("li",{parentName:"ul"},"useInject: \u83b7\u53d6 IoC \u6ce8\u5165\u7684\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"useConfig: \u83b7\u53d6\u7528\u6237\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"usePlugin: \u83b7\u53d6 Egg \u63d2\u4ef6")),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684 Hooks \u6765\u590d\u7528\u4ee3\u7801\u903b\u8f91\u3002"),(0,r.kt)("h2",{id:"\u4e0e-react-hooks-\u7684\u533a\u522b"},"\u4e0e React Hooks \u7684\u533a\u522b"),(0,r.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0cHooks \u662f\u7528\u4e8e\u8bbf\u95ee\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u7684\u51fd\u6570\u3002\u56e0\u6b64 Hooks \u53ea\u662f\u7528\u4e8e\u8bbf\u95ee\u4fe1\u606f\uff0c\u800c\u4e0d\u80fd\u4fdd\u5b58\u72b6\u6001\u6216\u6267\u884c\u526f\u4f5c\u7528\u7b49\u3002"),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49-hooks"},"\u81ea\u5b9a\u4e49 Hooks"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 Hooks \u6765\u5bf9\u590d\u6742\u903b\u8f91\u8fdb\u884c\u5c01\u88c5\u4e0e\u590d\u7528\u3002"),(0,r.kt)("p",null,"\u5728\u5b9a\u4e49\u4e0e\u5c01\u88c5 Hooks \u65f6\uff0c\u6211\u4eec\u8981\u6c42\u9075\u5b88\u7edf\u4e00\u7684 Hooks \u547d\u540d\u89c4\u8303\uff0c\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," \u4f5c\u4e3a\u81ea\u5b9a\u4e49 Hooks \u7684\u547d\u540d\u524d\u7f00\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"useHeader, usePath")," \u7b49\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b9a\u4e49 Hooks\uff08apis/hooks/request.ts\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useContext } from '@midwayjs/hooks';\n\nexport function useHeader() {\n  const { request } = useContext();\n  return request.headers;\n}\n\nexport function usePath() {\n  const { request } = useContext();\n  return request.path;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8c03\u7528\u81ea\u5b9a\u4e49 Hooks\uff08apis/function/index.ts\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useHeader, usePath } from '../hooks/request';\n\nexport function get() {\n  return {\n    header: useHeader(),\n    path: usePath(),\n  };\n}\n")))}k.isMDXComponent=!0}}]);
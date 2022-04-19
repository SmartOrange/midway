"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[629],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5018:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={title:"FaaS \u6587\u4ef6\u4e0a\u4f20"},p=void 0,s={unversionedId:"file_upload",id:"version-2.0.0/file_upload",title:"FaaS \u6587\u4ef6\u4e0a\u4f20",description:"\u4e00\u3001\u4f7f\u7528\u573a\u666f",source:"@site/versioned_docs/version-2.0.0/file_upload.md",sourceDirName:".",slug:"/file_upload",permalink:"/en/docs/2.0.0/file_upload",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/file_upload.md",tags:[],version:"2.0.0",frontMatter:{title:"FaaS \u6587\u4ef6\u4e0a\u4f20"},sidebar:"common",previous:{title:"\u8de8\u57df CORS",permalink:"/en/docs/2.0.0/cors"},next:{title:"\u53c2\u6570\u6821\u9a8c\u548c\u8f6c\u6362",permalink:"/en/docs/2.0.0/validate"}},c={},u=[{value:"\u4e00\u3001\u4f7f\u7528\u573a\u666f",id:"\u4e00\u4f7f\u7528\u573a\u666f",level:3},{value:"\u4e8c\u3001\u524d\u7f6e\u9700\u6c42",id:"\u4e8c\u524d\u7f6e\u9700\u6c42",level:3},{value:"\u4e09\u3001\u4ee3\u7801\u4e2d\u5982\u4f55\u4f7f\u7528",id:"\u4e09\u4ee3\u7801\u4e2d\u5982\u4f55\u4f7f\u7528",level:3},{value:"1. \u4ee3\u7801\u4e2d\u5b89\u88c5\u4e0a\u4f20\u7ec4\u4ef6",id:"1-\u4ee3\u7801\u4e2d\u5b89\u88c5\u4e0a\u4f20\u7ec4\u4ef6",level:4},{value:"2. \u6dfb\u52a0\u914d\u7f6e",id:"2-\u6dfb\u52a0\u914d\u7f6e",level:4},{value:"3. \u6dfb\u52a0\u7ec4\u4ef6",id:"3-\u6dfb\u52a0\u7ec4\u4ef6",level:4},{value:"4. \u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u540e\u7684\u6587\u4ef6",id:"4-\u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u540e\u7684\u6587\u4ef6",level:4}],d={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4e00\u4f7f\u7528\u573a\u666f"},"\u4e00\u3001\u4f7f\u7528\u573a\u666f"),(0,o.kt)("p",null,"\u4ec5\u9002\u7528\u4e8e Serverless \u73af\u5883\uff0c\u5c0f\u4e8e 6M \u7684\u6587\u4ef6\u4e0a\u4f20\u5230\u51fd\u6570\u7aef\uff0c\u8fdb\u884c\u6587\u4ef6\u76f8\u5173\u5904\u7406\u64cd\u4f5c\u3002\n\u200b"),(0,o.kt)("h3",{id:"\u4e8c\u524d\u7f6e\u9700\u6c42"},"\u4e8c\u3001\u524d\u7f6e\u9700\u6c42"),(0,o.kt)("p",null,"\u786e\u8ba4\u4e0a\u4f20\u7684\u6587\u4ef6\u662f\u5426\u5c0f\u4e8e 6M\uff0c\u8d85\u8fc7 6M \u7684\u6587\u4ef6\u5efa\u8bae\u4f7f\u7528 OSS \u76f4\u4f20\u65b9\u6848\u3002\n\u200b"),(0,o.kt)("h3",{id:"\u4e09\u4ee3\u7801\u4e2d\u5982\u4f55\u4f7f\u7528"},"\u4e09\u3001\u4ee3\u7801\u4e2d\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h4",{id:"1-\u4ee3\u7801\u4e2d\u5b89\u88c5\u4e0a\u4f20\u7ec4\u4ef6"},"1. \u4ee3\u7801\u4e2d\u5b89\u88c5\u4e0a\u4f20\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @midwayjs/faas-middleware-upload --save\n")),(0,o.kt)("h4",{id:"2-\u6dfb\u52a0\u914d\u7f6e"},"2. \u6dfb\u52a0\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728\u51fd\u6570\u76ee\u5f55\u4e2d\u521b\u5efa config \u76ee\u5f55\uff0c\u5728\u6b64\u76ee\u5f55\u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// config/config.default.ts\nexport const upload = {\n  mod: 'stream',\n};\n")),(0,o.kt)("h4",{id:""}),(0,o.kt)("p",null,"\u914d\u7f6e\u4e2d\u7684 mod \u652f\u6301\u4e09\u79cd\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"stream"),"\uff0c\u5373\u6d41\u5f0f\uff0c\u8fd8\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"buffer")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," \u4e24\u79cd\u914d\u7f6e\uff0c\u8fd9\u4e09\u79cd mod \u914d\u7f6e\u5206\u522b\u5bf9\u5e94\u7684 file.data \u4e3a ReadStream\u3001File Data Buffer \u548c \u4e34\u65f6\u6587\u4ef6\u5730\u5740\u3002"),(0,o.kt)("h4",{id:"-1"}),(0,o.kt)("h4",{id:"3-\u6dfb\u52a0\u7ec4\u4ef6"},"3. \u6dfb\u52a0\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728\u51fd\u6570\u76ee\u5f55\u4e2d\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\nimport { Configuration, App } from '@midwayjs/decorator';\nimport * as Upload from '@midwayjs/faas-middleware-upload';\n\n@Configuration({\n  importConfigs: ['./config/'],\n  imports: [Upload],\n})\nexport class ContainerConfiguration {\n  @App()\n  app;\n\n  async onReady() {\n    const uploadMW = await this.app.generateMiddleware(Upload.Upload);\n    this.app.use(uploadMW);\n  }\n}\n")),(0,o.kt)("h4",{id:"4-\u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u540e\u7684\u6587\u4ef6"},"4. \u4ee3\u7801\u4e2d\u83b7\u53d6\u4e0a\u4f20\u540e\u7684\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// index.ts\nimport { Provide, Inject, ServerlessTrigger } from '@midwayjs/decorator';\n\n@Provide()\nexport class IndexHandler {\n  @Inject()\n  ctx;\n\n  @ServerlessTrigger(ServerlessTriggerType.HTTP, {\n    path: '/upload',\n    method: 'post',\n  })\n  async handler() {\n    const files = (this.ctx as any).files;\n    /*\n    files = [\n        {\n        filename: \"20210118142906.jpg\",\n        data: FileReadStream, // \u8fd8\u652f\u6301\u5176\u4ed6\u6a21\u5f0f\uff0c\u53c2\u7167\u914d\u7f6e\u4e2d\u7684 mod \u53c2\u6570\n        fieldname: \"fileFormName\",\n        mimeType: \"image/jpeg\"\n      }\n    ]\n    */\n    const fields = (this.ctx as any).fields;\n    /*\n    fields = {\n            formKey: formValue\n        }\n    */\n  }\n}\n")))}f.isMDXComponent=!0}}]);
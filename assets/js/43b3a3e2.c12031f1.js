"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3284],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"\u5982\u4f55\u5b89\u88c5 Node.js \u73af\u5883"},p=void 0,s={unversionedId:"how_to_install_nodejs",id:"version-2.0.0/how_to_install_nodejs",title:"\u5982\u4f55\u5b89\u88c5 Node.js \u73af\u5883",description:"\u4f7f\u7528\u573a\u666f",source:"@site/versioned_docs/version-2.0.0/how_to_install_nodejs.md",sourceDirName:".",slug:"/how_to_install_nodejs",permalink:"/docs/2.0.0/how_to_install_nodejs",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/how_to_install_nodejs.md",tags:[],version:"2.0.0",frontMatter:{title:"\u5982\u4f55\u5b89\u88c5 Node.js \u73af\u5883"},sidebar:"other",previous:{title:"\u5e38\u89c1 TS \u95ee\u9898",permalink:"/docs/2.0.0/ts_problem"},next:{title:"\u5982\u4f55\u66f4\u65b0 Midway",permalink:"/docs/2.0.0/how_to_update_midway"}},u={},c=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5982\u4f55\u5b89\u88c5",id:"\u5982\u4f55\u5b89\u88c5",level:2},{value:"Linux / macOS \u73af\u5883",id:"linux--macos-\u73af\u5883",level:3},{value:"Windows \u73af\u5883",id:"windows-\u73af\u5883",level:3},{value:"\u914d\u7f6e\u955c\u50cf\u5730\u5740",id:"\u914d\u7f6e\u955c\u50cf\u5730\u5740",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"\u5171\u7528 npm \u5168\u5c40\u6a21\u5757",id:"\u5171\u7528-npm-\u5168\u5c40\u6a21\u5757",level:2},{value:"\u76f8\u5173\u9605\u8bfb",id:"\u76f8\u5173\u9605\u8bfb",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,o.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u76f4\u63a5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//nodejs.org/"},"Node.js \u5b98\u7f51"),"\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5b89\u88c5\u5305\uff0c\u5373\u53ef\u5b8c\u6210\u73af\u5883\u914d\u7f6e\u3002\n\u4f46\u5728",(0,o.kt)("strong",{parentName:"p"},"\u672c\u5730\u5f00\u53d1"),"\u7684\u65f6\u5019\uff0c\u7ecf\u5e38\u9700\u8981\u5feb\u901f\u66f4\u65b0\u6216\u5207\u6362\u7248\u672c\u3002\n\u793e\u533a\u6709 ",(0,o.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/creationix/nvm"},"nvm"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/tj/n"},"n")," \u7b49\u65b9\u6848\uff0c\u6211\u4eec\u63a8\u8350\u8de8\u5e73\u53f0\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/jasongin/nvs"},"nvs"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nvs \u662f\u8de8\u5e73\u53f0\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"nvs \u662f\u57fa\u4e8e Node \u7f16\u5199\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u4e0e\u7ef4\u62a4\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53cb\u60c5\u63d0\u793a\uff1aNode 6.x \u548c 8.x \u90fd\u5c06\u5728\u4eca\u5e74\u7ed3\u675f LTS \u7684\u652f\u6301\uff0c\u8bf7\u5c3d\u5feb\u5347\u7ea7\u5230 10.x \u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/nodejs/Release"},"https://github.com/nodejs/Release"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PS\uff1anvs \u6211\u4eec\u4e00\u822c\u53ea\u7528\u4e8e\u672c\u5730\u5f00\u53d1\uff0c\u7ebf\u4e0a\u53c2\u89c1\uff1a"),(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/39226941"},"\u79d1\u666e\u6587\uff1a\u8fd0\u7ef4\u4e0d\u7ed9\u5347\u7ea7 Node \u7248\u672c\u600e\u4e48\u529e\uff1f")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u5982\u4f55\u5b89\u88c5"},"\u5982\u4f55\u5b89\u88c5"),(0,o.kt)("h3",{id:"linux--macos-\u73af\u5883"},"Linux / macOS \u73af\u5883"),(0,o.kt)("p",null,"\u901a\u8fc7 Git Clone \u5bf9\u5e94\u7684\u9879\u76ee\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ export NVS_HOME="$HOME/.nvs"\n$ git clone https://github.com/jasongin/nvs --depth=1 "$NVS_HOME"\n$ . "$NVS_HOME/nvs.sh" install\n')),(0,o.kt)("h3",{id:"windows-\u73af\u5883"},"Windows \u73af\u5883"),(0,o.kt)("p",null,"\u7531\u4e8e Windows \u73af\u5883\u914d\u7f6e\u6bd4\u8f83\u590d\u6742\uff0c\u6240\u4ee5\u8fd8\u662f\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"msi")," \u6587\u4ef6\u5b8c\u6210\u521d\u59cb\u5316\u5de5\u4f5c\u3002\n\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"https://link.zhihu.com/?target=https%3A//github.com/jasongin/nvs/releases"},"nvs/releases")," \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nvs.msi"),"\uff0c\u7136\u540e\u53cc\u51fb\u5b89\u88c5\u5373\u53ef\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u914d\u7f6e\u955c\u50cf\u5730\u5740"},"\u914d\u7f6e\u955c\u50cf\u5730\u5740"),(0,o.kt)("p",null,"\u5728\u56fd\u5185\u7531\u4e8e\u5927\u5bb6\u90fd\u61c2\u7684\u539f\u56e0\uff0c\u9700\u8981\u628a\u5bf9\u5e94\u7684\u955c\u50cf\u5730\u5740\u4fee\u6539\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nvs remote node https://npm.taobao.org/mirrors/node/\n$ nvs remote\ndefault             node\nchakracore          https://github.com/nodejs/node-chakracore/releases/\nchakracore-nightly  https://nodejs.org/download/chakracore-nightly/\nnightly             https://nodejs.org/download/nightly/\nnode                https://nodejs.org/dist/\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5373\u53ef\u975e\u5e38\u7b80\u5355\u7684\u5b89\u88c5 Node.js \u6700\u65b0\u7684 LTS \u7248\u672c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u6700\u65b0\u7684 LTS \u7248\u672c\n$ nvs add lts\n# \u914d\u7f6e\u4e3a\u9ed8\u8ba4\u7248\u672c\n$ nvs link lts\n")),(0,o.kt)("p",null,"\u5b89\u88c5\u5176\u4ed6\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u5176\u4ed6\u7248\u672c\u5c1d\u5c1d\u9c9c\n$ nvs add 12\n# \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u7248\u672c\n$ nvs ls\n# \u5728\u5f53\u524d Shell \u5207\u6362\u7248\u672c\n$ nvs use 12\n")),(0,o.kt)("p",null,"\u66f4\u591a\u6307\u4ee4\u53c2\u89c1 ",(0,o.kt)("inlineCode",{parentName:"p"},"nvs --help")," \u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u5171\u7528-npm-\u5168\u5c40\u6a21\u5757"},"\u5171\u7528 npm \u5168\u5c40\u6a21\u5757"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"nvs")," \u65f6\uff0c\u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," \u662f\u5f53\u524d\u6fc0\u6d3b\u7684 Node.js \u7248\u672c\u7684\u5b89\u88c5\u8def\u5f84\u3002\n\u5e26\u6765\u4e00\u4e2a\u95ee\u9898\u662f\uff1a\u5207\u6362\u7248\u672c\u4e4b\u540e\uff0c\u4e4b\u524d\u5b89\u88c5\u5168\u5c40\u547d\u4ee4\u6a21\u5757\u9700\u8981\u91cd\u65b0\u5b89\u88c5\uff0c\u975e\u5e38\u4e0d\u65b9\u4fbf\u3002\n\u89e3\u51b3\u65b9\u6848\u662f\u914d\u7f6e\u7edf\u4e00\u7684\u5168\u5c40\u6a21\u5757\u5b89\u88c5\u8def\u5f84\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.npm-global"),"\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir -p ~/.npm-global\n$ npm config set prefix ~/.npm-global\n")),(0,o.kt)("p",null,"\u8fd8\u9700\u914d\u7f6e\u73af\u5883\u53d8\u91cf\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," \u6587\u4ef6\u91cc\u9762\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.zshrc\n$ source ~/.zshrc\n')),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u76f8\u5173\u9605\u8bfb"},"\u76f8\u5173\u9605\u8bfb"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/62265144"},"\u79d1\u666e\u6587\uff1aNode.js \u5b89\u5168\u653b\u9632 - \u5982\u4f55\u4f2a\u9020\u548c\u83b7\u53d6\u7528\u6237\u771f\u5b9e IP \uff1f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/39226941"},"\u79d1\u666e\u6587\uff1a\u8fd0\u7ef4\u4e0d\u7ed9\u5347\u7ea7 Node \u7248\u672c\u600e\u4e48\u529e\uff1f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/39209596"},"\u79d1\u666e\u6587\uff1a\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u5728\u670d\u52a1\u5668\u4e0a npm install \uff1f"))))}h.isMDXComponent=!0}}]);
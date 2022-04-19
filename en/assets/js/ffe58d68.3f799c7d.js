"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7614],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],l={title:"TypeORM Model Generator"},i=void 0,p={unversionedId:"tool/typeorm_generator",id:"version-2.0.0/tool/typeorm_generator",title:"TypeORM Model Generator",description:"\u611f\u8c22\u793e\u533a\u7528\u6237 @youtiao66 \u63d0\u4f9b\u6b64\u6a21\u5757\u3002",source:"@site/versioned_docs/version-2.0.0/tool/typeorm_generator.md",sourceDirName:"tool",slug:"/tool/typeorm_generator",permalink:"/en/docs/2.0.0/tool/typeorm_generator",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/tool/typeorm_generator.md",tags:[],version:"2.0.0",frontMatter:{title:"TypeORM Model Generator"},sidebar:"other",previous:{title:"\u68c0\u67e5\u5de5\u5177",permalink:"/en/docs/2.0.0/tool/luckyeye"},next:{title:"midwayjs/egg-ts-helper",permalink:"/en/docs/2.0.0/tool/egg-ts-helper"}},c={},u=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u611f\u8c22\u793e\u533a\u7528\u6237 @youtiao66 \u63d0\u4f9b\u6b64\u6a21\u5757\u3002\n\u200b"),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u521b\u5efa for Midway \u7684 TypeORM Model\u3002\n\u200b"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u6bd4\u5982\u751f\u6210 mysql \u7684 model\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u63a8\u8350\n# \u8bf7\u66ff\u6362\u914d\u7f6e\u4fe1\u606f\n$ npx mdl-gen-midway -h localhost -p 3306 -d yourdbname -u root -x yourpassword -e mysql --noConfig --case-property none\n")),(0,a.kt)("p",null,"\u5b8c\u6574\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Usage: npx mdl-gen-midway -h <host> -d <database> -p [port] -u <user> -x\n[password] -e [engine]\n\nOptions:\n  --help                 Show help                                     [boolean]\n  --version              Show version number                           [boolean]\n  -h, --host             IP address/Hostname for database server\n                                                          [default: "127.0.0.1"]\n  -d, --database         Database name(or path for sqlite)            [required]\n  -u, --user             Username for database server\n  -x, --pass             Password for database server              [default: ""]\n  -p, --port             Port number for database server\n  -e, --engine           Database engine\n          [choices: "mssql", "postgres", "mysql", "mariadb", "oracle", "sqlite"]\n                                                              [default: "mssql"]\n  -o, --output           Where to place generated models\n                            [default: "./output"]\n  -s, --schema           Schema name to create model from. Only for mssql\n                         and postgres. You can pass multiple values\n                         separated by comma eg. -s scheme1,scheme2,scheme3\n  --ssl                                               [boolean] [default: false]\n\n  --noConfig             Doesn\'t create tsconfig.json and\n                         ormconfig.json         [\u5e03\u5c14] [\u9ed8\u8ba4\u503c: false]\n\n  --cp, --case-property  Convert property names to specified case\n                  [\u53ef\u9009\u503c: "pascal", "camel", "snake", "none"] [\u9ed8\u8ba4\u503c: "camel"]\n\n')))}d.isMDXComponent=!0}}]);
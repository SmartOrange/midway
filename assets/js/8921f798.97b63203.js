"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95767],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},m=Object.keys(e);for(i=0;i<m.length;i++)a=m[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(i=0;i<m.length;i++)a=m[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},o="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=c(a),u=r,f=o["".concat(d,".").concat(u)]||o[u]||l[u]||m;return a?i.createElement(f,n(n({ref:t},p),{},{components:a})):i.createElement(f,n({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,n=new Array(m);n[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[o]="string"==typeof e?e:r,n[1]=s;for(var c=2;c<m;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},36428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>m,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const m={date:"2022-10-29T20:00"},n="v3.7.0",s={permalink:"/changelog/v3.7.0",source:"@site/changelog/source/v3.7.0.md",title:"v3.7.0",description:"Bug Fixes",date:"2022-10-29T20:00:00.000Z",formattedDate:"2022\u5e7410\u670829\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-10-29T20:00"},prevItem:{title:"v3.7.1",permalink:"/changelog/v3.7.1"},nextItem:{title:"v3.6.1",permalink:"/changelog/v3.6.1"},listPageLink:"/changelog/page/3"},d={authorsImageUrls:[]},c=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3},{value:"Performance Improvements",id:"performance-improvements",level:3}],p={toc:c},o="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(o,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," pin dependency cron to v1.8.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2426"},"#2426"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/9873e13224e4b935697fdc22ecca97d43f809083"},"9873e13"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency @bull-board/api to v4.6.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2415"},"#2415"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/bc7f83ec7d586e847fa70a5974e28e2a79ac4b40"},"bc7f83e"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency @bull-board/api to v4.6.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2448"},"#2448"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/aaf7116385c4bd92b338e519afa15f9da402b5be"},"aaf7116"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency @bull-board/ui to v4.6.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2416"},"#2416"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ccb6d2bb95088261504d623cae6885cc24953b1c"},"ccb6d2b"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency @bull-board/ui to v4.6.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2449"},"#2449"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0a846920c58868e5801db9d8e85edddad4074d2d"},"0a84692"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency @grpc/grpc-js to v1.7.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2411"},"#2411"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/5f433a16afcb4f031310811608eaa8fdd5968ed8"},"5f433a1"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency @grpc/grpc-js to v1.7.3 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2433"},"#2433"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/07c7accb4294a98d0726bc53b8bcec33038dd794"},"07c7acc"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency amqp-connection-manager to v4.1.9 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2450"},"#2450"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/f0a4ccceba4a9fc8ef76c28b1e7cbca453d15a20"},"f0a4ccc"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency bull to v4.10.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2412"},"#2412"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/992ee59b4ab9cb82ad390f819f8cee73a2514684"},"992ee59"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency express to v4.18.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2413"},"#2413"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ace153b796a8b962d307ee1568634869f727431a"},"ace153b"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency sequelize to v6.25.3 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2417"},"#2417"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0289fe93136980b897d6d1de38557680e4f08840"},"0289fe9"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency supertest to v6.3.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2435"},"#2435"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/6342e1d2a5301f3bd512d7c58b90482bca390898"},"6342e1d"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update dependency tablestore to v5.3.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2418"},"#2418"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c7f0f56b736acd710efea03ccc4cffcec630d065"},"c7f0f56"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"deps:")," update socket.io packages to v4.5.3 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2414"},"#2414"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/3bc64d60d1648e18304259f1b957349f8d8e9ac6"},"3bc64d6"),")"),(0,r.kt)("li",{parentName:"ul"},"framework loaded by import sequence (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2394"},"#2394"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c87f1253c8ae217940f24efb7f97fe6fe61d20e4"},"c87f125"),")"),(0,r.kt)("li",{parentName:"ul"},"init context missing when dev test (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2423"},"#2423"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/fd26d92b5dea068e4f86e6d60ab0dfa47eaa55c9"},"fd26d92"),")"),(0,r.kt)("li",{parentName:"ul"},"upload whitelist set null (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2431"},"#2431"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/06a765ecfb6e4e16c982c9b39408f420d0c27be5"},"06a765e"),")")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add server timeout config (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2395"},"#2395"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/52f63b6726e6d5177ff018579be616c221379625"},"52f63b6"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"core:")," add custom route param decorator (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2400"},"#2400"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2441"},"#2441"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d5895bf09f454b34345fc11b642e4529a555b19b"},"d5895bf"),")"),(0,r.kt)("li",{parentName:"ul"},"support default data source name (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2430"},"#2430"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/b953a153bf09869a0ad3ff5e9617ca6a3db5bf77"},"b953a15"),")"),(0,r.kt)("li",{parentName:"ul"},"support user to observe histogram value (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2401"},"#2401"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/1d8c9ad1cad4f8863b1b6fd899388e554deb807e"},"1d8c9ad"),")"),(0,r.kt)("li",{parentName:"ul"},"verification code (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2402"},"#2402"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/e96cf0aa2de21b15cc69009df371834b3db22d47"},"e96cf0a"),")")),(0,r.kt)("h3",{id:"performance-improvements"},"Performance Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update triggerFunction args (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/2404"},"#2404"),") (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/7ae42ebe23c2c1a88f43e4516f7fabb22a2914c9"},"7ae42eb"),")")))}l.isMDXComponent=!0}}]);
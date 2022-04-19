"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2698],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"\u63a5\u5165 Prometheus"},l=void 0,p={unversionedId:"prometheus",id:"version-2.0.0/prometheus",title:"\u63a5\u5165 Prometheus",description:"Prometheus\uff08\u666e\u7f57\u7c73\u4fee\u65af\uff09\u662f\u4e00\u4e2a\u6700\u521d\u5728 SoundCloud \u4e0a\u6784\u5efa\u7684\u76d1\u63a7\u7cfb\u7edf\u3002 \u81ea 2012 \u5e74\u6210\u4e3a\u793e\u533a\u5f00\u6e90\u9879\u76ee\uff0c\u62e5\u6709\u975e\u5e38\u6d3b\u8dc3\u7684\u5f00\u53d1\u4eba\u5458\u548c\u7528\u6237\u793e\u533a\u3002\u4e3a\u5f3a\u8c03\u5f00\u6e90\u53ca\u72ec\u7acb\u7ef4\u62a4\uff0cPrometheus \u4e8e 2016 \u5e74\u52a0\u5165\u4e91\u539f\u751f\u4e91\u8ba1\u7b97\u57fa\u91d1\u4f1a\uff08CNCF\uff09\uff0c\u6210\u4e3a\u7ee7 Kubernetes \u4e4b\u540e\u7684\u7b2c\u4e8c\u4e2a\u6258\u7ba1\u9879\u76ee\u3002",source:"@site/versioned_docs/version-2.0.0/prometheus.md",sourceDirName:".",slug:"/prometheus",permalink:"/en/docs/2.0.0/prometheus",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/prometheus.md",tags:[],version:"2.0.0",frontMatter:{title:"\u63a5\u5165 Prometheus"},sidebar:"component",previous:{title:"\u63a5\u5165 Alinode",permalink:"/en/docs/2.0.0/alinode"}},c={},m=[{value:"\u5b89\u88c5\u7ec4\u4ef6",id:"\u5b89\u88c5\u7ec4\u4ef6",level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2},{value:"\u6570\u636e\u91c7\u96c6",id:"\u6570\u636e\u91c7\u96c6",level:2},{value:"\u642d\u5efa Prometheus",id:"\u642d\u5efa-prometheus",level:2},{value:"\u6570\u636e\u5c55\u793a",id:"\u6570\u636e\u5c55\u793a",level:2},{value:"Socket-io \u573a\u666f",id:"socket-io-\u573a\u666f",level:2},{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Prometheus\uff08\u666e\u7f57\u7c73\u4fee\u65af\uff09\u662f\u4e00\u4e2a\u6700\u521d\u5728 SoundCloud \u4e0a\u6784\u5efa\u7684\u76d1\u63a7\u7cfb\u7edf\u3002 \u81ea 2012 \u5e74\u6210\u4e3a\u793e\u533a\u5f00\u6e90\u9879\u76ee\uff0c\u62e5\u6709\u975e\u5e38\u6d3b\u8dc3\u7684\u5f00\u53d1\u4eba\u5458\u548c\u7528\u6237\u793e\u533a\u3002\u4e3a\u5f3a\u8c03\u5f00\u6e90\u53ca\u72ec\u7acb\u7ef4\u62a4\uff0cPrometheus \u4e8e 2016 \u5e74\u52a0\u5165\u4e91\u539f\u751f\u4e91\u8ba1\u7b97\u57fa\u91d1\u4f1a\uff08CNCF\uff09\uff0c\u6210\u4e3a\u7ee7 Kubernetes \u4e4b\u540e\u7684\u7b2c\u4e8c\u4e2a\u6258\u7ba1\u9879\u76ee\u3002"),(0,i.kt)("p",null,"Grafana \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5ea6\u91cf\u5206\u6790\u4e0e\u53ef\u89c6\u5316\u5957\u4ef6\u3002\u7eaf Javascript \u5f00\u53d1\u7684\u524d\u7aef\u5de5\u5177\uff0c\u901a\u8fc7\u8bbf\u95ee\u5e93\uff08\u5982 InfluxDB\uff09\uff0c\u5c55\u793a\u81ea\u5b9a\u4e49\u62a5\u8868\u3001\u663e\u793a\u56fe\u8868\u7b49\u3002Grafana \u652f\u6301\u8bb8\u591a\u4e0d\u540c\u7684\u6570\u636e\u6e90\u3002\u6bcf\u4e2a\u6570\u636e\u6e90\u90fd\u6709\u4e00\u4e2a\u7279\u5b9a\u7684\u67e5\u8be2\u7f16\u8f91\u5668,\u8be5\u7f16\u8f91\u5668\u5b9a\u5236\u7684\u7279\u6027\u548c\u529f\u80fd\u662f\u516c\u5f00\u7684\u7279\u5b9a\u6570\u636e\u6765\u6e90\u3002\u800c Prometheus \u6b63\u597d\u662f\u5176\u652f\u6301\u7684\u6570\u636e\u6e90\u4e4b\u4e00\u3002"),(0,i.kt)("p",null,"\u672c\u7bc7\u4ecb\u7ecd\u4e86 Midway \u5982\u4f55\u63a5\u5165 Grafana + Prometheus\u3002"),(0,i.kt)("p",null,"\u63a5\u5165\u6548\u679c\u5982\u4e0b\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617259935548-a2df4339-3229-4391-bd3d-4ba8e6979d4d.png#height=498&id=KoiiE&margin=%5Bobject%20Object%5D&name=image.png&originHeight=996&originWidth=1914&originalType=binary&ratio=1&size=969345&status=done&style=none&width=957",width:"957"}),(0,i.kt)("h2",{id:"\u5b89\u88c5\u7ec4\u4ef6"},"\u5b89\u88c5\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u9996\u5148\u5b89\u88c5 Midway \u63d0\u4f9b\u7684\u6307\u6807\u76d1\u63a7\u7ec4\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @midwayjs/prometheus -S\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.ts"),"\xa0 \u4e2d\uff0c\u5f15\u5165\u8fd9\u4e2a\u7ec4\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as prometheus from '@midwayjs/prometheus'; // \u5bfc\u5165\u6a21\u5757\nimport { join } from 'path';\n\n@Configuration({\n  imports: [prometheus], // \u5f15\u5165\u6a21\u5757\n  importConfigs: [join(__dirname, 'config')],\n})\nexport class AutoConfiguration {}\n")),(0,i.kt)("p",null,"\u542f\u52a8\u6211\u4eec\u7684\u5e94\u7528\uff0c\u6b64\u65f6\u8bbf\u95ee\u7684\u65f6\u5019\u591a\u4e86\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"${host}:${port}/metrics"),"\xa0 \u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Prometheus \u57fa\u4e8e HTTP \u83b7\u53d6\u76d1\u63a7\u6570\u636e\uff0c\u8bf7\u52a0\u8f7d web/koa/express \u4efb\u4e00\u6846\u67b6\uff0c\u5e76\u4f7f\u7528\u591a\u6846\u67b6\u6a21\u5f0f\u542f\u52a8\u3002"))),(0,i.kt)("p",null,"\u8bbf\u95ee\u63a5\u53e3\uff0c\u8fd4\u56de\u5982\u4e0b\uff0c\u91cc\u9762\u7684\u5185\u5bb9\u662f\u5f53\u524d\u7684\u6307\u6807\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617260048533-4f725824-9471-40c9-be8b-6dcbf27d9cca.png#height=997&id=DIl0G&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1994&originWidth=2276&originalType=binary&ratio=1&size=1070956&status=done&style=none&width=1138",width:"1138"}),(0,i.kt)("h2",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,i.kt)("p",null,"\u6307\u6807\u7ec4\u4ef6\u4e5f\u63d0\u4f9b\u4e86\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config.default.ts"),"\xa0 \u4e2d\uff0c\u4fee\u6539 prometheus \u7684\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { DefaultConfig } from '@midwayjs/prometheus';\n\nexport const prometheus: DefaultConfig = {\n  labels: {\n    APP_NAME: 'demo_project',\n  },\n};\n")),(0,i.kt)("p",null,"\u66f4\u591a\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultConfig"),"\xa0 \u8fd9\u4e2a\u5b9a\u4e49\u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e\uff0c\u6211\u4eec\u4f8b\u5982\u53ef\u4ee5\u5f52\u7c7b\u54ea\u4e9b node \u662f\u540c\u4e00\u4e2a\u5e94\u7528\uff0c\u56e0\u4e3a\u6211\u4eec\u90e8\u7f72\u7684\u65f6\u5019\uff0cnode \u7a0b\u5e8f\u662f\u5206\u5e03\u5f0f\u7684\u3002\u4f8b\u5982\u4e0a\u9762\u6211\u4eec\u52a0\u4e86 APP_NAME\uff0c\u7528\u6765\u533a\u5206\u4e0d\u540c\u7684\u5e94\u7528\uff0c\u8fd9\u6837\u5728\u76d1\u63a7\u6307\u6807\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u533a\u5206\u4e0d\u540c\u7684\u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"\u6570\u636e\u91c7\u96c6"},"\u6570\u636e\u91c7\u96c6"),(0,i.kt)("p",null,"\u6211\u4eec\u524d\u9762\u5728 Midway \u4e2d\u5f15\u5165\u7684\u7ec4\u4ef6\u4e3b\u8981\u662f\u5728 Node \u4e2d\u52a0\u4e86\u6307\u6807\u6a21\u5757\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u9700\u8981\u8ba9 Prometheus \u6765\u91c7\u96c6\u6211\u4eec\u7684\u6307\u6807\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u6240\u5728\u90e8\u95e8\u5df2\u7ecf\u6709 Prometheus+grafana \u4e86\uff0c\u5219\u53ea\u9700\u5c06\u5e94\u7528\u7684\u6307\u6807\u5730\u5740\u4e0a\u62a5\u7ed9 PE \u6216\u8005\u901a\u8fc7\u63a5\u53e3\u4e0a\u62a5\u5373\u53ef\u3002\u6b64\u5904\u6211\u4eec\u5047\u8bbe\u5927\u5bb6\u6ca1\u6709 Prometheus+grafana\uff0c\u7136\u540e\u6309\u7167\u4e0b\u9762\u63cf\u8ff0\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,i.kt)("h2",{id:"\u642d\u5efa-prometheus"},"\u642d\u5efa Prometheus"),(0,i.kt)("p",null,"\u6b64\u5904\u6211\u4eec\u901a\u8fc7 docker-compose \u6765\u642d\u5efa Prometheus\uff0c docker-compose.yml\xa0 \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '2.2'\nservices:\n  tapi:\n    logging:\n      driver: 'json-file'\n      options:\n        max-size: '50m'\n    image: prom/prometheus\n    restart: always\n    volumes:\n      - ./prometheus_data:/prometheus_data:rw\n      - ./prometheus.yml:/etc/prometheus/prometheus.yml\n      - ./targets.json:/etc/prometheus/targets.json\n    command:\n      - '--storage.tsdb.path=/prometheus_data'\n      - '--config.file=/etc/prometheus/prometheus.yml'\n      - '--storage.tsdb.retention=10d'\n      - '--web.enable-lifecycle'\n    ports:\n      - '9090:9090'\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.yml"),"\xa0\xa0 \u6587\u4ef6\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\nscrape_configs:\n  - job_name: 'node'\n    file_sd_configs:\n      - refresh_interval: 1m\n        files:\n          - '/etc/prometheus/targets.json'\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n")),(0,i.kt)("p",null,"\u7136\u540e\u91c7\u96c6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"targets.json"),"\xa0\xa0 \u5982\u4e0b\uff1a\u4e0b\u9762\u6587\u4ef6\u91cc\u9762 ",(0,i.kt)("inlineCode",{parentName:"p"},"${ip}"),"\xa0\xa0 \u66ff\u6362\u4e3a Node.js \u5e94\u7528\u6240\u5728\u670d\u52a1\u5668\u7684 ip \u5730\u5740\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "targets": ["${ip}:7001"],\n    "labels": {\n      "env": "prod",\n      "job": "api"\n    }\n  }\n]\n')),(0,i.kt)("p",null,"\u200b"),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u542f\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\xa0\xa0 \u6587\u4ef6\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up\n")),(0,i.kt)("p",null,"\u81f3\u6b64\uff0cPrometheus \u5df2\u7ecf\u4f1a\u53bb\u62c9\u53d6\u6211\u4eec Node \u5e94\u7528\u7a0b\u5e8f\u7684\u6307\u6807\u6570\u636e\u4e86\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u8981\u66f4\u65b0 target \u600e\u4e48\u505a\uff1a\n\u4fee\u6539\u4e86\u8fd9\u4e2a targets.json \u6587\u4ef6\u540e\uff0c\u901a\u8fc7 prometheus \u7684 reload \u65b9\u6cd5\u8fdb\u884c\u70ed\u52a0\u8f7d\u3002\n\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"curl -X POST http://${prometheus\u7684ip}:9090/-/reload\n")),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53ef\u4ee5\u67e5\u770b prometheus \u7684\u9875\u9762\u4e5f\u53ef\u4ee5\u786e\u8ba4\u662f\u5426\u751f\u6548\uff0c\u754c\u9762\u5730\u5740\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"http://${prometheus\u7684ip}:9090/classic/targets\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u5982\u4f55\u5c55\u793a\u8fd9\u4e9b\u91c7\u96c6\u5230\u7684\u6570\u636e\u4e86\u3002"),(0,i.kt)("h2",{id:"\u6570\u636e\u5c55\u793a"},"\u6570\u636e\u5c55\u793a"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 Grafana \u6765\u5c55\u793a\u6211\u4eec\u7684\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u6b64\u5904\u6211\u4eec\u7b80\u5355\u901a\u8fc7 Docker \u6765\u642d\u5efa\u4e00\u4e0b Grafana\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -d --name=grafana -p 3000:3000 grafana/grafana\n")),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8bbf\u95ee 127.0.0.1:3000\uff0c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\uff1aadmin:admin\u3002\n\u7136\u540e\u8bbf\u95ee\u540e\u5982\u4e0b\u6548\u679c\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617260561047-c2643a69-6258-491b-937d-9bfc4558252f.png#height=346&id=yNdWZ&margin=%5Bobject%20Object%5D&name=image.png&originHeight=692&originWidth=1496&originalType=binary&ratio=1&size=551202&status=done&style=none&width=748",width:"748"}),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u8ba9 Grafana \u63a5\u5165\u6211\u4eec\u7684 Prometheus \u6570\u636e\u6e90\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617260581029-1e2e06a8-3054-4ad8-96b5-d50ab9bb1612.png#height=286&id=atAvT&margin=%5Bobject%20Object%5D&name=image.png&originHeight=572&originWidth=1490&originalType=binary&ratio=1&size=169944&status=done&style=none&width=745",width:"745"}),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u70b9\u51fb Grafana \u6dfb\u52a0\u56fe\u8868\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620725466020-28793a78-c03b-48fa-bf16-0c9c8ecc1a94.png#clientId=u070308fc-4e5d-4&from=paste&height=741&id=uce167575&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1482&originWidth=2626&originalType=binary&ratio=1&size=310590&status=done&style=none&taskId=uedd61eb7-8e61-488f-963f-f70adb9a651&width=1313",width:"1313"}),(0,i.kt)("p",null,"\u8fd9\u8fb9 ID \u9009\u62e9 14403\uff0c\u7136\u540e\u70b9\u51fb load\uff0c\u7136\u540e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u7136\u540e\u70b9\u51fb import \u540e\uff0c\u5c31\u80fd\u770b\u5230\u6211\u4eec\u521a\u521a\u63a5\u5165\u7684\u6548\u679c\u4e86\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620725497338-a32a8982-d51f-4e74-b511-dc10a7c66d80.png#clientId=u070308fc-4e5d-4&from=paste&height=996&id=uba6ac1f0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1992&originWidth=3836&originalType=binary&ratio=1&size=1951604&status=done&style=none&taskId=ua7c2fc08-0633-4614-9af0-5bf2da800ef&width=1918",width:"1918"}),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1620725514630-4f654f10-ef3a-41f7-b403-02832d3ef7d8.png#clientId=u070308fc-4e5d-4&from=paste&height=998&id=u27a3ae30&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1996&originWidth=3830&originalType=binary&ratio=1&size=2201307&status=done&style=none&taskId=ucee30610-4c1f-4fa8-82fd-a952d5aa9e1&width=1915",width:"1915"}),(0,i.kt)("p",null,"\u8fd9\u6837\u5f00\u53d1\u8005\u53ef\u4ee5\u8fd0\u7ef4\u81ea\u5df1\u7684 Node \u7a0b\u5e8f\u4e86\uff0c\u4f8b\u5982\uff0c\u662f\u5426\u6700\u8fd1\u5f15\u5165\u4e86\u4e00\u4e2a NPM \u5305\u5bfc\u81f4\u4e86\u4ec0\u4e48\u5185\u5b58\u6cc4\u6f0f\u7684\u60c5\u51b5\uff0c\u662f\u5426\u6700\u8fd1\u6709\u5e94\u7528\u91cd\u542f\u7684\u60c5\u51b5\u4e86\u3002"),(0,i.kt)("p",null,"\u5f53\u7136\u8fd8\u80fd\u652f\u6301\u5176\u4ed6\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u3002\n\u200b"),(0,i.kt)("h2",{id:"socket-io-\u573a\u666f"},"Socket-io \u573a\u666f"),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"npm install @midwayjs/prometheus-socket-io -S\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport { join } from 'path';\nimport * as prometheus from '@midwayjs/prometheus';\nimport * as prometheusSocketIo from '@midwayjs/prometheus-socket-io';\n\n@Configuration({\n  imports: [prometheus, prometheusSocketIo],\n  importConfigs: [join(__dirname, './config')],\n  conflictCheck: true,\n})\nexport class ContainerLifeCycle {}\n")),(0,i.kt)("p",null,"\u7136\u540e\u5728/metrics \u8fd9\u8fb9\u5c31\u80fd\u770b\u5230 socket-io \u7684\u6570\u636e\u4e86\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1631090438583-d925c13c-371a-4037-9f53-edaa34580aab.png#clientId=u24adff00-2245-4&from=paste&height=459&id=u2862ab6b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=918&originWidth=1470&originalType=binary&ratio=1&size=481525&status=done&style=none&taskId=ua4ce06b2-a75d-4e4a-8bd9-c94496dca33&width=735",width:"735"}),(0,i.kt)("p",null,"\u4e00\u5171\u65b0\u589e 8 \u4e2a\u6307\u6807\u3002\n\u540e\u7eed\u4f1a\u63d0\u4f9b Grafana \u7684\u6a21\u7248 ID \u7ed9\u5927\u5bb6\u4f7f\u7528\u3002\n\u200b"),(0,i.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6839\u636e appName \u8fdb\u884c\u5206\u7c7b"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u67e5\u770b\u4e0d\u540c path \u7684 qps \u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u67e5\u770b\u4e0d\u540c status \u7684\u5206\u5e03\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u67e5\u8be2\u4e0d\u540c path \u7684 rt \u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u8fdb\u7a0b\u7684 CPU \u4f7f\u7528\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u8fdb\u7a0b\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u5806\u6808\u60c5\u51b5"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Event Loop"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u7b49")))}d.isMDXComponent=!0}}]);
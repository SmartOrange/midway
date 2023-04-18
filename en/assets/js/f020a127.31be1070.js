"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Quick Start",l={unversionedId:"quick_guide",id:"quick_guide",title:"Quick Start",description:"If you haven't touched Midway, it doesn't matter. In this chapter, we will build a Midway standard application step by step from the perspective of examples to display weather information so that you can quickly get started with Midway.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick_guide.md",sourceDirName:".",slug:"/quick_guide",permalink:"/en/docs/quick_guide",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/quick_guide.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Introduction",permalink:"/en/docs/intro"},next:{title:"Upgrade to 3.x",permalink:"/en/docs/upgrade_v3"}},s={},p=[{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Initialize project",id:"initialize-project",level:2},{value:"Write Controller",id:"write-controller",level:2},{value:"Add parameter processing",id:"add-parameter-processing",level:2},{value:"Write Service",id:"write-service",level:2},{value:"Template rendering",id:"template-rendering",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Unit test",id:"unit-test",level:2},{value:"Continue to learn",id:"continue-to-learn",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"If you haven't touched Midway, it doesn't matter. In this chapter, we will build a Midway standard application step by step from the perspective of examples to display weather information so that you can quickly get started with Midway."),(0,a.kt)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating system: supports macOS,Linux,Windows"),(0,a.kt)("li",{parentName:"ul"},"Running environment: We recommend that you select ",(0,a.kt)("a",{parentName:"li",href:"http://nodejs.org/"},"LTS"),". The minimum requirement is 12.x.")),(0,a.kt)("h2",{id:"initialize-project"},"Initialize project"),(0,a.kt)("p",null,"We recommend using scaffolding directly, with only a few simple instructions, you can quickly generate the project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm init midway\n")),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"koa-v3")," to initialize the project. You can customize the project name, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"weather-sample"),"."),(0,a.kt)("p",null,"Now you can start the application to experience it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n$ open http://localhost:7001\n")),(0,a.kt)("p",null,"At the same time, we also provide a complete example. After ",(0,a.kt)("inlineCode",{parentName:"p"},"npm init midway"),", you can select the ",(0,a.kt)("inlineCode",{parentName:"p"},"quick-start")," project and create it, which is convenient for comparison and learning."),(0,a.kt)("h2",{id:"write-controller"},"Write Controller"),(0,a.kt)("p",null,"If you are familiar with Web development or MVC, you know that we need to write ",(0,a.kt)("a",{parentName:"p",href:"./controller"},"Controller and Router")," in the first step."),(0,a.kt)("p",null,"Among the files created by scaffolding, we already have some files, and we temporarily ignore them."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"controller")," directory, create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"src/controller/weather.controller.ts")," file with the following contents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get } from '@midwayjs/core';\n\n@Controller('/')\nexport class WeatherController {\n  // Here is the decorator, defining a route\n  @Get('/weather')\n  async getWeatherInfo(): Promise<string> {\n    // This is the return of http, which can directly return strings, numbers, JSON,Buffer, etc.\n    return 'Hello Weather!';\n  }\n}\n")),(0,a.kt)("p",null,"Now we can return data through the access ",(0,a.kt)("inlineCode",{parentName:"p"},"/weather")," interface."),(0,a.kt)("h2",{id:"add-parameter-processing"},"Add parameter processing"),(0,a.kt)("p",null,"In the example, we need a URL parameter to dynamically show the weather in different cities."),(0,a.kt)("p",null,"You can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query")," decorator to obtain the parameters on the URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Query } from '@midwayjs/core';\n\n@Controller('/')\nexport class WeatherController {\n  @Get('/weather')\n  async getWeatherInfo(@Query('id') cityId: string): Promise<string> {\n    return cityId;\n  }\n}\n")),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query")," decorator, Midway also provides other request parameters. You can view the ",(0,a.kt)("a",{parentName:"p",href:"./controller"},"Routing and Control")," documentation."),(0,a.kt)("h2",{id:"write-service"},"Write Service"),(0,a.kt)("p",null,"In actual projects, Controller is generally used to receive request parameters and verify parameters. It does not include particularly complex logic, complex and reused logic, and we should encapsulate it as a Service file."),(0,a.kt)("p",null,"Let's add a Service to get weather information, including an http request to get remote data."),(0,a.kt)("p",null,"The code is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/weather.service.ts\nimport { Provide, makeHttpRequest } from '@midwayjs/core';\n\n@Provide()\nexport class WeatherService {\n  async getWeather(cityId: string) {\n    return makeHttpRequest('http://www.weather.com.cn/data/cityinfo/${cityId}.html', {\n      dataType: 'json',\n    });\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"makeHttpRequest")," method is Midway's built-in http request method. Please see the ",(0,a.kt)("a",{parentName:"li",href:"./extensions/axios"},"document")," for more parameters."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"The city weather information in the example comes from the API of China Central Meteorological Station"))))),(0,a.kt)("p",null,"Then let's add definitions. Good type definitions can help us reduce code errors."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/interface.ts")," file, we added the data definition of weather information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\n\n// ...\n\nexport interface WeatherInfo {\n  weatherinfo: {\n    city: string;\n    cityid: string;\n    temp: string;\n    WD: string;\n    WS: string;\n    SD: string;\n    AP: string;\n    njd: string;\n    WSE: string;\n    time: string;\n    sm: string;\n    isRadar: string;\n    Radar: string;\n  }\n}\n")),(0,a.kt)("p",null,"In this way, we can mark in the Service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, makeHttpRequest } from '@midwayjs/core';\nimport { WeatherInfo } from '../interface';\n\n@Provide\nexport class WeatherService {\n  async getWeather(cityId: string): Promise<WeatherInfo> {\n    const result = await makeHttpRequest<WeatherInfo>('http://www.weather.com.cn/data/sk/${cityId}.html', {\n      dataType: 'json',\n    });\n\n    if (result.status === 200) {\n      return result.data as WeatherInfo;;\n    }\n  }\n}\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"@Provide")," decorator is used here to modify the class, which is convenient for subsequent Controller injection."))))),(0,a.kt)("p",null,"At the same time, we revised the previous Controller file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Inject, Query } from '@midwayjs/core';\nimport { WeatherInfo } from '../interface';\nimport { WeatherService } from '../service/weather.service';\n\n@Controller('/')\nexport class WeatherController {\n\n  @Inject()\n  weatherService: WeatherService;\n\n  @Get('/weather')\n  async getWeatherInfo(@Query('cityId') cityId: string): Promise<WeatherInfo> {\n    return this.weatherService.getWeather(cityId);\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"@Inject")," decorator is used here to inject ",(0,a.kt)("inlineCode",{parentName:"li"},"WeatherService"),", which is the standard usage of Midway dependency injection. You can see ",(0,a.kt)("a",{parentName:"li",href:"./service"},"here")," for more information."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"The return value type of the method is also modified synchronously here."))))),(0,a.kt)("p",null,"At this point, we can request ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:7001/weather?cityId=101010100")," to view the returned results."),(0,a.kt)("p",null,"Your first Midway interface has been developed. You can call it directly in the front-end code. Next, we will use this interface to complete a server-side rendered page."),(0,a.kt)("h2",{id:"template-rendering"},"Template rendering"),(0,a.kt)("p",null,"From here on, we need to use some Midway's expansion capabilities."),(0,a.kt)("p",null,'The expansion package corresponding to Midway is called "component" and is also a standard npm package.'),(0,a.kt)("p",null,"We need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/view-nunjucks")," component here."),(0,a.kt)("p",null,"You can install it using the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/view-nunjucks --save\n")),(0,a.kt)("p",null,"After the installation is complete, we enable the components in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nimport * as view from '@midwayjs/view-nunjucks';\n\n@Configuration({\n  imports: [\n    koa\n    // ...\n    view\n  ],\n  importConfigs: [join(__dirname, './config')]\n})\nexport class ContainerLifeCycle {\n  // ...\n}\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"configuration")," file is the life cycle entry file of Midway, which plays the role of component switch, configuration loading and life cycle management."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"imports")," use the method to import (open) components"))))),(0,a.kt)("p",null,"Configure components in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts")," and specify them as ",(0,a.kt)("inlineCode",{parentName:"p"},"nunjucks")," templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MidwayConfig } from '@midwayjs/core';\n\nexport default {\n  // ...\n  view: {\n    defaultViewEngine: 'nunjucks',\n  },\n} as MidwayConfig;\n\n")),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"view/info.html")," template to the root directory (not in src). The content is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<! DOCTYPE html>\n<html>\n  <head>\n    <title> weather forecast </title>\n        <style>\n      .weather_bg {\n        background-color: #0d68bc;\n        height: 150px;\n        color: #fff;\n        font-size: 12px;\n        line-height: 1em;\n        text-align: center;\n        padding: 10px;\n      }\n\n      .weather_bg label {\n        line-height: 1.5em;\n        text-align: center;\n        text-shadow: 1px 1px 1px #555;\n        background: #afdb00;\n        width: 100px;\n        display: inline-block;\n        margin-left: 10px;\n      }\n\n      .weather_bg .temp {\n        font-size: 32px;\n        margin-top: 5px;\n        padding-left: 14px;\n      }\n      .weather_bg sup {\n        font-size: 0.5em;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="weather_bg">\n      <div>\n        <p>\n          {{city}}({{WD}}{{WS}})\n        </p>\n        <p class="temp">{{temp}}<sup>\u2103</sup></p>\n        <p>\n          Air pressure <label >{{ AP }}</label>\n        </p>\n        <p>\n          Humidity <label >{{ SD }}</label>\n        </p>\n      </div>\n    </div>\n  </body>\n</html>\n\n')),(0,a.kt)("p",null,"At the same time, we adjust the Controller code and change the returned JSON into template rendering."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/weather.controller.ts\nimport { Controller, Get, Inject, Query } from '@midwayjs/core';\nimport { WeatherService } from '../service/weather.service';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class WeatherController {\n\n  @Inject()\n  weatherService: WeatherService;\n\n  @Inject()\n  ctx: Context;\n\n  @Get('/weather')\n  async getWeatherInfo(@Query('cityId') cityId: string): Promise<void> {\n    const result = await this.weatherService.getWeather(cityId);\n    if (result) {\n      await this.ctx.render('info', result.weatherinfo);\n    }\n  }\n}\n")),(0,a.kt)("p",null,"In this step, we visit ",(0,a.kt)("inlineCode",{parentName:"p"},"http:// 127.0.0.1:7001/weather?cityId = 101010100")," The rendered template content can already be seen."),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Don't forget, we still have some exception logic to handle."),(0,a.kt)("p",null,"Generally speaking, each external call needs to be caught by exception, and the exception will be turned into an error of our own business, so as to have a better experience."),(0,a.kt)("p",null,"To do this, we need to define a business error of our own, creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/error/weather.error.ts")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/error/weather.error.ts\nimport { MidwayError } from '@midwayjs/core';\n\nexport class WeatherEmptyDataError extends MidwayError {\n  constructor(err?: Error) {\n    super('weather data is empty', {\n      cause: err\n    });\n    if (err?.stack) {\n      this.stack = err.stack;\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Then, we adjust the Service code to throw an exception."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/service/weather.service.ts\nimport { Provide, makeHttpRequest } from '@midwayjs/core';\nimport { WeatherInfo } from '../interface';\nimport { WeatherEmptyDataError } from '../error/weather.error';\n\n@Provide()\nexport class WeatherService {\n  async getWeather(cityId: string): Promise<WeatherInfo> {\n    if (! cityId) {\n      throw new WeatherEmptyDataError();\n    }\n\n    try {\n      const result = await makeHttpRequest<WeatherInfo>('http://www.weather.com.cn/data/sk/${cityId}.html', {\n        dataType: 'json',\n      });\n      if (result.status === 200) {\n        return result.data as WeatherInfo;\n      }\n    } catch (error) {\n      throw new WeatherEmptyDataError(error);\n    }\n  }\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Error capture of http call request, package the error and return a business error of our system"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"If necessary, we can define more errors, assign wrong Code, etc."))))),(0,a.kt)("p",null,"At this stage, we also need to handle exceptions for business. For example, when multiple locations throw ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherEmptyDataError"),", we need to return them in a unified format."),(0,a.kt)("p",null,"The error handler can complete this function. We need to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"src/filter/weather.filter.ts")," file with the following contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"//src/filter/weather.filter.ts\nimport { Catch } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\nimport { WeatherEmptyDataError } from '../error/weather.error';\n\n@Catch(WeatherEmptyDataError)\nexport class WeatherErrorFilter {\n  async catch(err: WeatherEmptyDataError, ctx: Context) {\n    ctx.logger.error(err);\n    return '<html><body><h1>weather data is empty</h1></body></html>';\n  }\n}\n\n")),(0,a.kt)("p",null,"It is then applied to the current framework."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { WeatherErrorFilter } from './filter/weather.filter';\n// ...\n\n@Configuration({\n  // ...\n})\nexport class ContainerLifeCycle {\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // ...\n\n    // add filter\n    this.app.useFilter([WeatherErrorFilter]);\n  }\n}\n")),(0,a.kt)("p",null,"In this way, when ",(0,a.kt)("inlineCode",{parentName:"p"},"WeatherEmptyDataError")," error is obtained in each request, the same return value will be used to return to the browser, and the original error message will be recorded in the log."),(0,a.kt)("p",null,"For more information about exception handling, see ",(0,a.kt)("a",{parentName:"p",href:"./error_filter"},"Document"),"."),(0,a.kt)("h2",{id:"unit-test"},"Unit test"),(0,a.kt)("p",null,"By default, Midway uses jest as the basic test framework. Generally, our test files are placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," directory of the root directory, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.test.ts")," suffix."),(0,a.kt)("p",null,"For example, we will test the written ",(0,a.kt)("inlineCode",{parentName:"p"},"/weather")," interface."),(0,a.kt)("p",null,"We need to test its success and failure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/koa';\n\ndescribe('test/controller/weather.test.ts', () => {\n\n  let app: Application;\n  beforeAll(async () => {\n    // create app\n    app = await createApp<Framework>();\n  });\n\n  afterAll(async () => {\n    // close app\n    await close(app);\n  });\n\n  it('should test /weather with success request', async () => {\n    // make request\n    const result = await createHttpRequest(app).get('/weather').query({ cityId: 101010100 });\n\n    expect(result.status).toBe(200);\n    Expect (result.text).toMatch(/Beijing/);\n  });\n\n  it('should test /weather with fail request', async () => {\n    const result = await createHttpRequest(app).get('/weather');\n\n    expect(result.status).toBe(200);\n    expect(result.text).toMatch(/weather data is empty/);\n  });\n});\n\n")),(0,a.kt)("p",null,"Perform tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run test\n")),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"./testing"},"Test"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"During jest test, use a single file as a unit and use ",(0,a.kt)("inlineCode",{parentName:"li"},"beforeAll")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"afterAll")," to control the start and stop of app"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"createHttpRequest")," to create a test request"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Use expect to assert whether the returned results meet expectations."))))),(0,a.kt)("h2",{id:"continue-to-learn"},"Continue to learn"),(0,a.kt)("p",null,"Congratulations, you have some preliminary understanding of Midway. Let's review it briefly."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"We use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm init midway")," to create an example."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"@Controller")," decorator to define routing and controller classes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"@Query")," to obtain the request parameters."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:4},(0,a.kt)("li",{parentName:"ol"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"@Provide")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@Inject")," to inject service classes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:5},(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"imports")," to enable components and configure nunjucks templates"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:6},(0,a.kt)("li",{parentName:"ol"},"Customize the error, use the error filter to intercept the error and return the custom data"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:7},(0,a.kt)("li",{parentName:"ol"},"Use jest to create tests and add successful and failed test cases")))),(0,a.kt)("p",null,"The above is only a small part of Midway. As the use deepens, more capabilities will be used."),(0,a.kt)("p",null,"You can start by ",(0,a.kt)("a",{parentName:"p",href:"./quickstart"},"creating")," a solution for different scenarios of the Midway. You can also go to the ",(0,a.kt)("a",{parentName:"p",href:"./controller"},"Routing and Controller")," section and add some request methods. You can also learn about ",(0,a.kt)("a",{parentName:"p",href:"./middleware"},"Web middleware")," or ",(0,a.kt)("a",{parentName:"p",href:"./container"},"dependency injection"),"."))}d.isMDXComponent=!0}}]);
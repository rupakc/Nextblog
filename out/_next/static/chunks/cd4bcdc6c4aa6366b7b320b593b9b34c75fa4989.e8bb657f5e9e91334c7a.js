(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,a=e.hasQuery,i=void 0!==a&&a;return n||r&&i}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=o?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var s=0,c=d.length;s<c;s++){var l=d[s];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=r.props[l],p=o[l]||new Set;p.has(u)?a=!1:(p.add(u),o[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),o=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:f,headManager:o,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||i()}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),p=function(e){i(n,e);var t=l(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(o(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=p},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},hBto:function(e,t,n){"use strict";var o=n("nKUr");t.a=function(){return Object(o.jsx)("div",{style:{overflow:"hidden",height:"10rem"},children:Object(o.jsxs)("nav",{className:"demo",children:[Object(o.jsx)("a",{href:"/",className:"brand",children:Object(o.jsx)("span",{children:"About Me"})}),Object(o.jsx)("input",{id:"bmenub",type:"checkbox",className:"show"}),Object(o.jsx)("label",{htmlFor:"bmenub",className:"burger pseudo button",children:" Menu "}),Object(o.jsxs)("div",{class:"menu",children:[Object(o.jsx)("a",{href:"/sections/projects",className:"pseudo button icon-g",children:" Projects "}),Object(o.jsx)("a",{href:"/sections/skills",className:"pseudo button",children:"Skills"}),Object(o.jsx)("a",{href:"/sections/research",className:"pseudo button",children:"Research"})]})]})})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},tC8R:function(e,t,n){e.exports={container:"container_container__2oEsn"}},vUxr:function(e,t,n){"use strict";var o=n("nKUr"),r=n("tC8R"),a=n.n(r);t.a=function(e){var t=e.children;return Object(o.jsx)("div",{className:a.a.container,children:t})}},wJ4g:function(e,t){e.exports={projectListJson:[{title:"Arcadia",description:"The application is built on <b> React (front-end) </b> and <b> Node (back-end) </b>. It has made use of the <b> NES style CSS </b> for the UI styling. It fetches data from a multitude of data sources like OMDB API, Star Wars API, Harry Potter API, Final Space and Breaking Bad.",toolList:["ReactJS","NodeJS","NesCSS"],link:"https://git.corp.adobe.com/rupachak/Arcadia"},{title:"Quotodian",description:"The application fetches random quotes on a wide variety of topics like Programming, Design, Philosophy etc. Along with popular personalities like Taylor Swift. The backend has been developed in <b> Golang </b> and the front-end uses <b> Aurelia JS </b> framework, along with <b> PaperCSS </b>.",toolList:["AureliaJS","Golang","PaperCSS"],link:"https://git.corp.adobe.com/rupachak/Quotodian"},{title:"Positron",description:"Built Using <b> Flask </b> , <b> Jinja 2 </b> and <b> Boostrap </b> with <b> JQuery </b> sprinkled over. It fetches news data in real-time and carries out sentiment analysis on the fetched data online(i.e. after the query has been made by the user). Data sources include <b> NewsAPI </b> and <b> Current News API </b>",toolList:["Flask","Jinja-2","Bootstrap"],link:"https://git.corp.adobe.com/rupachak/Positron"},{title:"Sherlock",description:"An Application to detect Personally Identifiable Information in any given text. The user can upload a text file to analyze or copy-paste the given text in a text-box. It will detect the following PIIs - email, phone number, system file paths, urls, credit card numbers etc.",toolList:["Streamlit","Regex","Python"],link:"https://git.corp.adobe.com/rupachak/Sherlock"},{title:"Onyx",description:"An application based on the <b> lambda-architecture.</b> Works with <b> multi-modal data </b> and a multitude of <b> Online APIs. </b> Its salient features include - summarizing text, videos, generating image descriptions and lyrics of songs among others. Low-Latency and high speed are its hallmarks",toolList:["Flask","Bootstrap","Jquery"],link:"https://git.corp.adobe.com/rupachak/Onyx"},{title:"Piccolo",description:"Application built using <b> Meteor JS </b> and <b> Semantic-UI </b> for the frontend analyzes the stock markets from the perspective of social media. Analyzes tweets, stocktwits related to financial markets in near real-time. It also charts the prices of various stocks listed in the NASDAQ stock exchange",toolList:["MeteorJS","Semantic-UI"],link:"https://git.corp.adobe.com/rupachak/Piccolo"},{title:"Dragoon",description:"Brining the fun back to Machine Learning. It analyzes data from a multitude of sources like sports, food, weather, tv show and movies to games.Built using <b> NodeJS </b> (backend) , <b> AngularJS </b> (frontend) with <b> Material-UI </b> framework for the frontend. Performs all types of ML like - <b> classification, regression </b>",toolList:["NodeJS","Material","AngularJS"],link:"https://git.corp.adobe.com/rupachak/Dragoon"},{title:"OnTrack",description:"Utility applcation which focuses on predicting the time delay for <b> Indian Railways </b>. Users select a train number alongwith source and destination stations for a given journey date. It then predicts the likely delay which the train might have. One can also see the train routes superimposed on a map (i.e. Google Maps)",toolList:["Django","Bootstrap","React"],link:"https://git.corp.adobe.com/rupachak/OnTrack"},{title:"Kodachrome",description:"Predicts user engagement for <b> Behance </b>. For a given user profile it predicts the likely likes, comments and followers which the profile will receive over the coming month. Apart from this it also has the ability to auto-magically suggest image tags to users when they upload their creative assets on the platform",toolList:["NodeJS","UI-Kit","VueJS"],link:"https://git.corp.adobe.com/rupachak/Kodachrome"},{title:"Storyweaver",description:"A creative endeavor which aims to generate and suggest images for a given storyline. Input is in the form of a free-text description of the scene which the user has in mind. The output will be in form of images/parts of images which closely match the user intention specified in the text. <b> Deep-Learning </b> at its core",toolList:["Flask","Bootstrap","Jquery"],link:"https://git.corp.adobe.com/rupachak/Storyweaver"},{title:"Cryptowolf",description:"Platform Independent application built using the <b> Electron JS </b> framework. Gathers information for regarding everything related to crypto like crypto news, cryto prices and other essential information about the crypto coin exchanges. This data is fetched in near real-time uses specific APIs for crypto channels.",toolList:["ElectronJS","BulmaCSS"],link:"https://git.corp.adobe.com/rupachak/Cryptowolf"},{title:"ProcessPredict",description:"Monitors all the running processes on a given server in terms of CPU and Memory Usage. Also in real-time it tries to predict the resource consumption in the upcoming time quantum. Uses web socketks to update the UI in near real time. Can be for pre-empting or allocating resources to a given process.",toolList:["Flask","Bootstrap","JQuery"],link:"https://git.corp.adobe.com/rupachak/ProcessPredict"},{title:"Vision App",description:"<b> Android </b> app for detecting objects in a given scene and describing the detected scene to the user (using voice API). Uses the camera of the phone to detect objects in real-time. It also suggests the user to adjust his mobile in such a way so that the detected object is inside the frame",toolList:["Android","Tensorflow Mobile"],link:"https://git.corp.adobe.com/rupachak/Android-Vision-App"},{title:"Sense",description:"Leverages Social Media to make sense of performance of <b> Adobe products </b>. It carries out fine-grained sentiment analysis, generates a customer satisfaction index and determines the type of issues being faced by the user. Fetches data from - <b> Twitter, Reddit, Facebook </b> etc.",toolList:["Java","AngularJS","Boostrap"],link:"https://git.corp.adobe.com/rupachak/Sense"},{title:"Curious",description:"An application to find likely colloborators and points for contact for a given project. Given a project name, it searches the <b> AD groups </b> to find likely matches. Then it generates a connection graph for these groups and then runs a <b> Pagerank </b> algorithm on top of it.",toolList:["Java","Flask","Boostrap"],link:"https://git.corp.adobe.com/rupachak/LDAPSearch"},{title:"Kaleidoscope",description:"An application built with a mish-mash of different APIs. Everything is done at the client end using <b> axios </b>. Mechanism to bypass <b> CORS </b> has also been incorporated. Svelte components and routers are used to build this single page application which is truly serverless in nature",toolList:["SvelteJS","MaterializeCSS"],link:"https://git.corp.adobe.com/rupachak/Kaleidoscope"}],imageList:[{imageSource:"/skill/keras.png",imageText:"Keras API"},{imageSource:"/skill/pytorch.png",imageText:"Pytorch"},{imageSource:"/skill/tensorflow.png",imageText:"Tensorflow"},{imageSource:"/skill/pandas.png",imageText:"Pandas API"},{imageSource:"/skill/scikit-learn.png",imageText:"Scikit-Learn API"},{imageSource:"/skill/seaborn.jpeg",imageText:"Seaborn"},{imageSource:"/skill/matplotlib.png",imageText:"Matplotlib"}],frontendImageList:[{imageSource:"/skill/frontend/AngularJS.png",imageText:"Angular JS"},{imageSource:"/skill/frontend/aurelia.jpeg",imageText:"Aurelia JS"},{imageSource:"/skill/frontend/electron.jpeg",imageText:"Electron JS"},{imageSource:"/skill/frontend/meteorjs.png",imageText:"Meteor JS"},{imageSource:"/skill/frontend/nextjs.png",imageText:"Next JS"},{imageSource:"/skill/frontend/reactjs.jpeg",imageText:"React JS"},{imageSource:"/skill/frontend/vuejs.png",imageText:"Vue JS"},{imageSource:"/skill/frontend/svelte.png",imageText:"Svelte JS"}],backendImageList:[{imageSource:"/skill/backend/c.png",imageText:"C Programming"},{imageSource:"/skill/backend/cpp.png",imageText:"C++ Programming"},{imageSource:"/skill/backend/java.png",imageText:"Java"},{imageSource:"/skill/backend/nodejs.png",imageText:"Node JS"},{imageSource:"/skill/backend/python.jpeg",imageText:"Python"},{imageSource:"/skill/backend/golang.png",imageText:"Golang"},{imageSource:"/skill/backend/rust.png",imageText:"Rust"}],mobileImageList:[{imageSource:"/skill/mobile/android.png",imageText:"Android"},{imageSource:"/skill/mobile/flutter.png",imageText:"Flutter"},{imageSource:"/skill/mobile/reactnative.png",imageText:"React Native"}]}}}]);
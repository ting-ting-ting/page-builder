(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7314:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(639)}])},3027:function(e,t,r){"use strict";r.d(t,{y:function(){return u}});var l=r(2784),n=r(6978);let u=()=>{let e=(0,l.useContext)(n.L);if(!e)throw Error("Please provide Template");return e}},639:function(e,t,r){"use strict";r.r(t);var l=r(2322),n=r(5237),u=r.n(n),a=r(3027);let o=u()(()=>Promise.all([r.e(615),r.e(462),r.e(534)]).then(r.bind(r,3534)),{loadableGenerated:{webpack:()=>[3534]},ssr:!1}),i=u()(()=>Promise.all([r.e(615),r.e(462),r.e(763),r.e(80)]).then(r.bind(r,3080)),{loadableGenerated:{webpack:()=>[3080]},ssr:!1});t.default=function(){let{templateUuids:e}=(0,a.y)();return(0,l.jsx)("div",{children:e.length>0?(0,l.jsx)(o,{}):(0,l.jsx)(i,{})})}},6164:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return a},default:function(){return o}});let l=r(3219),n=(r(2784),l._(r(6890)));function u(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let r=n.default,l={loading:e=>{let{error:t,isLoading:r,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let o=l.loader,i=()=>null!=o?o().then(u):Promise.resolve(u(()=>null));return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?r({...l,loader:i}):(delete l.webpack,delete l.modules,a(r,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return u}});let l=r(3219),n=l._(r(2784)),u=n.default.createContext(null)},6890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let l=r(3219),n=l._(r(2784)),u=r(3254),a=[],o=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function a(){if(!l){let t=new d(e,r);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return a()})}function s(e,t){!function(){a();let e=n.default.useContext(u.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:l.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return s.preload=()=>a(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(s,e)}function f(e,t){let r=[];for(;e.length;){let l=e.pop();r.push(l(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(a).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(i=!0,t());f(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let _=c},5237:function(e,t,r){e.exports=r(6164)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7314)}),_N_E=e.O()}]);
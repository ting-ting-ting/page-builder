(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{3027:function(e,t,a){"use strict";a.d(t,{y:function(){return l}});var i=a(2784),r=a(6978);let l=()=>{let e=(0,i.useContext)(r.L);if(!e)throw Error("Please provide Template");return e}},4222:function(e,t,a){"use strict";a.r(t);var i=a(2322),r=a(3027),l=a(789);t.default=function(){let{templates:e}=(0,r.y)();return console.log("templates",e),(0,i.jsx)("div",{children:e.map((e,t)=>{let a=l._[e.id].Template;return(0,i.jsx)(a,{...e.props},t)})})}},789:function(e,t,a){"use strict";a.d(t,{_:function(){return q},l:function(){return P}});var i,r,l=a(2322),o=a(2784),s=a(3260),n=a(3955);let u=e=>{let{className:t,clearable:a,control:i,defaultValue:r,disabled:u,fullWidth:m=!0,label:c,maxLength:d,placeholder:p="請輸入",register:x,registerName:h,required:_,style:v}=e,{control:A,setValue:g,register:j}=(0,n.Gc)(),f=(0,n.qo)({control:i||A,name:h,defaultValue:r})||"",{errors:q}=(0,n.cl)({control:i||A});!function(e,t,a){let i=(0,o.useRef)(),{setValue:r,resetField:l}=(0,n.Gc)();(0,o.useEffect)(()=>{void 0!==t&&void 0===i.current&&(i.current=t,l(e,{keepDirty:(null==a?void 0:a.keepDirty)||!1,keepError:(null==a?void 0:a.keepError)||!1,keepTouched:(null==a?void 0:a.keepTouched)||!1,defaultValue:t}),r(e,t,{shouldDirty:!1,shouldTouch:!1,shouldValidate:!1}))},[t])}(h,r);let P=(0,o.useMemo)(()=>(x||j)(h,{required:_,disabled:u,maxLength:d}),[x,j,h,_,u,d]);return(0,l.jsxs)("div",{children:[c&&(0,l.jsx)("p",{children:c}),(0,l.jsx)(s.Z,{fullWidth:!0,clearable:a,maxLength:d,textareaProps:{id:h,name:h,onBlur:P.onBlur},...P,onChange:P.onChange,placeholder:p,value:f})]})},m=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{label:"段落一",registerName:"p1",defaultValue:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,l.jsx)(u,{label:"段落二",registerName:"p2",defaultValue:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,l.jsx)(u,{label:"段落三",registerName:"p3",defaultValue:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."})]});var c=a(6402),d=a.n(c);let p=e=>{let{p1:t,p2:a,p3:i}=e;return(0,l.jsx)("div",{className:d().root,children:(0,l.jsxs)("div",{className:d().container,children:[(0,l.jsx)("div",{className:d().paragraphWrapper,children:(0,l.jsx)("p",{className:d().text,children:t})}),(0,l.jsx)("div",{className:d().paragraphWrapper,children:(0,l.jsx)("p",{className:d().text,children:a})}),(0,l.jsx)("div",{className:d().paragraphWrapper,children:(0,l.jsx)("p",{className:d().text,children:i})})]})})};(i=r||(r={})).PARAGRAPH_1="PARAGRAPH_1",i.PARAGRAPH_2="PARAGRAPH_2";let x={[r.PARAGRAPH_1]:{id:r.PARAGRAPH_1,Editor:m,Template:p}},h=()=>(0,l.jsxs)("div",{children:[(0,l.jsx)(u,{label:"段落一",registerName:"p1",defaultValue:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,l.jsx)(u,{label:"段落二",registerName:"p2",defaultValue:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."})]});var _=a(2893),v=a.n(_);let A=e=>{let{p1:t,p2:a}=e;return(0,l.jsx)("div",{className:v().root,children:(0,l.jsxs)("div",{className:v().container,children:[(0,l.jsx)("div",{className:v().paragraphWrapper,children:(0,l.jsx)("p",{className:v().text,children:t})}),(0,l.jsx)("div",{className:v().paragraphWrapper,children:(0,l.jsx)("p",{className:v().text,children:a})})]})})},g={[r.PARAGRAPH_2]:{id:r.PARAGRAPH_2,Editor:h,Template:A}},j={...x,...g},f=[r.PARAGRAPH_1,r.PARAGRAPH_2],q={...j},P=[...f]},6402:function(e){e.exports={root:"template_root__o56Ap",container:"template_container__CYbqc",paragraphWrapper:"template_paragraphWrapper___WeDK",text:"template_text__IAhqb"}},2893:function(e){e.exports={root:"template_root__sR_D5",container:"template_container__xRVpL",paragraphWrapper:"template_paragraphWrapper__UAw08",text:"template_text__YZiwP"}}}]);
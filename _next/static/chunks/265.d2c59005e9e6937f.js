(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265,3],{3080:function(e,a,t){"use strict";t.r(a);var l=t(2322),i=t(2784),r=t(18),d=t(5779),n=t(5003),s=t(8234),o=t.n(s);let c=()=>{let[e,a]=(0,i.useState)(!1),t=(0,i.useCallback)(()=>{a(!1)},[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:o().root,children:(0,l.jsx)("div",{className:o().area,onClick:()=>{a(e=>!e)},children:(0,l.jsx)(r.Z,{icon:d.p,className:o().icon})})}),(0,l.jsx)(n.default,{open:e,onClose:t})]})};a.default=c},5003:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return C}});var l=t(2322),i=t(2784),r=t(823),d=t(856),n=t(6992),s=t(6277),o=t(2288),c=t(3027),p=t(5070),_=t(18),m=t(556),u=t(2309),v=t(4699),h=t(3955);let x=e=>{let{methods:a,children:t,className:i,onSubmit:r=()=>{},onInvalid:d=()=>{}}=e;return(0,l.jsx)(h.RV,{...a,children:(0,l.jsx)("form",{onSubmit:a.handleSubmit(r,d),className:i,children:t})})};var f=t(8398),j=t.n(f);let w=e=>{let{targetCategoryId:a,targetIndex:t,setTargetIndex:r,onClose:d,editMode:n,uuid:f}=e,{push:w,pushUnderUuid:M,edit:B,templatesDataWithUuid:C}=(0,c.y)(),E=(0,i.useMemo)(()=>o._2[o.lq[a][t]],[a,t]),T=(0,i.useMemo)(()=>n&&f&&C[f].id===E.id?C[f].props:E.defaultValues,[C,n,f,E]),N=(0,h.cI)({defaultValues:T}),b=N.watch(),g=(0,i.useCallback)(()=>{0!==t&&r(e=>e-1)},[t,r]),k=(0,i.useCallback)(()=>{t!==o.lq[a].length-1&&r(e=>e+1)},[a,t,r]);return(0,l.jsxs)(x,{methods:N,className:j().form,onSubmit:e=>{f?n?B({id:E.id,uuid:f,props:b}):M({id:E.id,uuid:f,props:e}):w({id:E.id,props:e}),d()},children:[(0,l.jsxs)("div",{className:j().previewWrapper,children:[(0,l.jsx)(p.hU,{type:"button",size:"large",onClick:g,className:(0,s.Z)(j().arrowBtn,j().leftBtn),disabled:0===t,children:(0,l.jsx)(_.Z,{icon:u.w})}),(0,l.jsx)("div",{className:j().preview,children:E.Template({...b})}),(0,l.jsx)(p.hU,{type:"button",size:"large",onClick:k,className:(0,s.Z)(j().arrowBtn,j().rightBtn),disabled:t===o.lq[a].length-1,children:(0,l.jsx)(_.Z,{icon:v.X})})]}),(0,l.jsx)("div",{className:j().fieldsContainer,children:(0,l.jsx)("div",{className:j().fieldsWrapper,children:E.Editor()})}),(0,l.jsxs)("div",{className:j().modalFooter,children:[(0,l.jsx)(m.Z,{type:"button",variant:"contained",size:"large",onClick:d,children:"關閉"}),(0,l.jsx)(m.Z,{type:"submit",variant:"contained",size:"large",children:"確定"})]})]})};var M=(0,i.memo)(w);let B=e=>{var a;let{open:t,onClose:p,editMode:_,uuid:m}=e,{templatesDataWithUuid:u}=(0,c.y)(),[v,h]=(0,i.useState)(o.Y2[0].id),[x,f]=(0,i.useState)(0),w=(0,i.useMemo)(()=>null!==(a=o.Y2.find(e=>e.id===v))&&void 0!==a?a:null,[v]),B=(0,i.useMemo)(()=>o.lq[v],[v]),C=(0,i.useCallback)(e=>{h(e),f(0)},[]),E=(0,i.useMemo)(()=>_&&m?o._2[u[m].id]:null,[_,m,u]);return(0,i.useEffect)(()=>{if(E&&t){let e=E.category,a=o.lq[e].findIndex(e=>e===E.id);h(e),f(a)}},[E,t]),(0,i.useEffect)(()=>{t||(h(o.Y2[0].id),f(0))},[t]),(0,l.jsxs)(r.Z,{open:t,onClose:p,className:j().root,direction:"left",children:[(0,l.jsxs)("div",{className:j().modalHeader,children:[(0,l.jsx)("span",{className:j().modalTitle,children:"選擇模板"}),(0,l.jsx)(d.Z,{onChange:e=>{C(e.id)},value:w,children:null===o.Y2||void 0===o.Y2?void 0:o.Y2.map(e=>(0,l.jsx)(n.Z,{value:e.id,children:e.name},e.id))})]}),(0,l.jsx)("div",{className:j().previewBtnContainer,children:(0,l.jsx)("div",{className:j().previewBtnWrapper,children:B.map((e,a)=>{let t=o._2[e].Preview;return(0,l.jsx)("div",{className:(0,s.Z)(j().previewBtn,{[j().active]:a===x}),onClick:()=>{f(a)},children:(0,l.jsx)(t,{})},e)})})}),(0,l.jsx)(M,{targetCategoryId:v,targetIndex:x,setTargetIndex:f,onClose:p,uuid:m,editMode:_},"".concat(v,"-").concat(x,"-").concat(null!=m?m:"create"))]})};var C=B},8234:function(e){e.exports={root:"AddArea_root__bxdO5",area:"AddArea_area__BMoXI",icon:"AddArea_icon__DPGfa"}},8398:function(e){e.exports={root:"TemplateEditModal_root___R_8K",modalHeader:"TemplateEditModal_modalHeader__carOO",modalTitle:"TemplateEditModal_modalTitle__L3oBO",previewBtnContainer:"TemplateEditModal_previewBtnContainer__ijioB",previewBtnWrapper:"TemplateEditModal_previewBtnWrapper__Tz6uQ",previewBtn:"TemplateEditModal_previewBtn__ltEPs",active:"TemplateEditModal_active__dwqGn",form:"TemplateEditModal_form__MVDyd",previewWrapper:"TemplateEditModal_previewWrapper__UPsFt",preview:"TemplateEditModal_preview__FVUPr",arrowBtn:"TemplateEditModal_arrowBtn__og4Lb",leftBtn:"TemplateEditModal_leftBtn__NduzA",rightBtn:"TemplateEditModal_rightBtn__CDFO3",fieldsContainer:"TemplateEditModal_fieldsContainer__W2k4d",fieldsWrapper:"TemplateEditModal_fieldsWrapper__GBSA_",modalFooter:"TemplateEditModal_modalFooter__F_7rl"}}}]);
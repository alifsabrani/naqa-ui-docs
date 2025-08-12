import{r as i,j as t}from"./iframe-DEDSHorF.js";import{c as C}from"./index-Cxy1aMCg.js";import{B as d}from"./Button-CeUszSiP.js";import{I as _}from"./Image-y3TtJahl.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-BgsnhgRS.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,o,a)=>a?a.toUpperCase():o.toLowerCase()),p=e=>{const n=v(e);return n.charAt(0).toUpperCase()+n.slice(1)},h=(...e)=>e.filter((n,o,a)=>!!n&&n.trim()!==""&&a.indexOf(n)===o).join(" ").trim(),k=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:r="",children:c,iconNode:l,...u},g)=>i.createElement("svg",{ref:g,...j,width:n,height:n,stroke:e,strokeWidth:a?Number(o)*24/Number(n):o,className:h("lucide",r),...!c&&!k(u)&&{"aria-hidden":"true"},...u},[...l.map(([y,x])=>i.createElement(y,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,n)=>{const o=i.forwardRef(({className:a,...r},c)=>i.createElement(w,{ref:c,iconNode:n,className:h(`lucide-${f(p(e))}`,`lucide-${e}`,a),...r}));return o.displayName=p(e),o};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],B=m("circle-chevron-left",N);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],I=m("circle-chevron-right",b);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],T=m("circle-x",A),$="_carousel_1kys8_5",L="_background_1kys8_23",R="_contentContainer_1kys8_37",q="_content_1kys8_37",z="_closeButton_1kys8_71",E="_nextButton_1kys8_93",P="_prevButton_1kys8_105",O="_imageContainer_1kys8_143",S="_header_1kys8_157",U="_imageCount_1kys8_175",s={carousel:$,background:L,contentContainer:R,content:q,closeButton:z,nextButton:E,prevButton:P,imageContainer:O,header:S,imageCount:U},W=({images:e,selectedIndex:n=0,CustomImageComponent:o,onClose:a})=>{const[r,c]=i.useState(n||0),l=o?{CustomImageComponent:o}:{};return t.jsxs("div",{className:C(s.carousel),children:[t.jsx("div",{className:s.closeButton,children:t.jsx(d,{onClick:a,color:"light",variant:"transparent",size:"l",icon:!0,children:t.jsx(T,{})})}),t.jsx("div",{className:s.header,children:t.jsxs("div",{className:s.imageCount,"aria-label":`Image ${r+1} of ${e.length}`,children:["Image",t.jsx("span",{className:s.currentImage,children:r+1}),t.jsx("span",{children:"of"}),t.jsx("span",{className:s.totalImage,children:e.length})]})}),t.jsx("div",{className:s.background,onClick:a}),t.jsx("div",{className:s.contentContainer,children:t.jsxs("div",{className:s.content,children:[t.jsx("div",{className:s.prevButton,children:t.jsx(d,{onClick:()=>c(r-1),color:"light",variant:"transparent",size:"l",icon:!0,disabled:r===0,children:t.jsx(B,{})})}),t.jsx("div",{className:s.imageContainer,children:t.jsx(_,{src:e[r],alt:`Preview of ${r+1}`,fit:"contain",...l})}),t.jsx("div",{className:s.nextButton,children:t.jsx(d,{onClick:()=>c(r+1),color:"light",variant:"transparent",size:"l",icon:!0,disabled:r===e.length-1,children:t.jsx(I,{})})})]})})]})};W.__docgenInfo={description:"Carousel component to display a gallery of images with navigation and close support.\r\n@example\r\n```tsx\r\n<Carousel images={['https://placehold.co/600x400', 'https://placehold.co/1000x600']} onClose={() => {}} />\r\n```",methods:[],displayName:"Carousel",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:"Array of image URLs to be displayed in the carousel"},selectedIndex:{required:!1,tsType:{name:"number"},description:"Optional index to initially display",defaultValue:{value:"0",computed:!1}},CustomImageComponent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<any>",elements:[{name:"any"}]},description:"Optional custom image component to render instead of the default `<img>` tag.\r\nThis is useful for frameworks like Next.js that provide optimized image components.\r\nThe custom component will receive `src`, `alt`, `onLoad`, and `className` props."},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{W as Carousel,W as default};

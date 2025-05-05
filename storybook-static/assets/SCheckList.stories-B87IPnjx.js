import{j as s}from"./jsx-runtime-DiklIkkE.js";import{r as l,a as ze,R as Ee}from"./index-DRjF_FHU.js";import{u as W,b as Ve,c as U,a as Ae}from"./index-CCQuHcL9.js";import"./index-Bx0Ph3cE.js";function De(e,t=[]){let n=[];function i(o,c){const r=l.createContext(c),u=n.length;n=[...n,c];const p=v=>{var b;const{scope:m,children:f,...C}=v,g=((b=m==null?void 0:m[e])==null?void 0:b[u])||r,k=l.useMemo(()=>C,Object.values(C));return s.jsx(g.Provider,{value:k,children:f})};p.displayName=o+"Provider";function h(v,m){var g;const f=((g=m==null?void 0:m[e])==null?void 0:g[u])||r,C=l.useContext(f);if(C)return C;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${o}\``)}return[p,h]}const a=()=>{const o=n.map(c=>l.createContext(c));return function(r){const u=(r==null?void 0:r[e])||o;return l.useMemo(()=>({[`__scope${e}`]:{...r,[e]:u}}),[r,u])}};return a.scopeName=e,[i,Pe(a,...t)]}function Pe(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const i=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const c=i.reduce((r,{useScope:u,scopeName:p})=>{const v=u(o)[`__scope${p}`];return{...r,...v}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}function F(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}var _=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{},Re=ze[" useInsertionEffect ".trim().toString()]||_;function Me({prop:e,defaultProp:t,onChange:n=()=>{},caller:i}){const[a,o,c]=_e({defaultProp:t,onChange:n}),r=e!==void 0,u=r?e:a;{const h=l.useRef(e!==void 0);l.useEffect(()=>{const v=h.current;v!==r&&console.warn(`${i} is changing from ${v?"controlled":"uncontrolled"} to ${r?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=r},[r,i])}const p=l.useCallback(h=>{var v;if(r){const m=Te(h)?h(e):h;m!==e&&((v=c.current)==null||v.call(c,m))}else o(h)},[r,e,o,c]);return[u,p]}function _e({defaultProp:e,onChange:t}){const[n,i]=l.useState(e),a=l.useRef(n),o=l.useRef(t);return Re(()=>{o.current=t},[t]),l.useEffect(()=>{var c;a.current!==n&&((c=o.current)==null||c.call(o,n),a.current=n)},[n,a]),[n,i,o]}function Te(e){return typeof e=="function"}function Ue(e){const t=l.useRef({value:e,previous:e});return l.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function We(e){const[t,n]=l.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const i=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const o=a[0];let c,r;if("borderBoxSize"in o){const u=o.borderBoxSize,p=Array.isArray(u)?u[0]:u;c=p.inlineSize,r=p.blockSize}else c=e.offsetWidth,r=e.offsetHeight;n({width:c,height:r})});return i.observe(e,{box:"border-box"}),()=>i.unobserve(e)}else n(void 0)},[e]),t}function qe(e,t){return l.useReducer((n,i)=>t[n][i]??n,e)}var Le=e=>{const{present:t,children:n}=e,i=Fe(t),a=typeof n=="function"?n({present:i.isPresent}):l.Children.only(n),o=W(i.ref,Be(a));return typeof n=="function"||i.isPresent?l.cloneElement(a,{ref:o}):null};Le.displayName="Presence";function Fe(e){const[t,n]=l.useState(),i=l.useRef(null),a=l.useRef(e),o=l.useRef("none"),c=e?"mounted":"unmounted",[r,u]=qe(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const p=j(i.current);o.current=r==="mounted"?p:"none"},[r]),_(()=>{const p=i.current,h=a.current;if(h!==e){const m=o.current,f=j(p);e?u("MOUNT"):f==="none"||(p==null?void 0:p.display)==="none"?u("UNMOUNT"):u(h&&m!==f?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,u]),_(()=>{if(t){let p;const h=t.ownerDocument.defaultView??window,v=f=>{const g=j(i.current).includes(f.animationName);if(f.target===t&&g&&(u("ANIMATION_END"),!a.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",p=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},m=f=>{f.target===t&&(o.current=j(i.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",v),t.addEventListener("animationend",v),()=>{h.clearTimeout(p),t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",v),t.removeEventListener("animationend",v)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(r),ref:l.useCallback(p=>{i.current=p?getComputedStyle(p):null,n(p)},[])}}function j(e){return(e==null?void 0:e.animationName)||"none"}function Be(e){var i,a;let t=(i=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var $e=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],q=$e.reduce((e,t)=>{const n=Ve(`Primitive.${t}`),i=l.forwardRef((a,o)=>{const{asChild:c,...r}=a,u=c?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(u,{...r,ref:o})});return i.displayName=`Primitive.${t}`,{...e,[t]:i}},{}),T="Checkbox",[Ke,rt]=De(T),[Xe,Ye]=Ke(T),ye=l.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:i,checked:a,defaultChecked:o,required:c,disabled:r,value:u="on",onCheckedChange:p,form:h,...v}=e,[m,f]=l.useState(null),C=W(t,S=>f(S)),g=l.useRef(!1),k=m?h||!!m.closest("form"):!0,[b,y]=Me({prop:a,defaultProp:o??!1,onChange:p,caller:T}),Oe=l.useRef(b);return l.useEffect(()=>{const S=m==null?void 0:m.form;if(S){const I=()=>y(Oe.current);return S.addEventListener("reset",I),()=>S.removeEventListener("reset",I)}},[m,y]),s.jsxs(Xe,{scope:n,state:b,disabled:r,children:[s.jsx(q.button,{type:"button",role:"checkbox","aria-checked":L(b)?"mixed":b,"aria-required":c,"data-state":Ne(b),"data-disabled":r?"":void 0,disabled:r,value:u,...v,ref:C,onKeyDown:F(e.onKeyDown,S=>{S.key==="Enter"&&S.preventDefault()}),onClick:F(e.onClick,S=>{y(I=>L(I)?!0:!I),k&&(g.current=S.isPropagationStopped(),g.current||S.stopPropagation())})}),k&&s.jsx(je,{control:m,bubbles:!g.current,name:i,value:u,checked:b,required:c,disabled:r,form:h,style:{transform:"translateX(-100%)"},defaultChecked:L(o)?!1:o})]})});ye.displayName=T;var Ie="CheckboxIndicator",He=l.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:i,...a}=e,o=Ye(Ie,n);return s.jsx(Le,{present:i||L(o.state)||o.state===!0,children:s.jsx(q.span,{"data-state":Ne(o.state),"data-disabled":o.disabled?"":void 0,...a,ref:t,style:{pointerEvents:"none",...e.style}})})});He.displayName=Ie;var Ge="CheckboxBubbleInput",je=l.forwardRef(({__scopeCheckbox:e,control:t,checked:n,bubbles:i=!0,defaultChecked:a,...o},c)=>{const r=l.useRef(null),u=W(r,c),p=Ue(n),h=We(t);l.useEffect(()=>{const m=r.current;if(!m)return;const f=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(f,"checked").set;if(p!==n&&g){const k=new Event("click",{bubbles:i});m.indeterminate=L(n),g.call(m,L(n)?!1:n),m.dispatchEvent(k)}},[p,n,i]);const v=l.useRef(L(n)?!1:n);return s.jsx(q.input,{type:"checkbox","aria-hidden":!0,defaultChecked:a??v.current,...o,tabIndex:-1,ref:u,style:{...o.style,...h,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});je.displayName=Ge;function L(e){return e==="indeterminate"}function Ne(e){return L(e)?"indeterminate":e?"checked":"unchecked"}var Je=ye;const Qe=Ae("",{variants:{variant:{basic:"s-checklist-basic",contained:"s-checklist-contained"},size:{small:"s-checklist-small",regular:"s-checklist-regular",large:"s-checklist-large"},width:{inline:"",full:"s-checklist-full-width"},align:{vertical:"s-checklist-vertical",horizontal:"s-checklist-horizontal"},disabled:{true:"s-checklist-disabled"}},defaultVariants:{size:"regular",width:"inline"}}),we=l.createContext({onChange:e=>{console.log(e)},checkedOptions:[],variant:"basic"}),d=({variant:e="basic",align:t,className:n,width:i,size:a,title:o,disabled:c,listDescription:r,onChangeLogic:u,children:p,selectedValues:h})=>{const[v,m]=Ee.useState([]);l.useEffect(()=>{h&&m(h)},[h]);const f=C=>{m(g=>{const b=g.includes(C)?g.filter(y=>y!==C):[...g,C];return u&&u(b),b})};return s.jsx(we.Provider,{value:{onChange:f,checkedOptions:v,variant:e},children:s.jsxs("div",{className:"s-w-full",children:[(o.length>0||r)&&s.jsxs("div",{className:"s-list-title-description",children:[o&&s.jsx("h4",{className:"s-list-title",children:o}),r&&s.jsx("p",{children:r})]}),s.jsx("div",{className:U("s-checklist",Qe({align:t,className:n,disabled:c,variant:e,width:i,size:a})),children:p})]})})},Ze=({value:e,children:t,disabled:n=!1,...i})=>{const{onChange:a,checkedOptions:o,variant:c}=l.useContext(we),r=o.includes(e);return s.jsxs("div",{className:U("s-check-option",r?"s-check-option-selected":"",c==="contained"?"s-checklist-contained":"",n?"s-checklist-item-disabled":""),onClick:()=>!n&&a(e),...i,children:[c==="contained"&&s.jsx(Je,{checked:r,className:"s-checkbox-root s-flex",disabled:n,children:s.jsx("div",{className:"s-h-large  s-w-large ",children:r?s.jsx(tt,{}):s.jsx(et,{})})}),s.jsx("input",{type:"checkbox",value:e,checked:r,readOnly:!0,disabled:n,className:U(c==="contained"?"sr-only":"")}),s.jsxs("label",{htmlFor:e,children:[" ",t]})]})};d.Item=Ze;const et=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"s-w-4 s-h-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75h16.5v16.5H3.75z"})}),tt=()=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"s-w-4 s-h-4",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 3.75h16.5v16.5H3.75z"}),s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15L15 9.75"})]});try{d.displayName="SCheckList",d.__docgenInfo={description:"",displayName:"SCheckList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},listDescription:{defaultValue:null,description:"",name:"listDescription",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CheckboxOption[]"}},onChangeLogic:{defaultValue:null,description:"",name:"onChangeLogic",required:!1,type:{name:"((value: string[]) => void)"}},selectedValues:{defaultValue:null,description:"",name:"selectedValues",required:!1,type:{name:"string[]"}},variant:{defaultValue:{value:"basic"},description:"",name:"variant",required:!1,type:{name:'"basic" | "contained" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"regular" | "large" | "small" | null'}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:'"full" | "inline" | null'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"horizontal" | "vertical" | null'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean | null"}}}}}catch{}const x=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4 with long text: Lorem Ipsum is simply dummy text of the printing and typesetting industry.",value:"4"}],ot={component:d,decorators:[e=>s.jsx("div",{className:"s-p-4",children:s.jsx(e,{})})],title:"Design System/Input/SCheckList",tags:["autodocs"],args:{variant:"basic",align:"horizontal",width:"inline",title:"",onChangeLogic:e=>console.log("Selected values:",e),listDescription:"",selectedValues:["1"]},argTypes:{variant:{options:["basic","contained"],control:{type:"radio"},description:"The visual style variant of the checklist",table:{defaultValue:{summary:"basic"},type:{summary:"string"}}},size:{options:["small","regular","large"],control:{type:"select"},description:"The size of the checklist items",if:{arg:"variant",neq:"basic"},table:{defaultValue:{summary:"regular"}}},align:{options:["horizontal","vertical"],control:{type:"select"},description:"The layout orientation of the checklist items",table:{defaultValue:{summary:"horizontal"}}},width:{options:["inline","full"],control:{type:"radio"},description:"Whether the checklist takes full width of its container",table:{defaultValue:{summary:"inline"}}},title:{control:{type:"text"},description:"Title displayed above the checklist"},listDescription:{control:{type:"text"},description:"Description text displayed below the title"},disabled:{control:{type:"boolean"},description:"Whether the entire checklist is disabled"},selectedValues:{control:{type:"object"},description:"Array of pre-selected values"},onChangeLogic:{action:"selection changed",description:"Function called when selection changes"}},parameters:{docs:{description:{component:`
# SCheckList

A flexible checklist component that supports multiple selection, different layouts, and styling options.

## Features

- Multiple visual variants: basic and contained
- Different size options: small, regular, large
- Horizontal or vertical layout
- Disabled state support
- Custom styling options
`}}}},N={args:{variant:"basic",align:"horizontal",selectedValues:["1"],onChangeLogic:e=>console.log("Changed values:",e)},render:e=>s.jsx(d,{...e,children:x.map((t,n)=>s.jsx(d.Item,{value:t.value,children:t.label},n))})},w={args:{variant:"basic",align:"horizontal",title:"Favorite Options",listDescription:"Please select one or more options from the list below",selectedValues:["1"]},render:e=>s.jsx(d,{...e,children:x.map((t,n)=>s.jsx(d.Item,{value:t.value,children:t.label},n))})},O={args:{variant:"contained",align:"horizontal",selectedValues:["1","3"]},render:e=>s.jsx(d,{...e,children:x.map((t,n)=>s.jsx(d.Item,{value:t.value,children:t.label},n))})},z={args:{variant:"basic",align:"vertical",selectedValues:["2"]},render:e=>s.jsx(d,{...e,children:x.map((t,n)=>s.jsx(d.Item,{value:t.value,children:t.label},n))})},E={args:{variant:"basic",width:"full",align:"horizontal",selectedValues:[]},render:e=>s.jsx(d,{...e,children:x.map((t,n)=>s.jsx(d.Item,{value:t.value,children:t.label},n))})},V={args:{variant:"basic",disabled:!0,selectedValues:["1"]},render:e=>s.jsx(d,{...e,children:x.map((t,n)=>s.jsx(d.Item,{value:t.value,children:t.label},n))})},A={args:{variant:"contained",selectedValues:["1"]},render:e=>s.jsxs(d,{...e,children:[s.jsx(d.Item,{value:"1",children:"Option 1"}),s.jsx(d.Item,{value:"2",disabled:!0,children:"Option 2 (Disabled)"}),s.jsx(d.Item,{value:"3",children:"Option 3"}),s.jsx(d.Item,{value:"4",disabled:!0,children:"Option 4 (Disabled)"})]})},D={render:()=>s.jsxs("div",{className:"s-flex s-flex-col s-gap-6",children:[s.jsx(d,{variant:"contained",size:"small",title:"Small Size",children:x.slice(0,3).map((e,t)=>s.jsx(d.Item,{value:e.value,children:e.label},t))}),s.jsx(d,{variant:"contained",size:"regular",title:"Regular Size",children:x.slice(0,3).map((e,t)=>s.jsx(d.Item,{value:e.value,children:e.label},t))}),s.jsx(d,{variant:"contained",size:"large",title:"Large Size",children:x.slice(0,3).map((e,t)=>s.jsx(d.Item,{value:e.value,children:e.label},t))})]})},P={render:()=>{const e=()=>{const[t,n]=l.useState(["1"]);return s.jsxs("div",{className:"s-p-4",children:[s.jsx("h3",{className:"s-mb-4",children:"Controlled Checklist Example"}),s.jsxs("p",{className:"s-mb-4",children:["Selected values: ",t.join(", ")]}),s.jsx(d,{variant:"contained",title:"Select Options",selectedValues:t,onChangeLogic:i=>n(i),children:x.map((i,a)=>s.jsx(d.Item,{value:i.value,children:i.label},a))}),s.jsxs("div",{className:"s-mt-4",children:[s.jsx("button",{className:"s-px-3 s-py-1 s-bg-blue-500 s-text-white s-rounded s-mr-2",onClick:()=>n([]),children:"Clear All"}),s.jsx("button",{className:"s-px-3 s-py-1 s-bg-green-500 s-text-white s-rounded",onClick:()=>n(x.map(i=>i.value)),children:"Select All"})]})]})};return s.jsx(e,{})}},R={args:{variant:"basic",title:"Items with individual disabled states",listDescription:"Some items are disabled while others remain interactive"},render:e=>{const[t,n]=l.useState(["1"]);return s.jsxs(d,{...e,selectedValues:t,onChangeLogic:i=>{console.log("Changed:",i),n(i)},children:[s.jsx(d.Item,{value:"1",children:"Option 1 (Enabled)"}),s.jsx(d.Item,{value:"2",disabled:!0,children:"Option 2 (Disabled)"}),s.jsx(d.Item,{value:"3",children:"Option 3 (Enabled)"}),s.jsx(d.Item,{value:"4",disabled:!0,children:"Option 4 (Disabled)"})]})}},M={parameters:{docs:{description:{story:"SCheckList is a controlled component. You need to manage the selected values in your state and pass them via the selectedValues prop."}}},render:()=>{const e=()=>{const[t,n]=l.useState(["1"]);return s.jsxs("div",{className:"s-p-4",children:[s.jsx("h3",{className:"s-mb-4",children:"Controlled Component Example"}),s.jsxs("p",{className:"s-mb-4",children:["Selected values: ",t.join(", ")]}),s.jsx(d,{variant:"contained",title:"Select Options",selectedValues:t,onChangeLogic:n,children:x.map((i,a)=>s.jsx(d.Item,{value:i.value,children:i.label},a))}),s.jsxs("div",{className:"s-mt-4",children:[s.jsx("button",{className:"s-px-3 s-py-1 s-bg-blue-500 s-text-white s-rounded s-mr-2",onClick:()=>n([]),children:"Clear All"}),s.jsx("button",{className:"s-px-3 s-py-1 s-bg-green-500 s-text-white s-rounded",onClick:()=>n(x.map(i=>i.value)),children:"Select All"})]})]})};return s.jsx(e,{})}};var B,$,K;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    align: "horizontal",
    selectedValues: ["1"],
    onChangeLogic: values => console.log("Changed values:", values)
  },
  render: args => <SCheckList {...args}>
      {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>)}
    </SCheckList>
}`,...(K=($=N.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var X,Y,H;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    align: "horizontal",
    title: "Favorite Options",
    listDescription: "Please select one or more options from the list below",
    selectedValues: ["1"]
  },
  render: args => <SCheckList {...args}>
      {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>)}
    </SCheckList>
}`,...(H=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var G,J,Q;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    align: "horizontal",
    selectedValues: ["1", "3"]
  },
  render: args => <SCheckList {...args}>
      {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>)}
    </SCheckList>
}`,...(Q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    align: "vertical",
    selectedValues: ["2"]
  },
  render: args => <SCheckList {...args}>
      {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>)}
    </SCheckList>
}`,...(te=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,ie;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    width: "full",
    align: "horizontal",
    selectedValues: []
  },
  render: args => <SCheckList {...args}>
      {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>)}
    </SCheckList>
}`,...(ie=(se=E.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ae,re,oe;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    disabled: true,
    selectedValues: ["1"]
  },
  render: args => <SCheckList {...args}>
      {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
          {item.label}
        </SCheckList.Item>)}
    </SCheckList>
}`,...(oe=(re=V.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ce,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    variant: "contained",
    selectedValues: ["1"]
  },
  render: args => <SCheckList {...args}>
      <SCheckList.Item value="1">Option 1</SCheckList.Item>
      <SCheckList.Item value="2" disabled>
        Option 2 (Disabled)
      </SCheckList.Item>
      <SCheckList.Item value="3">Option 3</SCheckList.Item>
      <SCheckList.Item value="4" disabled>
        Option 4 (Disabled)
      </SCheckList.Item>
    </SCheckList>
}`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,me,pe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-flex-col s-gap-6">
      <SCheckList variant="contained" size="small" title="Small Size">
        {optionList.slice(0, 3).map((item, index) => <SCheckList.Item key={index} value={item.value}>
            {item.label}
          </SCheckList.Item>)}
      </SCheckList>

      <SCheckList variant="contained" size="regular" title="Regular Size">
        {optionList.slice(0, 3).map((item, index) => <SCheckList.Item key={index} value={item.value}>
            {item.label}
          </SCheckList.Item>)}
      </SCheckList>

      <SCheckList variant="contained" size="large" title="Large Size">
        {optionList.slice(0, 3).map((item, index) => <SCheckList.Item key={index} value={item.value}>
            {item.label}
          </SCheckList.Item>)}
      </SCheckList>
    </div>
}`,...(pe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ve,fe;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(["1"]);
      return <div className="s-p-4">
          <h3 className="s-mb-4">Controlled Checklist Example</h3>
          <p className="s-mb-4">Selected values: {selected.join(", ")}</p>

          <SCheckList variant="contained" title="Select Options" selectedValues={selected} onChangeLogic={values => setSelected(values)}>
            {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
                {item.label}
              </SCheckList.Item>)}
          </SCheckList>

          <div className="s-mt-4">
            <button className="s-px-3 s-py-1 s-bg-blue-500 s-text-white s-rounded s-mr-2" onClick={() => setSelected([])}>
              Clear All
            </button>
            <button className="s-px-3 s-py-1 s-bg-green-500 s-text-white s-rounded" onClick={() => setSelected(optionList.map(item => item.value))}>
              Select All
            </button>
          </div>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...(fe=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ge,Ce,xe;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    variant: "basic",
    title: "Items with individual disabled states",
    listDescription: "Some items are disabled while others remain interactive"
  },
  render: args => {
    const [selected, setSelected] = useState<string[]>(["1"]);
    return <SCheckList {...args} selectedValues={selected} onChangeLogic={values => {
      console.log("Changed:", values);
      setSelected(values);
    }}>
        <SCheckList.Item value="1">Option 1 (Enabled)</SCheckList.Item>
        <SCheckList.Item value="2" disabled>
          Option 2 (Disabled)
        </SCheckList.Item>
        <SCheckList.Item value="3">Option 3 (Enabled)</SCheckList.Item>
        <SCheckList.Item value="4" disabled>
          Option 4 (Disabled)
        </SCheckList.Item>
      </SCheckList>;
  }
}`,...(xe=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var be,Se,ke;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "SCheckList is a controlled component. You need to manage the selected values in your state and pass them via the selectedValues prop."
      }
    }
  },
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(["1"]);
      return <div className="s-p-4">
          <h3 className="s-mb-4">Controlled Component Example</h3>
          <p className="s-mb-4">Selected values: {selected.join(", ")}</p>

          <SCheckList variant="contained" title="Select Options" selectedValues={selected} onChangeLogic={setSelected}>
            {optionList.map((item, index) => <SCheckList.Item key={index} value={item.value}>
                {item.label}
              </SCheckList.Item>)}
          </SCheckList>

          <div className="s-mt-4">
            <button className="s-px-3 s-py-1 s-bg-blue-500 s-text-white s-rounded s-mr-2" onClick={() => setSelected([])}>
              Clear All
            </button>
            <button className="s-px-3 s-py-1 s-bg-green-500 s-text-white s-rounded" onClick={() => setSelected(optionList.map(item => item.value))}>
              Select All
            </button>
          </div>
        </div>;
    };
    return <ControlledExample />;
  }
}`,...(ke=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};const lt=["Default","WithTitleAndDescription","ContainedVariant","VerticalAlignment","FullWidth","DisabledChecklist","MixedDisabledItems","Sizes","ControlledComponent","IndividualDisabledItems","ControlledUsage"];export{O as ContainedVariant,P as ControlledComponent,M as ControlledUsage,N as Default,V as DisabledChecklist,E as FullWidth,R as IndividualDisabledItems,A as MixedDisabledItems,D as Sizes,z as VerticalAlignment,w as WithTitleAndDescription,lt as __namedExportsOrder,ot as default};

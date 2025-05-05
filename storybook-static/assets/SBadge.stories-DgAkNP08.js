import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as n}from"./index-DRjF_FHU.js";import{S as G,c as U,a as Y}from"./index-CCQuHcL9.js";import{F as Z}from"./CheckIcon-ClMFCIol.js";const H=Y("s-badge",{variants:{variant:{primary:"s-badge-primary",neutral:"s-badge-neutral",red:"s-badge-red",yellow:"s-badge-yellow",green:"s-badge-green",info:"s-badge-info",brand:"s-badge-brand"},size:{regular:"",large:"s-badge-large"},mode:{light:"s-badge-light",dark:"s-badge-dark"},rounded:{small:"s-radius-small",full:"s-radius-full"}},defaultVariants:{variant:"primary",mode:"light",size:"regular",rounded:"full"}}),a=n.forwardRef(({className:r,variant:d,children:u,size:m,rounded:L,mode:E,asChild:F=!1,icon:l,iconPosition:f="left",...A},M)=>{const O=F?G:"div";return e.jsx(O,{ref:M,className:U(H({variant:d,size:m,rounded:L,mode:E}),r),...A,children:e.jsxs("span",{className:"s-span",children:[l&&f==="left"&&e.jsx("span",{className:"s-badge-icon","aria-hidden":"true",children:l}),u,l&&f==="right"&&e.jsx("span",{className:"s-badge-icon","aria-hidden":"true",children:l})]})})});a.displayName="SBadge";try{a.displayName="SBadge",a.__docgenInfo={description:`SBadge is a versatile badge component that supports multiple variants, sizes, and modes.
It's built on top of Radix UI's Slot component for composition flexibility.`,displayName:"SBadge",props:{children:{defaultValue:null,description:"Badge content",name:"children",required:!1,type:{name:"ReactNode"}},asChild:{defaultValue:{value:"false"},description:"Whether to render the badge as a child component (Radix UI Slot)",name:"asChild",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon to display in the badge",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"Position of the icon relative to the badge text",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "neutral" | "red" | "yellow" | "green" | "info" | "brand" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"regular" | "large" | null'}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:'"light" | "dark" | null'}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:'"small" | "full" | null'}}}}}catch{}function T({title:r,titleId:d,...u},m){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":d},u),r?n.createElement("title",{id:d},r):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const $=n.forwardRef(T),ee={title:"Design System/Actions/SBadge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select",options:["primary","neutral","red","yellow","green","info","brand"]}},size:{control:{type:"radio",options:["regular","large"]}},mode:{control:{type:"radio",options:["light","dark"]}},rounded:{control:{type:"radio",options:["small","full"]}},iconPosition:{control:{type:"radio",options:["left","right"]}}}},i={args:{children:"Default Badge",variant:"primary",size:"regular",mode:"light",rounded:"full"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"neutral",children:"Neutral"}),e.jsx(a,{variant:"red",children:"Red"}),e.jsx(a,{variant:"yellow",children:"Yellow"}),e.jsx(a,{variant:"green",children:"Green"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"brand",children:"Brand"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(a,{size:"regular",children:"Regular"}),e.jsx(a,{size:"large",children:"Large"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{mode:"light",variant:"primary",children:"Light"}),e.jsx(a,{mode:"dark",variant:"primary",children:"Dark"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{rounded:"small",children:"Small Radius"}),e.jsx(a,{rounded:"full",children:"Full Radius"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{icon:e.jsx(Z,{}),iconPosition:"left",children:"Left Icon"}),e.jsx(a,{icon:e.jsx($,{}),iconPosition:"right",children:"Right Icon"})]})},g={render:()=>e.jsx(a,{asChild:!0,children:e.jsx("a",{href:"#",onClick:r=>{r.preventDefault(),alert("Badge clicked!")},children:"Clickable Badge"})})};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Default Badge",
    variant: "primary",
    size: "regular",
    mode: "light",
    rounded: "full"
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,S,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="neutral">Neutral</SBadge>
      <SBadge variant="red">Red</SBadge>
      <SBadge variant="yellow">Yellow</SBadge>
      <SBadge variant="green">Green</SBadge>
      <SBadge variant="info">Info</SBadge>
      <SBadge variant="brand">Brand</SBadge>
    </div>
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var b,j,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    alignItems: "center"
  }}>
      <SBadge size="regular">Regular</SBadge>
      <SBadge size="large">Large</SBadge>
    </div>
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var R,k,I;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <SBadge mode="light" variant="primary">
        Light
      </SBadge>
      <SBadge mode="dark" variant="primary">
        Dark
      </SBadge>
    </div>
}`,...(I=(k=o.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var C,z,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <SBadge rounded="small">Small Radius</SBadge>
      <SBadge rounded="full">Full Radius</SBadge>
    </div>
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var W,N,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      <SBadge icon={<CheckIcon />} iconPosition="left">
        Left Icon
      </SBadge>
      <SBadge icon={<InformationCircleIcon />} iconPosition="right">
        Right Icon
      </SBadge>
    </div>
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var D,P,q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SBadge asChild>
      <a href="#" onClick={e => {
      e.preventDefault();
      alert("Badge clicked!");
    }}>
        Clickable Badge
      </a>
    </SBadge>
}`,...(q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};const ae=["Default","Variants","Sizes","Modes","Rounded","WithIcon","AsChild"];export{g as AsChild,i as Default,o as Modes,c as Rounded,t as Sizes,s as Variants,p as WithIcon,ae as __namedExportsOrder,ee as default};

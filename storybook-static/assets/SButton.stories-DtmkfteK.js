import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{c as Le,a as Re,S as ke}from"./index-CCQuHcL9.js";import{F as ze}from"./CheckIcon-ClMFCIol.js";function Ie({title:n,titleId:a,...r},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),n?s.createElement("title",{id:a},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}))}const Ce=s.forwardRef(Ie);function De({title:n,titleId:a,...r},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},r),n?s.createElement("title",{id:a},n):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"}))}const i=s.forwardRef(De),Ve=Re("s-btn",{variants:{variant:{primary:"s-btn-primary",neutral:"s-btn-neutral",danger:"s-btn-danger",warning:"s-btn-warning",ghost:"s-btn-ghost",success:"s-btn-success"},styleType:{default:"",outline:"s-btn-outline",text:"s-btn-text",icon:"s-btn-icon","icon-borderless":"s-btn-icon-borderless"},size:{small:"s-btn-small",regular:"",large:"s-btn-large"},fullWidth:{true:"s-btn-full-width"},rounded:{none:"s-rounded-none",sm:"s-rounded-sm",md:"s-rounded-md",lg:"s-rounded-lg",full:"s-rounded-full"}},defaultVariants:{variant:"primary",size:"regular",styleType:"default",fullWidth:!1,rounded:"md"}}),Fe=()=>e.jsxs("svg",{className:"s-animate-spin s-h-5 s-w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","aria-hidden":"true",children:[e.jsx("circle",{className:"s-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"s-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),t=s.forwardRef(({className:n,children:a,variant:r,styleType:o,size:xe,fullWidth:Se,rounded:ve,asChild:Be=!1,disabled:be,loading:N=!1,icon:l,iconPosition:T="left",type:we="button",...je},Ne)=>{const Te=Be?ke:"button",c=be||N,We=Le(Ve({variant:c?"neutral":r,styleType:o,size:xe,fullWidth:Se,rounded:ve}),c&&"s-btn-disabled",n);return e.jsx(Te,{ref:Ne,type:we,disabled:c,className:We,"aria-disabled":c,"data-state":N?"loading":void 0,...je,children:e.jsx("span",{className:"s-span",children:N?e.jsxs(e.Fragment,{children:[e.jsx(Fe,{}),a]}):e.jsxs(e.Fragment,{children:[l&&T==="left"&&e.jsx("span",{className:"s-button-icon","aria-hidden":"true",children:l}),a,l&&T==="right"&&e.jsx("span",{className:"s-button-icon","aria-hidden":"true",children:l})]})})})});t.displayName="SButton";try{t.displayName="SButton",t.__docgenInfo={description:`SButton is a versatile button component that supports multiple variants, sizes, and states.
It's built on top of Radix UI's Slot component for composition flexibility.`,displayName:"SButton",props:{asChild:{defaultValue:{value:"false"},description:"Whether to render the button as a child component (Radix UI Slot)",name:"asChild",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Whether the button is in a loading state",name:"loading",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon to display in the button",name:"icon",required:!1,type:{name:"ReactNode"}},iconPosition:{defaultValue:{value:"left"},description:"Position of the icon relative to the button text",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"Optional additional classname for the button",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"primary" | "neutral" | "danger" | "warning" | "ghost" | "success" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"regular" | "large" | "small" | null'}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:'"full" | "none" | "sm" | "md" | "lg" | null'}},styleType:{defaultValue:null,description:"",name:"styleType",required:!1,type:{name:'"icon" | "text" | "default" | "outline" | "icon-borderless" | null'}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | null"}}}}}catch{}const Me={component:t,decorators:[n=>e.jsx("div",{className:"p-4",children:e.jsx(n,{})})],title:"Design System/Actions/SButton",tags:["autodocs"],args:{variant:"primary",styleType:"default",size:"regular",fullWidth:!1,children:"Button",disabled:!1,asChild:!1,rounded:"md"},argTypes:{variant:{options:["primary","neutral","danger","warning","ghost","success"],control:{type:"select"},description:"The visual style variant of the button",table:{defaultValue:{summary:"primary"},type:{summary:"string"}}},children:{control:{type:"text"},description:"The content to be rendered inside the button"},styleType:{options:["default","outline","text","icon","icon-borderless"],control:{type:"select"},description:"The style type of the button",table:{defaultValue:{summary:"default"}}},fullWidth:{control:{type:"boolean"},description:"Whether the button should take up the full width of its container"},size:{options:["small","regular","large"],control:{type:"select"},description:"The size of the button",table:{defaultValue:{summary:"regular"}}},rounded:{options:["none","sm","md","lg","full"],control:{type:"select"},description:"The border radius of the button",table:{defaultValue:{summary:"md"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Function called when the button is clicked"},asChild:{control:{type:"boolean"},description:"Whether to render the button as a child component using Radix UI Slot"},loading:{control:{type:"boolean"},description:"Whether the button is in a loading state"},icon:{control:{type:"boolean"},description:"Whether to show an icon in the button"},iconPosition:{options:["left","right"],control:{type:"radio"},description:"The position of the icon relative to the button text",if:{arg:"icon",truthy:!0}}},parameters:{docs:{description:{component:`
# SButton

A versatile button component that supports multiple variants, sizes, styles, and states.

## Features

- Multiple visual variants: primary, neutral, danger, warning, ghost, success
- Different style types: default, outline, text, icon, icon-borderless
- Size variations: small, regular, large
- Support for loading state with spinner
- Icon support with position control (left/right)
- Full width option for responsive layouts
- Border radius customization
- Composition flexibility with Radix UI Slot

## Accessibility

- Proper ARIA attributes for disabled and loading states
- Keyboard navigation support
- Focus visible styling

## Usage

\`\`\`jsx
import { SButton } from '@/components/ui/SButton';

// Basic usage
<SButton variant="primary">Click me</SButton>

// With icon
<SButton variant="primary" icon={<Icon />} iconPosition="left">
  With Icon
</SButton>

// Loading state
<SButton loading>Loading</SButton>

// As link with asChild
<SButton asChild>
  <a href="/somewhere">Link styled as button</a>
</SButton>
\`\`\`
        `}}}},d={args:{children:"Button",variant:"primary"}},u={render:n=>e.jsx(t,{...n,icon:e.jsx(i,{className:"w-5 h-5"}),iconPosition:"left",children:n.children}),args:{children:"With Left Icon"}},p={render:n=>e.jsx(t,{...n,icon:e.jsx(Ce,{className:"w-5 h-5"}),iconPosition:"right",children:n.children}),args:{children:"With Right Icon"}},m={args:{variant:"ghost",children:"Ghost Button"}},h={render:n=>e.jsx(t,{...n,icon:e.jsx(ze,{className:"w-5 h-5"}),children:n.children}),args:{variant:"success",children:"Success"}},g={args:{loading:!0,children:"Loading"}},y={args:{disabled:!0,children:"Disabled"}},f={render:n=>e.jsx(t,{...n,asChild:!0,children:e.jsx("a",{href:"#",onClick:a=>a.preventDefault(),children:"Link as Button"})})},x={render:()=>e.jsxs("div",{className:"s-flex s-flex-wrap s-gap-4",children:[e.jsx(t,{rounded:"none",children:"Squared"}),e.jsx(t,{rounded:"sm",children:"Small Radius"}),e.jsx(t,{rounded:"md",children:"Medium Radius"}),e.jsx(t,{rounded:"lg",children:"Large Radius"}),e.jsx(t,{rounded:"full",children:"Fully Rounded"})]})},S={render:()=>e.jsxs("div",{className:"s-flex s-flex-wrap s-gap-4",children:[e.jsxs("div",{className:"s-flex s-flex-wrap s-gap-4",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"neutral",children:"Neutral"}),e.jsx(t,{variant:"danger",children:"Danger"}),e.jsx(t,{variant:"warning",children:"Warning"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"success",children:"Success"})]}),e.jsxs("div",{className:"s-flex s-flex-wrap s-gap-4",children:[e.jsx(t,{variant:"primary",styleType:"outline",children:"Primary Outline"}),e.jsx(t,{variant:"neutral",styleType:"outline",children:"Neutral Outline"}),e.jsx(t,{variant:"danger",styleType:"outline",children:"Danger Outline"}),e.jsx(t,{variant:"warning",styleType:"outline",children:"Warning Outline"}),e.jsx(t,{variant:"ghost",styleType:"outline",children:"Ghost Outline"}),e.jsx(t,{variant:"success",styleType:"outline",children:"Success Outline"})]}),e.jsxs("div",{className:"s-flex s-flex-wrap s-gap-4",children:[e.jsx(t,{variant:"primary",styleType:"text",children:"Primary Text"}),e.jsx(t,{variant:"neutral",styleType:"text",children:"Neutral Text"}),e.jsx(t,{variant:"danger",styleType:"text",children:"Danger Text"}),e.jsx(t,{variant:"warning",styleType:"text",children:"Warning Text"}),e.jsx(t,{variant:"ghost",styleType:"text",children:"Ghost Text"}),e.jsx(t,{variant:"success",styleType:"text",children:"Success Text"})]})]})},v={render:()=>e.jsxs("div",{className:"s-flex s-items-center s-gap-4",children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"regular",children:"Regular"}),e.jsx(t,{size:"large",children:"Large"})]})},B={render:()=>e.jsxs("div",{className:"s-flex s-flex-col s-gap-4 s-w-full",children:[e.jsx(t,{fullWidth:!0,children:"Full Width Button"}),e.jsx(t,{fullWidth:!0,variant:"neutral",children:"Full Width Neutral"})]})},b={render:()=>e.jsx("div",{className:"s-flex s-flex-wrap s-gap-4",children:["primary","neutral","danger","warning","ghost","success"].map(n=>e.jsx(t,{variant:n,styleType:"icon","aria-label":`${n} icon button`,children:e.jsx(i,{className:"w-5 h-5"})},n))})},w={render:()=>e.jsxs("div",{className:"s-flex s-items-center s-gap-4",children:[e.jsx(t,{styleType:"icon",size:"small","aria-label":"Small icon",children:e.jsx(i,{className:"s-w-4 s-h-4"})}),e.jsx(t,{styleType:"icon",size:"regular","aria-label":"Regular icon",children:e.jsx(i,{className:"s-w-5 s-h-5"})}),e.jsx(t,{styleType:"icon",size:"large","aria-label":"Large icon",children:e.jsx(i,{className:"w-6 h-6"})})]})},j={render:()=>e.jsxs("div",{className:"s-flex s-flex-wrap s-gap-4",children:[e.jsx(t,{loading:!0,children:"Loading"}),e.jsx(t,{variant:"ghost",loading:!0,children:"Loading Ghost"}),e.jsx(t,{variant:"danger",loading:!0,children:"Loading Danger"})]})};var W,L,R;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "primary"
  }
}`,...(R=(L=d.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var k,z,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <SButton {...args} icon={<BeakerIcon className="w-5 h-5" />} iconPosition="left">
      {args.children}
    </SButton>,
  args: {
    children: "With Left Icon"
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var C,D,V;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <SButton {...args} icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
      {args.children}
    </SButton>,
  args: {
    children: "With Right Icon"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var F,O,A;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...(A=(O=m.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var P,q,G;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <SButton {...args} icon={<CheckIcon className="w-5 h-5" />}>
      {args.children}
    </SButton>,
  args: {
    variant: "success",
    children: "Success"
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var M,_,E;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: "Loading"
  }
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var U,$,H;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled"
  }
}`,...(H=($=y.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var K,J,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <SButton {...args} asChild>
      <a href="#" onClick={e => e.preventDefault()}>Link as Button</a>
    </SButton>
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-flex-wrap s-gap-4">
      <SButton rounded="none">Squared</SButton>
      <SButton rounded="sm">Small Radius</SButton>
      <SButton rounded="md">Medium Radius</SButton>
      <SButton rounded="lg">Large Radius</SButton>
      <SButton rounded="full">Fully Rounded</SButton>
    </div>
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-flex-wrap s-gap-4">
      <div className="s-flex s-flex-wrap s-gap-4">
        <SButton variant="primary">Primary</SButton>
        <SButton variant="neutral">Neutral</SButton>
        <SButton variant="danger">Danger</SButton>
        <SButton variant="warning">Warning</SButton>
        <SButton variant="ghost">Ghost</SButton>
        <SButton variant="success">Success</SButton>
      </div>
      <div className="s-flex s-flex-wrap s-gap-4">
        <SButton variant="primary" styleType="outline">Primary Outline</SButton>
        <SButton variant="neutral" styleType="outline">Neutral Outline</SButton>
        <SButton variant="danger" styleType="outline">Danger Outline</SButton>
        <SButton variant="warning" styleType="outline">Warning Outline</SButton>
        <SButton variant="ghost" styleType="outline">Ghost Outline</SButton>
        <SButton variant="success" styleType="outline">Success Outline</SButton>
      </div>
      <div className="s-flex s-flex-wrap s-gap-4">
        <SButton variant="primary" styleType="text">Primary Text</SButton>
        <SButton variant="neutral" styleType="text">Neutral Text</SButton>
        <SButton variant="danger" styleType="text">Danger Text</SButton>
        <SButton variant="warning" styleType="text">Warning Text</SButton>
        <SButton variant="ghost" styleType="text">Ghost Text</SButton>
        <SButton variant="success" styleType="text">Success Text</SButton>
      </div>
    </div>
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-items-center s-gap-4">
      <SButton size="small">Small</SButton>
      <SButton size="regular">Regular</SButton>
      <SButton size="large">Large</SButton>
    </div>
}`,...(re=(se=v.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,ie,le;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-flex-col s-gap-4 s-w-full">
      <SButton fullWidth>Full Width Button</SButton>
      <SButton fullWidth variant="neutral">Full Width Neutral</SButton>
    </div>
}`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,ue;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-flex-wrap s-gap-4">
      {["primary", "neutral", "danger", "warning", "ghost", "success"].map(variant => <SButton key={variant} variant={variant as any} styleType="icon" aria-label={\`\${variant} icon button\`}>
          <BeakerIcon className="w-5 h-5" />
        </SButton>)}
    </div>
}`,...(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-items-center s-gap-4">
      <SButton styleType="icon" size="small" aria-label="Small icon">
        <BeakerIcon className="s-w-4 s-h-4" />
      </SButton>
      <SButton styleType="icon" size="regular" aria-label="Regular icon">
        <BeakerIcon className="s-w-5 s-h-5" />
      </SButton>
      <SButton styleType="icon" size="large" aria-label="Large icon">
        <BeakerIcon className="w-6 h-6" />
      </SButton>
    </div>
}`,...(he=(me=w.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,ye,fe;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="s-flex s-flex-wrap s-gap-4">
      <SButton loading>Loading</SButton>
      <SButton variant="ghost" loading>Loading Ghost</SButton>
      <SButton variant="danger" loading>Loading Danger</SButton>
    </div>
}`,...(fe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};const _e=["Default","WithLeftIcon","WithRightIcon","Ghost","Success","Loading","Disabled","AsLink","Rounded","AllVariants","Sizes","FullWidth","IconButtons","IconButtonSizes","LoadingStates"];export{S as AllVariants,f as AsLink,d as Default,y as Disabled,B as FullWidth,m as Ghost,w as IconButtonSizes,b as IconButtons,g as Loading,j as LoadingStates,x as Rounded,v as Sizes,h as Success,u as WithLeftIcon,p as WithRightIcon,_e as __namedExportsOrder,Me as default};

import{j as e}from"./iframe-zY3F8_PV.js";import{C as m,R as r}from"./Col-TwU0Q4G3.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BheH0D4G.js";const b={component:m,title:"Layout/Col",tags:["autodocs"],decorators:[o=>e.jsx("div",{style:{padding:"1rem 0",backgroundColor:"#f0f0f0"},children:e.jsx(o,{})})]},s=({text:o,size:d,mobile:p,desktopOnly:x,mobileOnly:u,ignoreGaps:z})=>e.jsx(m,{size:d,mobile:p,desktopOnly:x,mobileOnly:u,ignoreGaps:z,style:{backgroundColor:"#3f72af",padding:"1rem",textAlign:"center",color:"white"},children:e.jsx("div",{children:o})}),i={args:{size:6,children:"This is a single column."},decorators:[o=>e.jsxs(r,{children:[e.jsx(o,{}),e.jsx(m,{size:6,children:e.jsx("div",{style:{backgroundColor:"#3f72af",padding:"1rem",textAlign:"center"},children:"This is another column."})})]})]},n={render:()=>e.jsxs(r,{children:[e.jsx(s,{text:"Col 1 (size={6}, mobile={12})",size:6,mobile:12}),e.jsx(s,{text:"Col 2 (size={6}, mobile={12})",size:6,mobile:12})]}),name:"Responsive Layout"},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{text:"This is always visible (size={6})",size:6}),e.jsx(s,{text:"This is only on desktop (desktopOnly)",size:6,desktopOnly:!0})]})},l={render:()=>e.jsxs(r,{children:[e.jsx(s,{text:"This is always visible (size={6})",size:6}),e.jsx(s,{text:"This is only on mobile (mobileOnly)",size:6,mobileOnly:!0})]})},a={render:()=>e.jsxs(r,{children:[e.jsx(s,{text:"Col 1 (size={3})",size:3}),e.jsx(s,{text:"Col 2 (size={5})",size:5}),e.jsx(s,{text:"Col 3 (size={4})",size:4})]}),name:"Different Column Sizes"},c={render:()=>e.jsxs(r,{verticalAlign:"stretch",noGap:!0,children:[e.jsx(s,{text:"Col 1",size:6,ignoreGaps:!0}),e.jsx(s,{text:"Col 2",size:6,ignoreGaps:!0})]}),name:"Columns Ignoring Gaps",decorators:[o=>e.jsx("div",{style:{backgroundColor:"#fff",padding:"1rem"},children:e.jsx(o,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 6,
    children: 'This is a single column.'
  },
  decorators: [Story => <Row>\r
        <Story />\r
        <Col size={6}>\r
          <div style={{
        backgroundColor: '#3f72af',
        padding: '1rem',
        textAlign: 'center'
      }}>\r
            This is another column.\r
          </div>\r
        </Col>\r
      </Row>]
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // Shows how a 6/6 layout on desktop becomes 12/12 on mobile
  render: () => <Row>\r
      <DemoCol text="Col 1 (size={6}, mobile={12})" size={6} mobile={12} />\r
      <DemoCol text="Col 2 (size={6}, mobile={12})" size={6} mobile={12} />\r
    </Row>,
  name: 'Responsive Layout'
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // Shows a column that is only visible on desktop
  render: () => <Row>\r
      <DemoCol text="This is always visible (size={6})" size={6} />\r
      <DemoCol text="This is only on desktop (desktopOnly)" size={6} desktopOnly />\r
    </Row>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // Shows a column that is only visible on mobile
  render: () => <Row>\r
      <DemoCol text="This is always visible (size={6})" size={6} />\r
      <DemoCol text="This is only on mobile (mobileOnly)" size={6} mobileOnly />\r
    </Row>
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // Shows a more complex grid with different column sizes
  render: () => <Row>\r
      <DemoCol text="Col 1 (size={3})" size={3} />\r
      <DemoCol text="Col 2 (size={5})" size={5} />\r
      <DemoCol text="Col 3 (size={4})" size={4} />\r
    </Row>,
  name: 'Different Column Sizes'
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Row verticalAlign="stretch" noGap>\r
      <DemoCol text="Col 1" size={6} ignoreGaps />\r
      <DemoCol text="Col 2" size={6} ignoreGaps />\r
    </Row>,
  name: 'Columns Ignoring Gaps',
  decorators: [Story => <div style={{
    backgroundColor: '#fff',
    padding: '1rem'
  }}>\r
        <Story />\r
      </div>]
}`,...c.parameters?.docs?.source}}};const f=["Basic","Responsive","DesktopOnly","MobileOnly","DifferentSizes","IgnoreGaps"];export{i as Basic,t as DesktopOnly,a as DifferentSizes,c as IgnoreGaps,l as MobileOnly,n as Responsive,f as __namedExportsOrder,b as default};

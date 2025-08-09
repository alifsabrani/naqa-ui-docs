import{T as i,j as e}from"./iframe-zY3F8_PV.js";import"./preload-helper-D9Z9MdNV.js";const t="_container_haaih_1",c="_sectionTitle_haaih_19",m="_sectionContainer_haaih_33",l="_grid_haaih_41",d="_label_haaih_53",h="_row_haaih_65",p="_text_haaih_77",n={container:t,sectionTitle:c,sectionContainer:m,grid:l,label:d,row:h,text:p},u={component:i,title:"Layout/ThemeProvider",tags:["autodocs"],parameters:{docs:{description:{component:"ThemeProvider manages the application's theme through CSS custom properties. It supports both class-based theming and runtime theme customization through props. All child components can access theme variables via CSS var() function."}}},argTypes:{children:{description:"Child elements to be rendered within the themed context",control:"text"},theme:{description:"Theme object for runtime customization",control:"object"}}},o=()=>e.jsxs("div",{className:n.container,children:[e.jsxs("div",{className:n.sectionContainer,children:[e.jsx("h3",{className:n.container,children:"Font Sizes"}),e.jsx("div",{className:n.grid,children:["h1","h2","xl","lg","md","sm","xs"].map(s=>e.jsxs("div",{className:n.row,children:[e.jsx("div",{className:n.label,children:s}),e.jsx("p",{className:n.text,style:{fontSize:`var(--font-size-${s})`},children:"The quick brown fox jumps over the lazy dog"})]},s))})]}),e.jsxs("div",{className:n.sectionContainer,children:[e.jsx("h3",{className:n.sectionTitle,children:"Font Weights"}),e.jsx("div",{className:n.grid,children:["regular","medium","semibold","bold"].map(s=>e.jsxs("div",{className:n.row,children:[e.jsx("div",{className:n.label,children:s}),e.jsx("p",{className:n.text,style:{fontWeight:`var(--font-weight-${s})`},children:"The quick brown fox jumps over the lazy dog"})]},s))})]}),e.jsxs("div",{className:n.sectionContainer,children:[e.jsx("h3",{className:n.sectionTitle,children:"Line Heights"}),e.jsx("div",{className:n.grid,children:["tight","normal","relaxed"].map(s=>e.jsxs("div",{className:n.row,children:[e.jsx("div",{className:n.label,children:s}),e.jsx("p",{className:n.text,style:{lineHeight:`var(--font-lineHeight-${s})`,maxWidth:"600px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]},s))})]})]}),r={args:{children:e.jsx(o,{})}},a={args:{children:e.jsx(o,{}),theme:{color:{primary:"#FF6B6B",primaryHover:"#FF5252",secondary:"#4ECDC4",secondaryHover:"#45B7AF",background:"#F7F7F7",surface:"#FFFFFF",elevation:"#F0F0F0",text:{primary:"#2C3E50",secondary:"#34495E",muted:"#95A5A6"},border:"#E0E0E0",shadow:"rgba(0, 0, 0, 0.1)",warning:"#FFB900",error:"#FF4444",info:"#2196F3",success:"#00C851",dark:"#2C3E50",light:"#FFFFFF"},font:{sans:"Roboto, sans-serif",mono:"Fira Code, monospace",size:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",h2:"1.5rem",h1:"1.875rem"},lineHeight:{tight:"1.2",normal:"1.5",relaxed:"1.75"},weight:{regular:"400",medium:"500",semibold:"600",bold:"700"}},radius:{sm:"4px",md:"8px",lg:"16px"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <TypographyShowcase />
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <TypographyShowcase />,
    theme: {
      color: {
        primary: '#FF6B6B',
        primaryHover: '#FF5252',
        secondary: '#4ECDC4',
        secondaryHover: '#45B7AF',
        background: '#F7F7F7',
        surface: '#FFFFFF',
        elevation: '#F0F0F0',
        text: {
          primary: '#2C3E50',
          secondary: '#34495E',
          muted: '#95A5A6'
        },
        border: '#E0E0E0',
        shadow: 'rgba(0, 0, 0, 0.1)',
        warning: '#FFB900',
        error: '#FF4444',
        info: '#2196F3',
        success: '#00C851',
        dark: '#2C3E50',
        light: '#FFFFFF'
      },
      font: {
        sans: 'Roboto, sans-serif',
        mono: 'Fira Code, monospace',
        size: {
          xs: '0.75rem',
          sm: '0.875rem',
          md: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          h2: '1.5rem',
          h1: '1.875rem'
        },
        lineHeight: {
          tight: '1.2',
          normal: '1.5',
          relaxed: '1.75'
        },
        weight: {
          regular: '400',
          medium: '500',
          semibold: '600',
          bold: '700'
        }
      },
      radius: {
        sm: '4px',
        md: '8px',
        lg: '16px'
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","CustomTheme"];export{a as CustomTheme,r as Default,g as __namedExportsOrder,u as default};

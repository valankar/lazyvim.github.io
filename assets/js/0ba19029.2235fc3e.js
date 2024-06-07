"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[1236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),s=a(6550),i=a(1980),p=a(7392),u=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,p]=k({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),v=(()=>{const e=i??m;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var v=a(2389);const b="tabList__CuJ",g="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==s&&(m(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},o,{className:(0,r.Z)("tabs__item",g,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return l.createElement(T,(0,n.Z)({key:String(t)},e))}},6081:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),o=a(5162);const s={},i="Haskell",p={unversionedId:"extras/lang/haskell",id:"extras/lang/haskell",title:"Haskell",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/lang/haskell.md",sourceDirName:"extras/lang",slug:"/extras/lang/haskell",permalink:"/extras/lang/haskell",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/lang/haskell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/extras/lang/go"},next:{title:"Helm",permalink:"/extras/lang/helm"}},u={},m=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"haskell-tools.nvim",id:"haskell-toolsnvim",level:2},{value:"mason.nvim",id:"masonnvim",level:2},{value:"mason.nvim",id:"masonnvim-1",level:2},{value:"neotest-haskell",id:"neotest-haskell",level:2},{value:"haskell-snippets.nvim",id:"haskell-snippetsnvim",level:2},{value:"LuaSnip",id:"luasnip",level:2},{value:"telescope_hoogle",id:"telescope_hoogle",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"telescope.nvim <em>(optional)</em>",id:"telescopenvim-optional",level:2},{value:"nvim-dap <em>(optional)</em>",id:"nvim-dap-optional",level:2},{value:"neotest <em>(optional)</em>",id:"neotest-optional",level:2},{value:"telescope.nvim <em>(optional)</em>",id:"telescopenvim-optional-1",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"haskell"},(0,l.kt)("inlineCode",{parentName:"h1"},"Haskell")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,l.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Alternatively, you can add it to your ",(0,l.kt)("code",null,"lazy.nvim")," imports"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.haskell" },\n    { import = "plugins" },\n  },\n})\n'))),(0,l.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,l.kt)("h2",{id:"nvim-treesitter"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,l.kt)("p",null," Add Haskell to treesitter"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { ensure_installed = { "haskell" } }\n'))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = { ensure_installed = { "haskell" } },\n}\n')))),(0,l.kt)("h2",{id:"haskell-toolsnvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/mrcjkb/haskell-tools.nvim"},"haskell-tools.nvim")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mrcjkb/haskell-tools.nvim",\n  version = "^3",\n  ft = { "haskell", "lhaskell", "cabal", "cabalproject" },\n  dependencies = {\n    { "nvim-telescope/telescope.nvim", optional = true },\n  },\n  config = function()\n    local ok, telescope = pcall(require, "telescope")\n    if ok then\n      telescope.load_extension("ht")\n    end\n  end,\n}\n')))),(0,l.kt)("h2",{id:"masonnvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { ensure_installed = { "haskell-language-server" } }\n'))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = { ensure_installed = { "haskell-language-server" } },\n}\n')))),(0,l.kt)("h2",{id:"masonnvim-1"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = { ensure_installed = { "haskell-debug-adapter" } }\n'))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = { ensure_installed = { "haskell-debug-adapter" } },\n}\n')))),(0,l.kt)("h2",{id:"neotest-haskell"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/mrcjkb/neotest-haskell"},"neotest-haskell")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{ "mrcjkb/neotest-haskell" }\n')))),(0,l.kt)("h2",{id:"haskell-snippetsnvim"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/mrcjkb/haskell-snippets.nvim"},"haskell-snippets.nvim")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mrcjkb/haskell-snippets.nvim",\n  dependencies = { "L3MON4D3/LuaSnip" },\n  ft = { "haskell", "lhaskell", "cabal", "cabalproject" },\n  config = function()\n    local haskell_snippets = require("haskell-snippets").all\n    require("luasnip").add_snippets("haskell", haskell_snippets, { key = "haskell" })\n  end,\n}\n')))),(0,l.kt)("h2",{id:"luasnip"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{ "L3MON4D3/LuaSnip" }\n')))),(0,l.kt)("h2",{id:"telescope_hoogle"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/luc-tielen/telescope_hoogle"},"telescope_hoogle")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "luc-tielen/telescope_hoogle",\n  ft = { "haskell", "lhaskell", "cabal", "cabalproject" },\n  dependencies = {\n    { "nvim-telescope/telescope.nvim" },\n  },\n  config = function()\n    local ok, telescope = pcall(require, "telescope")\n    if ok then\n      telescope.load_extension("hoogle")\n    end\n  end,\n}\n')))),(0,l.kt)("h2",{id:"nvim-lspconfig"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,l.kt)("p",null," Make sure lspconfig doesn't start hls,\nas it conflicts with haskell-tools"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  setup = {\n    hls = function()\n      return true\n    end,\n  },\n}\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    setup = {\n      hls = function()\n        return true\n      end,\n    },\n  },\n}\n')))),(0,l.kt)("h2",{id:"telescopenvim-optional"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-telescope/telescope.nvim", optional = true }\n')))),(0,l.kt)("h2",{id:"nvim-dap-optional"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = { ensure_installed = { "haskell-debug-adapter" } },\n    },\n  },\n}\n')))),(0,l.kt)("h2",{id:"neotest-optional"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-neotest/neotest"},"neotest")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  adapters = {\n    ["neotest-haskell"] = {},\n  },\n}\n'))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-neotest/neotest",\n  optional = true,\n  dependencies = {\n    { "mrcjkb/neotest-haskell" },\n  },\n  opts = {\n    adapters = {\n      ["neotest-haskell"] = {},\n    },\n  },\n}\n')))),(0,l.kt)("h2",{id:"telescopenvim-optional-1"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/nvim-telescope/telescope.nvim"},"telescope.nvim")," ",(0,l.kt)("em",{parentName:"h2"},"(optional)")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,l.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-telescope/telescope.nvim" }\n')))))}d.isMDXComponent=!0}}]);
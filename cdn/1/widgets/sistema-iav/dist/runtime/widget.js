System.register(["jimu-core","jimu-arcgis","esri/layers/GraphicsLayer","jimu-core/react","esri/widgets/Sketch","esri/geometry/geometryEngine"],(function(e,t){var a={},o={},r={},n={},i={},l={};return{setters:[function(e){a.React=e.React},function(e){o.JimuMapViewComponent=e.JimuMapViewComponent},function(e){r.default=e.default},function(e){n.useEffect=e.useEffect,n.useRef=e.useRef,n.useState=e.useState},function(e){i.default=e.default},function(e){l.default=e.default}],execute:function(){e((()=>{var e={942:e=>{"use strict";e.exports=l},231:e=>{"use strict";e.exports=r},560:e=>{"use strict";e.exports=i},826:e=>{"use strict";e.exports=o},891:e=>{"use strict";e.exports=a},315:e=>{"use strict";e.exports=n}},t={};function c(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,c),r.exports}c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var s={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(s),c.d(s,{__set_webpack_public_path__:()=>l,default:()=>i});var e=c(891),t=c(826),a=c(231),o=c(315),r=c(560),n=c(942);const i=i=>{var l;const[c]=(0,o.useState)(new a.default),[s,u]=(0,o.useState)(0),[d,m]=(0,o.useState)(0),[p,f]=(0,o.useState)(0),[g,v]=(0,o.useState)([]),[y,w]=(0,o.useState)(""),[b,h]=(0,o.useState)(!1),[R,E]=(0,o.useState)(""),x=(0,o.useRef)(),S=()=>{return e=void 0,t=void 0,o=function*(){if(x.current){const e=x.current.view.map.findLayerById("18f07ee94ee-layer-3");if(e){yield e.load();const t=e.createQuery();t.outFields=["NM_MUN","POPULACAO","SHAPE"],t.returnGeometry=!0;const a=(yield e.queryFeatures(t)).features.map((e=>({name:e.attributes.NM_MUN,population:e.attributes.POPULACAO,location:e.geometry})));v(a)}else console.log("Feature Layer not found.")}},new((a=void 0)||(a=Promise))((function(r,n){function i(e){try{c(o.next(e))}catch(e){n(e)}}function l(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}));var e,t,a,o};return(0,o.useEffect)((()=>{console.log(g),f(d>0?s/d:0)}),[s,d,g]),e.React.createElement("div",{className:"widget-starter jimu-widget"},e.React.createElement("div",{className:"container",style:{width:"48vw",position:"fixed",bottom:"5%",left:"50%",transform:"translateX(-50%)",backgroundColor:"#008080",borderRadius:"1em",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}},e.React.createElement("div",{className:"input-group",style:{marginRight:"2vw"}},e.React.createElement("label",{className:"input-group-text",style:{color:"white",marginRight:"0.5em"}},"Cidade"),b?e.React.createElement("input",{type:"number",className:"form-control",value:R,onChange:e=>{const t=e.target.value;isNaN(Number(t))||(E(t),m(Number(t)))},style:{minWidth:"12vw"},placeholder:"Custom Population"}):e.React.createElement("select",{className:"form-select",value:y,onChange:e=>{const t=e.target.value;if(w(t),"all"===t)h(!0),m(0);else{h(!1);const e=g.find((e=>e.name===t));e&&(m(e.population),x.current.view.goTo({target:e.location,zoom:12}))}},style:{minWidth:"10vw"}},e.React.createElement("option",{value:"",disabled:!0},"Selecione a cidade"),e.React.createElement("option",{value:"all"},"Inserir manualmente"),g.map((t=>e.React.createElement("option",{key:t.name,value:t.name},t.name))))),e.React.createElement("div",{className:"city-info",style:{marginRight:"2vw",flex:"1"}},e.React.createElement("p",{style:{margin:"0.5vw 0",color:"white"}},"Área Delimitada Total: ",s.toFixed(2)," m²"),e.React.createElement(t.JimuMapViewComponent,{useMapWidgetId:null===(l=i.useMapWidgetIds)||void 0===l?void 0:l[0],onActiveViewChange:e=>{if(e){x.current=e,e.view.map.add(c);const t=new r.default({layer:c,view:e.view,availableCreateTools:["polyline","polygon","rectangle"],creationMode:"update",visibleElements:{createTools:{point:!1,circle:!1,polyline:!1,rectangle:!1},selectionTools:{"lasso-selection":!1,"rectangle-selection":!1},settingsMenu:!1,undoRedoMenu:!1}});e.view.ui.add(t,"top-right"),t.on("create",(e=>{if("complete"===e.state&&"polygon"===e.graphic.geometry.type){c.add(e.graphic);const t=e.graphic.geometry,a=n.default.geodesicArea(t,"square-meters");u((e=>e+a))}})),S()}}}),e.React.createElement("p",{style:{margin:"0.5vw 0",color:"white"}},"População: ",d),e.React.createElement("p",{style:{margin:"0.5vw 0",color:"white",backgroundColor:"green",borderRadius:"1em",padding:"0.5em"}},"Índice de Área Verde (IAV): ",p.toFixed(2))),e.React.createElement("button",{className:"clear-button",onClick:()=>{c.removeAll(),u(0),f(0)},style:{backgroundColor:"red",color:"white",border:"none",padding:"0.5vw 1vw",borderRadius:"0.5em"}},"Limpar Polígonos")))};function l(e){c.p=e}})(),s})())}}}));
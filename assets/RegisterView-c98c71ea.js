import{u as x,a as w,r,o as g,b as V,c as k,d as I,e as P,f as o,w as u,v as d,g as R,h as E,i as S,j as U,k as j}from"./index-50294a89.js";function m(e){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(e)}function v(e,t){if(!e.vueAxiosInstalled){var s=_(t)?N(t):t;if(O(s)){var l=C(e);if(l){var c=l<3?H:A;Object.keys(s).forEach(function(i){c(e,i,s[i])}),e.vueAxiosInstalled=!0}else console.error("[vue-axios] unknown Vue version")}else console.error("[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }")}}function H(e,t,s){Object.defineProperty(e.prototype,t,{get:function(){return s}}),e[t]=s}function A(e,t,s){e.config.globalProperties[t]=s,e[t]=s}function _(e){return e&&typeof e.get=="function"&&typeof e.post=="function"}function N(e){return{axios:e,$http:e}}function O(e){return m(e)==="object"&&Object.keys(e).every(function(t){return _(e[t])})}function C(e){return e&&e.version&&Number(e.version.split(".")[0])}(typeof exports>"u"?"undefined":m(exports))=="object"?module.exports=v:typeof define=="function"&&define.amd?define([],function(){return v}):window.Vue&&window.axios&&window.Vue.use&&Vue.use(v,window.axios);const M={class:"card p-5 mt-5 shadow",style:{width:"50rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},T=o("h2",null,"Register",-1),B=o("br",null,null,-1),L=o("br",null,null,-1),D=["onSubmit"],W={class:"mb-3"},$=o("label",{for:"exampleInputEmail1",class:"form-label"},"Name",-1),q={class:"mb-3"},z=o("label",{for:"exampleInputEmail1",class:"form-label"},"Username",-1),F={class:"mb-3"},G=o("label",{for:"exampleInputEmail1",class:"form-label"},"Address",-1),J={class:"mb-3"},K=o("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),Q=o("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1),X={class:"mb-3"},Y=o("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),Z={class:"mb-3"},ee=o("label",{for:"exampleInputPassword1",class:"form-label"},"confirmasi Password",-1),oe=o("br",null,null,-1),te=o("button",{type:"submit",class:"btn btn-primary"},"Register",-1),se=o("a",{style:{"text-decoration":"none!important",color:"black"}},"Have Account?",-1),ae={__name:"RegisterView",setup(e){const t=x();w();const s=r(""),l=r(""),c=r(""),i=r(""),f=r(""),b=r("");g(()=>{V.value==!0&&t.push({path:"/"})});const y=()=>{j.post("http://3.0.184.169:3000/admin/register",{name:s.value,username:l.value,address:c.value,email:i.value,password:f.value,confPassword:b.value},{headers:{"Content-Type":"multipart/form-data"}}).then(function(p){console.log(p),t.push({path:"/login"})}).catch(function(p){console.log(p)})};return(p,n)=>{const h=k("RouterLink");return I(),P("div",M,[T,B,L,o("form",{onSubmit:U(y,["prevent"])},[o("div",W,[$,u(o("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":n[0]||(n[0]=a=>s.value=a),"aria-describedby":"emailHelp"},null,512),[[d,s.value]])]),o("div",q,[z,u(o("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":n[1]||(n[1]=a=>l.value=a),"aria-describedby":"emailHelp"},null,512),[[d,l.value]])]),o("div",F,[G,u(o("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":n[2]||(n[2]=a=>c.value=a),"aria-describedby":"emailHelp"},null,512),[[d,c.value]])]),o("div",J,[K,u(o("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":n[3]||(n[3]=a=>i.value=a),"aria-describedby":"emailHelp"},null,512),[[d,i.value]]),Q]),o("div",X,[Y,u(o("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":n[4]||(n[4]=a=>f.value=a)},null,512),[[d,f.value]])]),o("div",Z,[ee,u(o("input",{type:"password",class:"form-control",id:"confPassword","onUpdate:modelValue":n[5]||(n[5]=a=>b.value=a)},null,512),[[d,b.value]])]),oe,te,R("  "),E(h,{to:"/login"},{default:S(()=>[se]),_:1})],40,D)])}}};export{ae as default};

import{u as p}from"./request-dab08de8.js";import{_ as i,b as c,r as a,o as f,c as x,a as e,w as t,h as b}from"./index-ae2a80f0.js";const v={class:"login"},w={__name:"index",setup(y){const u=p(),o=c({username:"",password:""}),_=()=>{u.login(o)};return(V,l)=>{const d=a("el-input"),n=a("el-form-item"),r=a("el-button"),m=a("el-form");return f(),x("div",v,[e(m,{model:o.value,"label-width":"100px",style:{width:"500px",display:"inline-block"}},{default:t(()=>[e(n,{label:"账号"},{default:t(()=>[e(d,{modelValue:o.value.username,"onUpdate:modelValue":l[0]||(l[0]=s=>o.value.username=s),type:"text",autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(n,{label:"密码"},{default:t(()=>[e(d,{modelValue:o.value.password,"onUpdate:modelValue":l[1]||(l[1]=s=>o.value.password=s),type:"password",autocomplete:"off","show-password":""},null,8,["modelValue"])]),_:1}),e(n,null,{default:t(()=>[e(r,{type:"primary",onClick:_},{default:t(()=>[b("登录")]),_:1})]),_:1})]),_:1},8,["model"])])}}},k=i(w,[["__scopeId","data-v-48b2076d"]]);export{k as default};

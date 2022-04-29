var V=Object.defineProperty,I=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var F=(e,t,o)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))$.call(t,o)&&F(e,o,t[o]);if(N)for(var o of N(t))B.call(t,o)&&F(e,o,t[o]);return e},C=(e,t)=>I(e,S(t));import{u as T,a as w,b as E}from"./UseDialog.7d7ff299.js";import{u as O,c as P,g as R,d as x}from"./department.cc67df28.js";import{_ as L}from"./index.ac7bf4b1.js";import{b as y,c as M}from"./element-plus.55dd86f2.js";import{r as v,f as U,Z as c,o as b,K as k,L as i,a as u,T as d,R as f,i as W,Q as q,S as K}from"./@vue.9f1b68af.js";import"./vue-router.949634a5.js";import"./vuex.49683c05.js";import"./moment.a5c37c1e.js";import"./axios.8b958ab2.js";import"./js-cookie.31874410.js";import"./@element-plus.a205db37.js";import"./nprogress.2f56b1fe.js";import"./lodash-es.3d1d9723.js";import"./@vueuse.ef512f30.js";import"./@popperjs.da6c49cb.js";import"./@ctrl.2e36ce53.js";import"./dayjs.644349ef.js";import"./async-validator.5d25c98b.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";const Q={props:{value:{type:Boolean,default:!1},type:{type:String,default:""},defaultForm:{type:Object,default:()=>({})}},emits:["cancel","confirm"],setup(e,{emit:t}){const o=v(!1),a=v(null),_={defaultForm:g({deptName:"",parentId:0},e.defaultForm),defaultRules:{deptName:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:"blur"}]},confirm:n=>{if(o.value)return;o.value=!0;const m=n.id?"\u7F16\u8F91\u6210\u529F":"\u65B0\u589E\u6210\u529F";(n.id?O:P)(n).then(()=>{y({type:"success",message:m,duration:1e3}),r.value=!1,o.value=!1,t("confirm")}).finally(()=>{o.value=!1})},cancel:()=>{r.value=!1,t("cancel")}};U(()=>e.defaultForm,n=>{l.value==="\u65B0\u589E"&&n.id?s.setForm({parentId:n.id,deptName:""}):s.setForm(C(g({},n),{parentId:n.parentId?n.parentId:0}))});const s=T(a,_),{getTitle:l,visible:r}=w(e,{create:"\u65B0\u589E",edit:"\u7F16\u8F91"});return g({visible:r,title:l,formRef:a,btnLoading:o},s)}},Z={class:"dialog-footer"},z=f("\u53D6\u6D88"),A=f("\u786E\u5B9A");function G(e,t,o,a,_,s){const l=c("el-input"),r=c("el-form-item"),n=c("el-form"),m=c("el-button"),h=c("el-dialog");return b(),k(h,{modelValue:a.visible,"onUpdate:modelValue":t[1]||(t[1]=p=>a.visible=p),title:a.title,"before-close":e.handleCancel},{footer:i(()=>[u("span",Z,[d(m,{type:"default",onClick:e.handleCancel},{default:i(()=>[z]),_:1},8,["onClick"]),d(m,{type:"primary",loading:a.btnLoading,onClick:e.handleConfirm},{default:i(()=>[A]),_:1},8,["loading","onClick"])])]),default:i(()=>[d(n,{ref:"formRef",model:e.form,rules:e.rules},{default:i(()=>[d(r,{label:"\u90E8\u95E8\u540D\u79F0:",prop:"deptName"},{default:i(()=>[d(l,{modelValue:e.form.deptName,"onUpdate:modelValue":t[0]||(t[0]=p=>e.form.deptName=p),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",maxlength:12},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title","before-close"])}var H=L(Q,[["render",G]]);const J={components:{CreateDialog:H},setup(){const e=v([]),t=()=>{R().then(s=>{e.value=o(s.root)})},o=(s=[],l=0)=>{if(s.length)return s.forEach(r=>{r.parentId=l,r.childrenDeptList&&r.childrenDeptList.length&&r.childrenDeptList.forEach(n=>{n.parentId=r.id,n.childrenDeptList&&n.childrenDeptList.length&&o(n.childrenDeptList,n.id)})}),s},a=E(t),_=(s,l)=>{M.confirm("\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{x({id:l}).then(()=>{y({type:"success",message:"\u5220\u9664\u6210\u529F"}),t()})}).catch(()=>{y({type:"info",message:"\u53D6\u6D88\u5220\u9664"})})};return W(()=>{t()}),C(g({},a),{dataSource:e,handleDelete:_})}},X={class:"container"},Y=f(" \u65B0\u5EFA\u90E8\u95E8 "),j={class:"content"},ee={class:"custom-tree-node flex-box flex-between"},te=f(" \u6DFB\u52A0\u5B50\u7EA7 "),oe=f(" \u7F16\u8F91 "),ne=f(" \u5220\u9664 ");function ae(e,t,o,a,_,s){const l=c("el-button"),r=c("el-tree"),n=c("CreateDialog"),m=c("PageWrapper");return b(),k(m,null,{default:i(()=>[u("div",X,[!a.dataSource||!a.dataSource.length?(b(),k(l,{key:0,type:"primary",onClick:t[0]||(t[0]=h=>e.handleOperationClick("create"))},{default:i(()=>[Y]),_:1})):q("",!0),u("div",j,[d(r,{data:a.dataSource,"node-key":"id","default-expand-all":"",props:{label:"deptName",children:"childrenDeptList"}},{default:i(({node:h,data:p})=>[u("span",ee,[u("span",null,K(p.deptName),1),u("span",null,[d(l,{type:"text",onClick:D=>e.handleOperationClick("create",{id:p.id})},{default:i(()=>[te]),_:2},1032,["onClick"]),d(l,{type:"text",onClick:D=>e.handleOperationClick("edit",p)},{default:i(()=>[oe]),_:2},1032,["onClick"]),d(l,{type:"text",onClick:D=>a.handleDelete(h,p.id),style:{color:"#f56c6c"}},{default:i(()=>[ne]),_:2},1032,["onClick"])])])]),_:1},8,["data"])])]),d(n,{value:e.showDialog,type:e.typeDialog,defaultForm:e.defaultForm,onCancel:e.handleCancel,onConfirm:e.handleConfirm},null,8,["value","type","defaultForm","onCancel","onConfirm"])]),_:1})}var Ve=L(J,[["render",ae]]);export{Ve as default};

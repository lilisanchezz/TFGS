import{u as _,r,w as h,h as p,f as u,i as f,c as s,d as v,t as d,F as w,j as g,k,a as o,e as C,l as x,m as y}from"./index-PctnPn40.js";const V={key:0},E={__name:"ClassView",setup(B){const l=_(),n=r(l.params.id);h(()=>l.params.id,e=>n.value=e);const c=r(""),a=r("");return p(async()=>{try{const e=await u({method:"get",url:`http://localhost:3000/languages/${n.value}`,withCredentials:!1});c.value=e.data.idioma;const i=await u({method:"get",url:"http://localhost:3000/user/all",withCredentials:!1});a.value=i.data}catch(e){console.error("Error al obtener la lista de restaurantes",e)}console.log(a)}),(e,i)=>{const m=f("router-link");return o(),s("main",null,[v("h1",null,d(c.value),1),a.value?(o(),s("ul",V,[(o(!0),s(w,null,g(a.value,t=>(o(),s("li",{class:"listUsers",key:t._id},[C(m,{class:"users",to:{name:"profile",params:{id:t._id}}},{default:x(()=>[y(d(t.name+"	"+t.email),1)]),_:2},1032,["to"])]))),128))])):k("",!0)])}}};export{E as default};
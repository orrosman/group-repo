(()=>{"use strict";var e,t,n,r,a,o={138:(e,t,n)=>{n.a(e,(async e=>{var t=n(837);const r=document.querySelector("#phones-list"),a=document.querySelector("#person-section"),o=document.querySelector("#add-contact"),c=document.createElement("ul");c.setAttribute("class","list-group");const i=await t.Hv();for(const e of i){const n=document.createElement("li");n.setAttribute("class","list-group-item d-flex justify-content-between align-items-center"),n.innerText=e.name,n.addEventListener("click",(async()=>{event.preventDefault(),u(await s(e.id))}));const r=document.createElement("span");r.setAttribute("class","badge"),r.innerText="❌",r.addEventListener("click",(()=>{event.preventDefault(),t.FK(e.id)})),n.appendChild(r),c.appendChild(n)}async function s(e){return await t.Ay(e)}function u(e){if(a.firstChild)for(;a.firstChild;)a.removeChild(a.firstChild);for(const t of Object.values(e)){const e=document.createElement("div");e.innerText=t,a.appendChild(e)}}r.appendChild(c),o.addEventListener("click",(async()=>{event.preventDefault();const e=document.querySelector("#name-input").value,n=document.querySelector("#number-input").value,r=await t.ev(e,n);console.log(r)})),e()}),1)},837:(e,t,n)=>{n.d(t,{Hv:()=>a,Ay:()=>o,ev:()=>c,FK:()=>i});const r="https://hidden-beach-46824.herokuapp.com";async function a(){try{return(await axios.get(`${r}/api/persons`)).data}catch(e){console.log(e)}}async function o(e){try{return(await axios.get(`${r}/api/persons/${e}`)).data}catch(e){console.log(e)}}async function c(e,t){try{return(await axios.post(`${r}/api/persons`,{name:e,number:t})).data}catch(e){console.log(e)}}async function i(e){try{return(await axios.delete(`${r}/api/persons/${e}`)).data}catch(e){console.log(e)}}}},c={};function i(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return o[e](n,n.exports,i),n.exports}e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r=e=>!--e.r&&e(),a=(e,t)=>e?e.push(t):r(t),i.a=(o,c,i)=>{var s,u,l,p=i&&[],d=o.exports,f=!0,m=!1,v=(t,n,r)=>{m||(m=!0,n.r+=t.length,t.map(((t,a)=>t[e](n,r))),m=!1)},y=new Promise(((e,t)=>{l=t,u=()=>(e(d),n(p),p=0)}));y[t]=d,y[e]=(e,t)=>{if(f)return r(e);s&&v(s,e,t),a(p,e),y.catch(t)},o.exports=y,c((o=>{if(!o)return u();var c,i;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var c=[];o.then((e=>{i[t]=e,n(c),c=0}));var i={};return i[e]=(e,t)=>(a(c,e),o.catch(t)),i}}var s={};return s[e]=e=>r(e),s[t]=o,s})))(o);var l=new Promise(((e,n)=>{(c=()=>e(i=s.map((e=>e[t])))).r=0,v(s,c,n)}));return c.r?l:i})).then(u,l),f=!1},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i(138)})();
import{h as t}from"./request-ZaKeb_ww.js";const o=()=>t.get("/getFamily"),s=e=>t.post("/getFamily",e),a=e=>(console.log(e),console.log(e._id),t.patch(`/getFamily/${e._id}`,e)),i=e=>t.delete(`/getFamily/${e}`);export{s as a,i as d,o as g,a as u};

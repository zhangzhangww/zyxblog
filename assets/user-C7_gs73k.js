import{h as s}from"./request-ZaKeb_ww.js";const r=e=>s.post("/login",e),o=()=>s.get("/getUser"),n=e=>s.post("/addUser",e),d=e=>(console.log(e),console.log(e._id),s.patch(`/updataUser/${e._id}`,e)),g=e=>s.delete(`/deleteUser/${e}`);export{n as a,r as b,g as d,o as g,d as u};

import{_ as D,z as L,r as l,A as S,f as Y,h as A,o as u,c as v,b as t,B as m,C as y,u as o,D as f,F as b,j as I,t as g,y as N,x as V,w as z,p as T,a as E}from"./index-Acd9_127.js";import{g as F}from"./index-DP2s6OXS.js";import{g as P}from"./category-C8RLufTB.js";import"./request-ZaKeb_ww.js";const p=r=>(T("data-v-9bf36763"),r=r(),E(),r),U={class:"search1"},$={class:"search-item"},j=p(()=>t("div",{class:"back-image"},null,-1)),R={class:"posts-list"},X={class:"posts-item__infos"},Z={class:"info__dates"},q=p(()=>t("span",{class:"yyc yy-date"},null,-1)),G={class:"info__title"},H=p(()=>t("div",{class:"info__total"},[t("div",{class:"total__item"},[t("span",{class:"yyc yy-fire"}),t("span",null,"33阅读")]),t("div",{class:"total__item"},[t("span",{class:"yyc yy-comment"}),t("span",null,"22条评论")]),t("div",{class:"total__item"},[t("span",{class:"yyc yy-heart"}),t("span",null,"ZYX")])],-1)),J={key:0,class:"paging"},K=["disabled"],O={class:"paging__size"},Q=p(()=>t("span",null,"/",-1)),W=["disabled"],tt={__name:"search",setup(r){const n=L([]),c=l([]),k=l([]);l(0);const x=l("全部分类");S(()=>n.filter(s=>s.categoryName==x.value));const h=l(3),i=l(1),e=l(1),C=()=>{e.value-=1,d()},w=()=>{e.value+=1,d()};async function d(){try{const s=await F(e.value,h.value,c.value);c.value.length>0?(i.value=Math.ceil(s.data.data.length/h.value),n.splice(0,n.length,...s.data.data)):(i.value=Math.ceil(s.data.total/h.value),n.splice(0,n.length,...s.data.data))}catch(s){console.error("获取文章列表失败:",s)}}Y(()=>{d(),P().then(s=>{k.value=s.data.data})});const M=()=>{e.value=1,d()};return(s,_)=>{const B=A("routerLink");return u(),v(b,null,[t("div",U,[t("div",$,[m(t("input",{class:"search-item-text",type:"search","onUpdate:modelValue":_[0]||(_[0]=a=>f(c)?c.value=a:null),onChange:M,placeholder:"请输入标题关键字进行搜索(Enter回车)…"},null,544),[[y,o(c)]])])]),j,t("div",R,[(u(!0),v(b,null,I(o(n),a=>(u(),V(B,{key:a.id,to:`/detail/${a._id}`,class:"posts-item shadow-box"},{default:z(()=>[t("div",X,[t("div",Z,[q,t("span",null,"发布于"+g(s.$moment(a.createTime).format("YYYY-MM-DD hh:mm:ss")),1)]),t("h3",G,g(a.title),1),H])]),_:2},1032,["to"]))),128))]),o(i)>1?(u(),v("div",J,[t("button",{class:"paging__button",onClick:C,disabled:o(e)===1},"上一页",8,K),t("div",O,[m(t("input",{type:"text",class:"paging__current","onUpdate:modelValue":_[1]||(_[1]=a=>f(e)?e.value=a:null)},null,512),[[y,o(e)]]),Q,t("span",null,g(o(i)),1)]),t("button",{class:"paging__button",onClick:w,disabled:o(e)===o(i)},"下一页",8,W)])):N("",!0)],64)}}},lt=D(tt,[["__scopeId","data-v-9bf36763"]]);export{lt as default};
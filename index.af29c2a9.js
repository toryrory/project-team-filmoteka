var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("lhLDm");var o=r("96LRb"),a=r("lhLDm"),i=r("2QMTS");const s=new(0,a.default),l={mediaType:"movie",lang:"en-US",page:s.page,include_adult:!1};o.refs.form.addEventListener("submit",(function(e){if(e.preventDefault(),s.actualQuery=e.currentTarget.elements.filmname.value,!s.actualQuery)return o.refs.formNotification.textContent="The text field is empty. Please type something into it and retry.",void setTimeout((()=>o.refs.formNotification.textContent=""),3e3);s.fetchWithSearchFilmData(l).then((e=>{if(!e.data.results.length)return o.refs.formNotification.textContent="Search result not successful. Enter the correct movie name and",void setTimeout((()=>o.refs.formNotification.textContent=""),3e3);(0,i.creatCards)(e.data.results)}))}));i=r("2QMTS");(o=r("96LRb")).refs.changeColor.addEventListener("click",(function(){document.body.classList.toggle("dark")})),r("8DW4i");a=r("lhLDm"),o=r("96LRb");var d=r("8DW4i");const c=new(0,a.default);async function f(e){e.target!==o.refs.modalCloseBtn&&e.target!==o.refs.backdrop&&27!==e.keyCode||(document.body.classList.remove("no-scroll"),o.refs.backdrop.classList.add("is-hidden")),o.refs.backdrop.removeEventListener("click",f),window.removeEventListener("keydown",f)}o.refs.gallery.addEventListener("click",(async function(e){if(!e.target.classList.contains("card-image"))return;o.refs.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),o.refs.modalContent.innerHTML="";const t=e.target.dataset.id;c.getCurrentFilm({id:t}).then((e=>(0,d.createMarkup)(e.data))).catch((e=>console.log(e))),o.refs.backdrop.addEventListener("click",f),window.addEventListener("keydown",f)})),o.refs.modalCloseBtn.addEventListener("click",f),r("l3Yx2");o=r("96LRb");const u=new(0,(a=r("lhLDm")).default);let m=0,p=[],L=[];const y=document.querySelector(".modal__trailer-btn"),g=document.querySelector(".closebtn"),v=document.querySelector("#overlay-video"),h=document.querySelector("#overlay-content");o.refs.gallery.addEventListener("click",(function(e){m=Number(e.target.dataset.id)})),o.refs.backdrop.addEventListener("click",(function(e){"▶"===e.target.innerText&&(L=[],u.fetchTrailer(m).then((e=>{p=e.data.results,p.length?(console.log(p),v.style.width="100%",p.forEach((e=>{let{key:t,site:n,name:r,type:o}=e;"YouTube"===n&&"Trailer"===o&&L.push(`\n                    <iframe src="https://www.youtube.com/embed/${t}" \n                    title="${r}" frameborder="0" allow="accelerometer; autoplay; \n                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                    `)})),h.innerHTML=L.join("")):(y.style.display="none",alert("No found trailers"))})))})),g.addEventListener("click",(function(){v.style.width="0%"})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(e.preventDefault(),v.style.width="0%")}));document.querySelector(".overlay__backdrop").addEventListener("click",(function(e){e.currentTarget===e.target&&(e.preventDefault(),v.style.width="0%")}));a=r("lhLDm"),o=r("96LRb"),i=r("2QMTS");const w=new(0,a.default);let b=1;const k={mediaType:"movie",timeWindow:"week"};o.refs.paginationListItemPrev.addEventListener("click",(function(){if(1===b)return;o.refs.gallery.innerHTML="",b-=1,w.actualPage=b,o.refs.paginationListItemPage.innerHTML=b,w.fetchWithAllFilmsData(k).then((e=>(0,i.creatCards)(e.data.results)))})),o.refs.paginationListItemNext.addEventListener("click",(function(){o.refs.gallery.innerHTML="",b+=1,w.actualPage=b,o.refs.paginationListItemPage.innerHTML=b,w.fetchWithAllFilmsData(k).then((e=>(0,i.creatCards)(e.data.results)))})),document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelector(".btn-goup");console.log("btn on"),window.onscroll=function(){window.pageYOffset>580?e.classList.remove("is-hidden"):e.classList.add("is-hidden")},e.addEventListener("click",(function(){console.log("это я"),window.scrollBy({top:-window.pageYOffset,behavior:"smooth"})}))})),(0,i.onCreat)();
//# sourceMappingURL=index.af29c2a9.js.map

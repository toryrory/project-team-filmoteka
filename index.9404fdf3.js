!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("90yji");var o=i("1RuQn"),a=i("90yji"),c=i("kvKoM"),s=new(0,a.default),d={mediaType:"movie",lang:"en-US",page:s.page,include_adult:!1};o.refs.form.addEventListener("submit",(function(e){if(e.preventDefault(),s.actualQuery=e.currentTarget.elements.filmname.value,!s.actualQuery)return o.refs.formNotification.textContent="The text field is empty. Please type something into it and retry.",void setTimeout((function(){return o.refs.formNotification.textContent=""}),3e3);s.fetchWithSearchFilmData(d).then((function(e){if(!e.data.results.length)return o.refs.formNotification.textContent="Search result not successful. Enter the correct movie name and",void setTimeout((function(){return o.refs.formNotification.textContent=""}),3e3);(0,c.creatCards)(e.data.results)}))}));c=i("kvKoM");(o=i("1RuQn")).refs.changeColor.addEventListener("click",(function(){document.body.classList.toggle("dark")})),i("eLVJN");var l=i("bpxeT"),u=i("2TvXO"),f=(a=i("90yji"),o=i("1RuQn"),i("eLVJN")),p=new(0,a.default);function m(){return(m=e(l)(e(u).mark((function t(n){var r;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.classList.contains("card-image")){e.next=2;break}return e.abrupt("return");case 2:o.refs.backdrop.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),o.refs.modalContent.innerHTML="",r=n.target.dataset.id,p.getCurrentFilm({id:r}).then((function(e){return(0,f.createMarkup)(e.data)})).catch((function(e){return console.log(e)})),o.refs.backdrop.addEventListener("click",v),window.addEventListener("keydown",v);case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=e(l)(e(u).mark((function t(n){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.target!==o.refs.modalCloseBtn&&n.target!==o.refs.backdrop&&27!==n.keyCode||(document.body.classList.remove("no-scroll"),o.refs.backdrop.classList.add("is-hidden")),o.refs.backdrop.removeEventListener("click",v),window.removeEventListener("keydown",v);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}o.refs.gallery.addEventListener("click",(function(e){return m.apply(this,arguments)})),o.refs.modalCloseBtn.addEventListener("click",v),i("6RLCr");o=i("1RuQn");var g=new(0,(a=i("90yji")).default),h=0,w=[],L=[],k=document.querySelector(".modal__trailer-btn"),b=document.querySelector(".closebtn"),E=document.querySelector("#overlay-video"),T=document.querySelector("#overlay-content");o.refs.gallery.addEventListener("click",(function(e){h=Number(e.target.dataset.id)})),o.refs.backdrop.addEventListener("click",(function(e){"▶"===e.target.innerText&&(L=[],g.fetchTrailer(h).then((function(e){(w=e.data.results).length?(console.log(w),E.style.width="100%",w.forEach((function(e){var t=e.key,n=e.site,r=e.name,i=e.type;"YouTube"===n&&"Trailer"===i&&L.push('\n                    <iframe src="https://www.youtube.com/embed/'.concat(t,'" \n                    title="').concat(r,'" frameborder="0" allow="accelerometer; autoplay; \n                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                    '))})),T.innerHTML=L.join("")):(k.style.display="none",alert("No found trailers"))})))})),b.addEventListener("click",(function(){E.style.width="0%"})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(e.preventDefault(),E.style.width="0%")})),document.querySelector(".overlay__backdrop").addEventListener("click",(function(e){e.currentTarget===e.target&&(e.preventDefault(),E.style.width="0%")}));a=i("90yji"),o=i("1RuQn"),c=i("kvKoM");var C=new(0,a.default),x=1,M={mediaType:"movie",timeWindow:"week"};o.refs.paginationListItemPrev.addEventListener("click",(function(){if(1===x)return;o.refs.gallery.innerHTML="",x-=1,C.actualPage=x,o.refs.paginationListItemPage.innerHTML=x,C.fetchWithAllFilmsData(M).then((function(e){return(0,c.creatCards)(e.data.results)}))})),o.refs.paginationListItemNext.addEventListener("click",(function(){o.refs.gallery.innerHTML="",x+=1,C.actualPage=x,o.refs.paginationListItemPage.innerHTML=x,C.fetchWithAllFilmsData(M).then((function(e){return(0,c.creatCards)(e.data.results)}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".btn-goup");console.log("btn on"),window.onscroll=function(){window.pageYOffset>580?e.classList.remove("is-hidden"):e.classList.add("is-hidden")},e.addEventListener("click",(function(){console.log("это я"),window.scrollBy({top:-window.pageYOffset,behavior:"smooth"})}))})),(0,c.onCreat)()}();
//# sourceMappingURL=index.9404fdf3.js.map
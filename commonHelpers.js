import{a as L,S as v,i as l}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w=async(a,r)=>{const s=new URLSearchParams({key:"43997509-fd1501e4e0a2c27eafb2a64d5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15});return await L.get(`https://pixabay.com/api/?${s}`)},O=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),M=(a,r)=>{const s=a.map(({largeImageURL:o,webformatURL:e,tags:t,likes:n,views:g,comments:h,downloads:b})=>`<li name="galleryItem" class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img src="${e}" alt="${t}" />
        </a>
        <div class="description">
          <p>Likes <span class="desc-span">${n}</span></p>
          <p>Views <span class="desc-span">${g}</span></p>
          <p>Comments <span class="desc-span">${h}</span></p>
          <p>Downloads <span class="desc-span">${b}</span></p>
        </div>
      </li>`).join("");r.insertAdjacentHTML("beforeend",s),O.refresh()},c=document.querySelector("section").children,m=c.getForm,y=c.loader,p=c.gallery,i=c.loadMore;let d=1,u;l.settings({progressBar:!1,timeout:4e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const f=async(a,r=1)=>{try{const s=await w(a,r);if(y.style.display="block",s.data.hits.length===0)return l.warning({message:"Sorry, there are no images matching your search query. Please try again!"});i.style.display="block";const o=Math.ceil(s.data.totalHits/15);if(r>o)return i.style.display="none",l.error({message:"We're sorry, but you've reached the end of search results."});M(s.data.hits,p)}catch{}finally{m.reset(),y.style.display="none";const s=p.children.galleryItem.getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"})}},P=async a=>{a.preventDefault(),p.innerHTML="",i.style.display="none",u=a.target.searchTerm.value.trim().toLowerCase(),d=1,f(u)},$=async()=>{d+=1,f(u,d)};m.addEventListener("submit",P);i.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map

import{S as h,i as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=n=>{const s=new URLSearchParams({key:"43997509-fd1501e4e0a2c27eafb2a64d5",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},g=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),L=(n,s)=>{const r=n.hits.map(({largeImageURL:a,webformatURL:e,tags:t,likes:o,views:d,comments:f,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img src="${e}" alt="${t}" />
        </a>
        <div class="description">
          <p>Likes <span class="desc-span">${o}</span></p>
          <p>Views <span class="desc-span">${d}</span></p>
          <p>Comments <span class="desc-span">${f}</span></p>
          <p>Downloads <span class="desc-span">${m}</span></p>
        </div>
      </li>`).join("");s.insertAdjacentHTML("beforeend",r),g.refresh()},i=document.querySelector("section").children,u=i[0],c=i[1],l=i[2];p.settings({progressBar:!1,timeout:4e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"});const b=n=>{n.preventDefault(),l.innerHTML="",c.style.display="block";const s=n.target.searchTerm.value.trim().toLowerCase();y(s).then(r=>{r.hits.length===0&&p.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),L(r,l)}).catch(r=>console.error("Error",r)).finally(()=>{u.reset(),c.style.display="none"})};u.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map

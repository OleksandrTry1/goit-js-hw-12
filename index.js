import{a as S,S as B,i as l}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const P="39672558-e125406c0fdedac43d7f74e3f",M="https://pixabay.com/api/";async function g(s,t){return(await S.get(M,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const i={imagesList:document.querySelector(".gallery"),loadLabel:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let q=new B(".gallery a",{captionsData:"alt",captionDelay:250});function f(s){const t=s.map(a=>{const{webformatURL:r,largeImageURL:e,tags:o,likes:n,views:w,comments:b,downloads:v}=a;return`
      <li class="images-list-item gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${r}" alt="${o}" loading="lazy" />
        </a>
        <ul class="image-info-container">
          <li class="image-info-item">
            <p class="likes label">Likes</p>
            <p class="likes value">${n}</p>
          </li>
          <li class="image-info-item">
            <p class="views label">Views</p>
            <p class="views value">${w}</p>
          </li>
          <li class="image-info-item">
            <p class="comments label">Comments</p>
            <p class="comments value">${b}</p>
          </li>
          <li class="image-info-item">
            <p class="downloads label">Downloads</p>
            <p class="downloads value">${v}</p>
          </li>
        </ul>
      </li>
    `}).join("");i.imagesList.insertAdjacentHTML("beforeEnd",t),q.refresh()}function R(){i.imagesList.innerHTML=""}function p(){i.loadLabel.classList.remove("is-hidden")}function h(){i.loadLabel.classList.add("is-hidden")}function y(){i.loadMoreBtn.classList.remove("is-hidden")}function m(){i.loadMoreBtn.classList.add("is-hidden")}const L={searchForm:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more-btn")};let c=1,d=null,u=0;const $=15;async function x(s){if(s.preventDefault(),d=s.currentTarget.elements["search-text"].value.trim(),c=1,!!d){R(),m();try{p();const t=await g(d,c),a=t.hits;a.length>0?(f(a),u=Math.ceil(t.totalHits/$),u>1?y():(m(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))):l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(t){console.error("Ошибка при поиске:",t),l.error({message:"Something went wrong while fetching images. Please try again later!",position:"topRight"})}finally{h(),s.target.reset()}}}async function E(){if(c+=1,!!d){m();try{p();const t=(await g(d,c)).hits;f(t),c>=u?(m(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y();const a=document.querySelector(".gallery-item");if(a){const r=a.getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}}catch(s){console.error("Ошибка при загрузке дополнительных картинок:",s),l.error({message:"Something went wrong while fetching images. Please try again later!",position:"topRight"})}finally{h()}}}L.loadMoreBtn.addEventListener("click",E);L.searchForm.addEventListener("submit",x);
//# sourceMappingURL=index.js.map

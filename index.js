import{a as v,S,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const P="39672558-e125406c0fdedac43d7f74e3f",B="https://pixabay.com/api/";async function f(s,t){return(await v.get(B,{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const d={imagesList:document.querySelector(".gallery"),loadLabel:document.querySelector(".loader")};let M=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const t=s.map(o=>{const{webformatURL:n,largeImageURL:e,tags:a,likes:r,views:L,comments:w,downloads:b}=o;return`
      <li class="images-list-item gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${n}" alt="${a}" loading="lazy" />
        </a>
        <ul class="image-info-container">
          <li class="image-info-item">
            <p class="likes label">Likes</p>
            <p class="likes value">${r}</p>
          </li>
          <li class="image-info-item">
            <p class="views label">Views</p>
            <p class="views value">${L}</p>
          </li>
          <li class="image-info-item">
            <p class="comments label">Comments</p>
            <p class="comments value">${w}</p>
          </li>
          <li class="image-info-item">
            <p class="downloads label">Downloads</p>
            <p class="downloads value">${b}</p>
          </li>
        </ul>
      </li>
    `}).join("");d.imagesList.insertAdjacentHTML("beforeEnd",t),M.refresh()}function $(){d.imagesList.innerHTML=""}function h(){d.loadLabel.classList.remove("is-hidden")}function y(){d.loadLabel.classList.add("is-hidden")}const m={searchForm:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more-btn")};let i=1,l=null,u=0;const q=15;function g(){m.loadMoreBtn.classList.add("is-hidden")}function R(){m.loadMoreBtn.classList.remove("is-hidden")}async function x(s){if(s.preventDefault(),l=s.currentTarget.elements["search-text"].value.trim(),i=1,!!l){$(),g();try{h();const t=await f(l,i),o=t.hits;o.length>0?(p(o),u=Math.ceil(t.totalHits/q),u>1?R():g()):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(t){console.error("Ошибка при поиске:",t),c.error({message:"Something went wrong while fetching images. Please try again later!",position:"topRight"})}finally{y(),s.target.reset()}}}async function E(){if(i+=1,!!l)try{h();const t=(await f(l,i)).hits;p(t),i>=u&&(g(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),window.scrollBy({left:0,top:360,behavior:"smooth"})}catch(s){console.error("Ошибка при загрузке дополнительных картинок:",s),c.error({message:"Something went wrong while fetching images. Please try again later!",position:"topRight"})}finally{y()}}m.loadMoreBtn.addEventListener("click",E);m.searchForm.addEventListener("submit",x);
//# sourceMappingURL=index.js.map

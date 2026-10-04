import{a as d,S as f,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const p="39672558-e125406c0fdedac43d7f74e3f",g="https://pixabay.com/api/";async function y(r){return(await d.get(g,{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const l={imagesList:document.querySelector(".gallery"),loadLabel:document.querySelector(".loader")};let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const t=r.map(a=>{const{webformatURL:o,largeImageURL:e,tags:s,likes:i,views:c,comments:m,downloads:u}=a;return`
      <li class="images-list-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${o}" alt="${s}" loading="lazy" />
        </a>
        <ul class="image-info-container">
          <li class="image-info-item">
            <p class="likes label">Likes</p>
            <p class="likes value">${i}</p>
          </li>
          <li class="image-info-item">
            <p class="views label">Views</p>
            <p class="views value">${c}</p>
          </li>
          <li class="image-info-item">
            <p class="comments label">Comments</p>
            <p class="comments value">${m}</p>
          </li>
          <li class="image-info-item">
            <p class="downloads label">Downloads</p>
            <p class="downloads value">${u}</p>
          </li>
        </ul>
      </li>
    `}).join("");l.imagesList.innerHTML=t,h.refresh()}function w(){l.imagesList.innerHTML=""}function b(){l.loadLabel.classList.remove("is-hidden")}function v(){l.loadLabel.classList.add("is-hidden")}const S={searchForm:document.querySelector(".form")};async function $(r){r.preventDefault();const t=r.currentTarget.elements["search-text"].value.trim();if(t){w();try{b();const a=await y(t);a.length>0?L(a):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(a){console.error("Ошибка при поиске:",a),n.error({message:"Something went wrong while fetching images. Please try again later!",position:"topRight"})}finally{v()}}}S.searchForm.addEventListener("submit",$);
//# sourceMappingURL=index.js.map

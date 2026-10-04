// <ul class="images-list">
//   <li class="images-list-item" style="background-image: url(./img/vite-logo.png);">
//     <ul class="image-info-container">
//       <li class="image-info-item">
//         <p class="likes label">Likes</p>
//         <p class="likes value">0</p>
//       </li>
//       <li class="image-info-item">
//         <p class="views label">Views</p>
//         <p class="views value">0</p>
//       </li>
//       <li class="image-info-item">
//         <p class="comments label">Comments</p>
//         <p class="comments value">0</p>
//       </li>
//       <li class="image-info-item">
//         <p class="downloads label">Downloads</p>
//         <p class="downloads value">0</p>
//       </li>
//     </ul>
//   </li>
// </ul>V
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  imagesList: document.querySelector('.gallery'),
  loadLabel: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn')
};

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(image => {
    const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;

    return `
      <li class="images-list-item gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <ul class="image-info-container">
          <li class="image-info-item">
            <p class="likes label">Likes</p>
            <p class="likes value">${likes}</p>
          </li>
          <li class="image-info-item">
            <p class="views label">Views</p>
            <p class="views value">${views}</p>
          </li>
          <li class="image-info-item">
            <p class="comments label">Comments</p>
            <p class="comments value">${comments}</p>
          </li>
          <li class="image-info-item">
            <p class="downloads label">Downloads</p>
            <p class="downloads value">${downloads}</p>
          </li>
        </ul>
      </li>
    `;
  }).join('');

  refs.imagesList.insertAdjacentHTML('beforeEnd', markup);
  lightbox.refresh();
}

export function clearGallery() {
    refs.imagesList.innerHTML = '';
}

export function showLoader() {
    refs.loadLabel.classList.remove('is-hidden');
}

export function hideLoader() {
    refs.loadLabel.classList.add('is-hidden');
}

export function showLoadBtn() {
    refs.loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadBtn() {
    refs.loadMoreBtn.classList.add('is-hidden');
}
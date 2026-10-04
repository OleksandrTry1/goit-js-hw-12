import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.form'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let currentPage = 1;
let searchQuery = null;
let maxPages = 0;
const perPage = 15;

function hideLoadBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
}

function showLoadBtn() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

async function onSearchFormSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements['search-text'].value.trim();
  currentPage = 1;

  if (!searchQuery) return;

  clearGallery();
  hideLoadBtn();

  try {
    showLoader();
    const data = await getImagesByQuery(searchQuery, currentPage);
    const images = data.hits;

    if (images.length > 0) {
      createGallery(images);

      maxPages = Math.ceil(data.totalHits / perPage);

      if (maxPages > 1) {
        showLoadBtn();
      } else {
        hideLoadBtn();
      }
    } else {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error('Ошибка при поиске:', error);
    iziToast.error({
      message:
        'Something went wrong while fetching images. Please try again later!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function onLoadMore() {
  currentPage += 1;

  if (!searchQuery) return;

  try {
    showLoader();
    const data = await getImagesByQuery(searchQuery, currentPage);
    const images = data.hits;
    createGallery(images);

    if (currentPage >= maxPages) {
      hideLoadBtn();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    window.scrollBy({
      left: 0,
      top: 360,
      behavior: 'smooth',
    });
  } catch (error) {
    console.error('Ошибка при загрузке дополнительных картинок:', error);
    iziToast.error({
      message:
        'Something went wrong while fetching images. Please try again later!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.searchForm.addEventListener('submit', onSearchFormSubmit);

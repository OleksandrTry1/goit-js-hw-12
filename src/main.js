import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";

const refs = {
  searchForm: document.querySelector('.form')
};

async function onSearchFormSubmit(event) {
  event.preventDefault();
  
  const query = event.currentTarget.elements['search-text'].value.trim();

  if (!query) return;

  clearGallery();
  
  try {
    showLoader();
    const images = await getImagesByQuery(query);
    
    if (images.length > 0) {
        createGallery(images);
    } else {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
    }
  } catch (error) {
    console.error("Ошибка при поиске:", error);
    iziToast.error({
        message: 'Something went wrong while fetching images. Please try again later!',
        position: 'topRight'
    });
  } finally {
    hideLoader();
  }
}

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
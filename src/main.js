import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getArr from './js/pixabay-api.js';
import renderImages from './js/render-function.js';

const section = document.querySelector('section').children;
const form = section[0];
const loader = section[1];
const gallery = section[2];

iziToast.settings({
  progressBar: false,
  timeout: 4000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
});

const submitSearchForm = e => {
  e.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'block';
  
  const textFromUser = e.target.searchTerm.value.trim().toLowerCase();
  getArr(textFromUser)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      renderImages(response, gallery);
    })
    .catch(error => console.error('Error', error))
    .finally(() => {
      form.reset();
      loader.style.display = 'none';
    });
};

form.addEventListener('submit', submitSearchForm);

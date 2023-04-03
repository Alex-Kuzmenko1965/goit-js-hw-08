// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const ulEl = document.body.querySelector('.gallery');
// console.log('.gallery:', ulEl);

const markup = `${galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"        
        alt="${description}"
      />
    </a>
  </li>`).join('')}`;
// console.log('markup:', markup);

ulEl.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', 
captionPosition: 'button',
captionDelay: 250,});
gallery.on('show.simplelightbox', function () {
  // console.log('gallery:', gallery.elements);
	// console.log('gallery:', gallery.elements.length);
});

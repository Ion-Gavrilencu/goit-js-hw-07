// 02-lightbox.js

import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');

  // Funcție pentru a crea elementele galeriei
  function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
  }

  // Adăugare fiecărui element din galleryItems în galerie
  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryList.appendChild(galleryItem);
  });

  // Inițializarea SimpleLightbox pe galerie
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, // Activăm afișarea textului sugestiv
    captionDelay: 250, // Delay pentru afișarea textului sugestiv
    captionsData: 'alt', // Afișăm textul sugestiv din atributul alt al imaginii
  });
});

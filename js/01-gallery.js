import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
  const galleryList = document.querySelector('.gallery');

  // Functie pentru a crea elementele galeriei
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
    image.setAttribute('data-source', item.original); // Setarea data-source pentru folosirea în lightbox

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
  }

  // Adăugarea fiecărui element din galleryItems în galerie
  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryList.appendChild(galleryItem);
  });

  // Delegarea evenimentului de click pe galerie pentru deschiderea ferestrei modale
  galleryList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    const largeImageUrl = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" width="1400" height="900">
    `);

    instance.show();

    // Închiderea ferestrei modale la apăsarea tastei Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        instance.close();
      }
    });
  });
});

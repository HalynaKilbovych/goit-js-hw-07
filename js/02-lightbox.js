import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl  = document.querySelector(".gallery"); 

const makeGalleryItemsMarkup = ({preview, original, description}) => { 
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
}

const makeGalleryItems = galleryItems.map(makeGalleryItemsMarkup).join("");

galleryEl.insertAdjacentHTML("beforeend", makeGalleryItems);

galleryEl.addEventListener("click", onImageClick); 
function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    {
      onShow: modal => {
        document.addEventListener('keydown', onPressEsc);
      },
      onClose: modal => {
        document.removeEventListener('keydown', onPressEsc);
      },
    },
  );
  modal.show();

  function onPressEsc(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
  }
}
import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryItemsMarkup = ({preview, original, description}) => { 
    return `
    <div class="gallery__item">
  <a class="gallery__link" href= "${original}">
    <img
      class="gallery__image"
      src= "${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>
</div>
    `
}
const makeGalleryItems = galleryItems.map(makeGalleryItemsMarkup).join("");

const galleryEl  = document.querySelector(".gallery"); 

galleryEl.insertAdjacentHTML("beforeend", makeGalleryItems);

galleryEl.addEventListener("click", handleImageClick); 


function handleImageClick(e) {
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

  function onPressEsc(e) {
    if (e.code === 'Escape') {
      modal.close();
    }
  }
}

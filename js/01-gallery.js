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
    if(!e.target.classList.contains("gallery_image")) { 
      return
    }
    const instance = basicLightbox.create (`
    <img src="${e.target.dataset.source}" width="800" height="600">
`,);
  instance.show();

  galleryEl.addEventListener("keydown", (e) => { 
    if (e.code === "Escape") { 
      instance.close();
    }
  }) ;

} 

  // {
  //   onShow: (instance) => {
  //     console.log("onShow", instance)
  //     // galleryEl.addEventListener("keydown", onEscapeButton);
  //   },
  //   onClose: (instance) => {
  //     galleryEl.removeEventListener("keydown", onEscapeButton);
  //   },
  // }
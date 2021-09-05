import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  //Открыть попап
  open(name, link) {
    super.open();
    const popupPlaceImg = document.querySelector('.popup-place__img');
    const popupPlaceTitle = document.querySelector('.popup-place__title');
    popupPlaceImg.src = link;
    popupPlaceImg.alt = name;
    popupPlaceTitle.textContent = name;
  }
}

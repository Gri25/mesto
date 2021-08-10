import { openPopup, closePopup, handleEsc } from './open-close-popup.js';
export class Card {
  constructor(name, link, cardSelector) {
    this._name = name
    this._link = link
    this._cardSelector = cardSelector
  }
  _getCard() {
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    return this._cardTemplate.querySelector('.card').cloneNode(true);
  }
  _setEventListeners() {
//Селекторы
    this._trashButton =  this._element.querySelector('.card__delete-button');
    this._strokeButton = this._element.querySelector('.card__stroke');
//Удалить
    this._trashButton.addEventListener('click', function (event) {
      event.target.closest('.card').remove();
    });
//Лайк
    this._strokeButton.addEventListener('click', () => {
    this._strokeButton.classList.toggle('card__stroke_active');
  });
//Модальное окно
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._handleImgClick();
    });
}
_handleImgClick() {
  const popupPlace = document.querySelector('.popup-place');
  const popupPlaceImg = document.querySelector('.popup-place__img');
  const popupPlaceTitle = document.querySelector('.popup-place__title');
  popupPlaceImg.src = this._link;
  popupPlaceImg.alt = this._link;
  popupPlaceTitle.textContent = this._name;
  openPopup(popupPlace);
}
  generateCard() {
    // Запишем разметку в приватное поле _element.
  this._element = this._getCard();
  this._setEventListeners();
  this._element.querySelector('.card__img').src = this._link;
  this._element.querySelector('.card__text').textContent = this._name;

  return this._element;
  }
}

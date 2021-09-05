export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
  }
  _getCard() {
    this._cardTemplate = document.querySelector(this._cardSelector).content;
    return this._cardTemplate.querySelector('.card').cloneNode(true);
  }

  _setEventListeners() {
    //Удалить
    this._trashButton.addEventListener('click', () => {
      this._deleteImgClick();
    });
    //Лайк
    this._strokeButton.addEventListener('click', () => {
      this._likeImgClick();
    });
    //Модальное окно
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

  }
  //Удалить ф-ция
  _deleteImgClick() {
    this._element.remove();
    this._element = null;
  }
  //Лайк ф-ция
  _likeImgClick() {
    this._strokeButton.classList.toggle('card__stroke_active');
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    this._element = this._getCard();
    this._trashButton = this._element.querySelector('.card__delete-button');
    this._strokeButton = this._element.querySelector('.card__stroke');
    this._cardImage = this._element.querySelector('.card__img');
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._setEventListeners();

    return this._element;
  }
}

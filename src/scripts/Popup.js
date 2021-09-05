export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopup = this._closePopup.bind(this);
  }
  //Открыть
  open() {
    this.setEventListeners();
    this._popupSelector.classList.add('popup__opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  //Закрыть
  close() {
    this._popupSelector.classList.remove('popup__opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector.removeEventListener('click', this._closePopup);
  }
  //Закрытие на esc
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  //Затемненная область
  _closePopup(evt) {
    if (evt.target.classList.contains('popup__opened') || evt.target.classList.contains('popup__close'))
      this.close();
  };
  //Слушатель
  setEventListeners() {
    this._popupSelector.addEventListener('click', this._closePopup);
  }

}


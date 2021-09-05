import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._handleSubmit = (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    };
  }
  //Открыть
  open() {
    super.open();
  }
  //Собираем данные
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) =>
        this._formValues[input.name] = input.value
    );
    return this._formValues;
  }
  //Слушатель
  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener('submit', this._handleSubmit)
  }
  //Закрыть
  close() {
    super.close();
  }
}


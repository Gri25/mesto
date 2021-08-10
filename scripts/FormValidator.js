export class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._errorClassActive = config.errorClassActive
    this._sectionInput = config.sectionInput
    this._formElement = formElement
  }

  //отобразить сообщение
  _showInputError = (inputElement) => {
    const _formSection = inputElement.closest(this._sectionInput);
    const _errorElement = _formSection.querySelector(this._errorClass);
    _errorElement.textContent = this._errorMessage;
    _errorElement.classList.add(this._errorClassActive);
  }

  //спрятать сообщение
  _hideInputError = (inputElement) => {
    const _formSection = inputElement.closest(this._sectionInput);
    const _errorElement = _formSection.querySelector(this._errorClass);
    _errorElement.textContent = "";
    _errorElement.classList.remove(this._errorClassActive);
  }

  //проверка
  _checkInputValidity = (inputElement) => {
    this._isInputNotValid = !inputElement.validity.valid;
    if (this._isInputNotValid) {
      this._errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement);
      inputElement.classList.add(this._inputErrorClass);
    } else {
      this._hideInputError(inputElement);
      inputElement.classList.remove(this._inputErrorClass);
    }
  }

  //дизейбл кнопки тут в аргумент можно добавить инпутЛист
  _toggleButtonState() {
    const _findNotValid = (inputElement) => !inputElement.validity.valid;
    const _hasNotValidInput = this._inputList.some(_findNotValid);
    if (_hasNotValidInput) {
      this._submitButtonElement.setAttribute('disabled', true);
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._submitButtonElement.removeAttribute('disabled');
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  //слушатель
  _setEventListeners() {
    //проходим по полям формы
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    //Находим кнопку
    this._submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
    //Запуск проверки ошибки
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (event) => {
        this._checkInputValidity(inputElement);

        this._toggleButtonState(inputElement);
      });
    });
  }

  _resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault()
    });
    this._setEventListeners();
  }
}


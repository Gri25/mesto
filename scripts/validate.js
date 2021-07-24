//отобразить сообщение
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const sectionInput = inputElement.closest(config.sectionInput);
  const errorElement = sectionInput.querySelector(config.errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClassActive);
}

//спрятать сообщение
const hideInputError = (formElement, inputElement, config) => {
  const sectionInput = inputElement.closest(config.sectionInput);
  const errorElement = sectionInput.querySelector(config.errorClass);
  errorElement.textContent = ' ';
  errorElement.classList.remove(config.errorClassActive);
}

//проверка
const checkInputValidity = (formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      showInputError(formElement, inputElement, errorMessage, config);
      inputElement.classList.add(config.inputErrorClass);
    } else {
      hideInputError(formElement, inputElement, config);
      inputElement.classList.remove(config.inputErrorClass);
    }
  }

//дизейбл кнопки
const toggleButtonState = (inputList, submitButtonElement, config) => {
  const hasNotValidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid);

    if (hasNotValidInput) {
      submitButtonElement.setAttribute('disabled', true);
      submitButtonElement.classList.add(config.inactiveButtonClass);
    } else {
      submitButtonElement.removeAttribute('disabled');
      submitButtonElement.classList.remove(config.inactiveButtonClass);
    }
  }

//слушатель
const setEventListeners = (formElement,config) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  formElement.addEventListener('submit', handleFormSubmit)
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

  const iteratedInputList = (inputElement) => {
    const handleInput = () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, submitButtonElement, config);
    };
    inputElement.addEventListener("input", handleInput);
  };
  inputList.forEach(iteratedInputList);
  toggleButtonState(inputList, submitButtonElement, config);
};

//включение проверки
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  const setEventListenersWithConfig = (formElement) => {
    setEventListeners(formElement,config) }
  formList.forEach(setEventListenersWithConfig);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_anactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorClassActive: 'popup__input-error_active',
  sectionInput: '.popup__input-section',
});

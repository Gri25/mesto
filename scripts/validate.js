const showInputError = (inputElement, errorMessage) => {
  const sectionInput = inputElement.closest('.popup__input-section');
  const errorClass = sectionInput.querySelector('.popup__input-error');

  errorClass.textContent = errorMessage;
  errorClass.classList.add('popup__input-error_active');

}

const hideInputError = (inputElement) => {
  const sectionInput = inputElement.closest('.popup__input-section');
  const errorClass = sectionInput.querySelector('.popup__input-error');

  errorClass.textContent = ' ';
  errorClass.classList.remove('popup__input-error_active');
}

const checkInputValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;

      showInputError(inputElement, errorMessage)
      inputElement.classList.add('popup__input_type_error');
    } else {
      hideInputError(inputElement)
      inputElement.classList.remove('popup__input_type_error');
    }
  }

  const toggleButtonState = (inputSelector, submitButtonSelector) => {
    const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    const hasNotValidInput = inputSelector.some(findAtLeastOneNotValid);

    if (hasNotValidInput) {
      submitButtonSelector.setAttribute('disabled', true);
      submitButtonSelector.classList.add('popup__submit-button_anactive');
    } else {
      submitButtonSelector.removeAttribute('disabled');
      submitButtonSelector.classList.remove('popup__submit-button_anactive');
    }
  };


const setEventListeners = (formElement) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  formElement.addEventListener('submit', handleFormSubmit)


  const inputSelector = Array.from(formElement.querySelectorAll('.popup__input'));
  const submitButtonSelector = formElement.querySelector('.popup__submit-button');

  const inputListIterator = (inputElement) => {
    const handleInput = () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputSelector, submitButtonSelector);
    };

    inputElement.addEventListener("input", handleInput);
  };

  inputSelector.forEach(inputListIterator);

  toggleButtonState(inputSelector, submitButtonSelector);

};

const enableValidation = ( ) => {
  const formSelector = document.querySelectorAll('.popup__form');
  const formList = Array.from(formSelector);

  formList.forEach(setEventListeners);
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: '.popup__submit-button_anactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  sectionInput: '.popup__input-section',
});


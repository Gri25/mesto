const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.Profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileName = document.querySelector('.Profile__name');
const profileJob = document.querySelector('.Profile__profession');
const popupElementNameInput = popupElement.querySelector('.popup__nameInput');
const popupElementJobInput = popupElement.querySelector('.popup__jobInput');
const formElement = document.querySelector('.popup__form');
const formSubmitButton = document.querySelector('.popup__submit-button');

const openPopup = function() {
  popupElement.classList.add('popup_opened')
  popupElementNameInput.value = profileName.textContent;
  popupElementJobInput.value = profileJob.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened')
}

const closePopupByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget)
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup()
}

const addTextProfile = function(evt) {
  evt.preventDefault()
  profileName.textContent = popupElementNameInput.value;
  profileJob.textContent = popupElementJobInput.value;
  closePopup()
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
formElement.addEventListener('submit', addTextProfile);
formSubmitButton.addEventListener('click', closePopup);

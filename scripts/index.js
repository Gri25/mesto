const popupElement = document.querySelector('.popup');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const popupElementNameInput = popupElement.querySelector('.popup__input_type_name');
const popupElementJobInput = popupElement.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__form');
const formSubmitButton = document.querySelector('.popup__submit-button');

const openPopup = function() {
  popupElementNameInput.value = profileName.textContent;
  popupElementJobInput.value = profileJob.textContent;
  popupElement.classList.add('popup_opened')
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened')
}

const closePopupByClickOnOverlay = function(event) {
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

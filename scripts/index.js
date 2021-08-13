import { Card } from './Card.js';
import { initialCards } from './initial-сards.js';
import { openPopup, closePopup, handleEsc } from './utils.js';
import { FormValidator } from './FormValidator.js';

const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupOpenButtonElement = document.querySelector('.person__edit-button');
const placeAddButtonElement = document.querySelector('.person__add-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupCloseAddElement = popupAddPlace.querySelector('.popup__close');
const formAddElement = popupAddPlace.querySelector('.popup__form');
const placeCard = formAddElement.querySelector('.popup__input_type_name');
const urlCard = formAddElement.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.person__name');
const profileJob = document.querySelector('.person__profession');
const popupElementNameInput = popupElement.querySelector('.popup__input_type_name');
const popupElementJobInput = popupElement.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__form');
const formSubmitButton = document.querySelector('.popup__submit-button');
const popupSaveAddElement = popupAddPlace.querySelector('.popup__submit-button');
const cardCase = document.querySelector('.cards');
const popupPlace = document.querySelector('.popup-place');
const popupPlaceContainer = popupPlace.querySelector('.popup-place__container');
const popupPlaceClose = popupPlaceContainer.querySelector('.popup-place__close');
//Ф-ция создания карточек
const createCard = (data, wrap) => {
  popupSaveAddElement.classList.add('popup__submit-button_anactive');
  const card = new Card(data.name, data.link, '.cards-template');
  wrap.prepend(card.generateCard());
};

//Рендер
initialCards.forEach(function (el) {
  createCard(el, cardCase)
});

//Новая карточка
const addNewCard = (event) => {
  event.preventDefault();
  createCard({
    name: placeCard.value,
    link: urlCard.value
  }, cardCase);
  closePopup(popupAddPlace);
  event.target.reset();
  toggleButtonState();
};

//функция открытия попапа для редактировния профиля
const openPropfilePopup = function (selectedPopup) {
  popupElementNameInput.value = profileName.textContent;
  popupElementJobInput.value = profileJob.textContent;
  openPopup(selectedPopup)
}

//закрытие окона по клику на затемненную область для всех трёх попапов
const popups = document.querySelectorAll('.popup')
function closePopupByClickOnOverlay() {
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__opened')) {
        closePopup(popup)
      }
    })
  })
}
closePopupByClickOnOverlay()

//редактор профиля
const addTextProfile = function (evt) {
  evt.preventDefault()
  profileName.textContent = popupElementNameInput.value;
  profileJob.textContent = popupElementJobInput.value;
  closePopup(popupElement)
}

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_anactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__input-error',
  errorClassActive: 'popup__input-error_active',
  sectionInput: '.popup__input-section',
}

const formEdit = document.querySelector('.popup__form_type_profile');
const formAdd = document.querySelector('.popup__form_type_place');

const validatorEditProfile = new FormValidator(config, formEdit);
const validatorAddPlace = new FormValidator(config, formAdd);
validatorEditProfile.enableValidation();
validatorAddPlace.enableValidation();

popupOpenButtonElement.addEventListener('click', () => openPropfilePopup(popupEditProfile));
placeAddButtonElement.addEventListener('click', () => openPopup(popupAddPlace));
popupCloseButtonElement.addEventListener('click', () => closePopup(popupEditProfile));
popupCloseAddElement.addEventListener('click', () => closePopup(popupAddPlace));
popupPlaceClose.addEventListener('click', () => closePopup(popupPlace));
formElement.addEventListener('submit', addTextProfile);
formAddElement.addEventListener('submit', addNewCard);

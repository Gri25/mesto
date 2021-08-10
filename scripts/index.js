import { Card } from './Card.js';
import { initialCards } from './initial-сards.js';
import { openPopup, closePopup, handleEsc } from './open-close-popup.js';
const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddPlace = document.querySelector('.popup_type_add-place');
const popupOpenButtonElement = document.querySelector('.person__edit-button');
const placeAddButtonElement = document.querySelector('.person__add-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupCloseAddElement = popupAddPlace.querySelector('.popup__close');
//форма добавления карты
const formAddElement = popupAddPlace.querySelector('.popup__form');
//инпуты для добавления новой карточки
const placeCard = formAddElement.querySelector('.popup__input_type_name');
const urlCard = formAddElement.querySelector('.popup__input_type_link');
//переменные для добавления карточек
//const cardImage = document.queryCommandEnabled('.card__img');
//const cardTitle = document.querySelector('.card__text');
//
const profileName = document.querySelector('.person__name');
const profileJob = document.querySelector('.person__profession');
const popupElementNameInput = popupElement.querySelector('.popup__input_type_name');
const popupElementJobInput = popupElement.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__form');
const formSubmitButton = document.querySelector('.popup__submit-button');
const popupSaveAddElement = popupAddPlace.querySelector('.popup__submit-button');
//
const cardCase = document.querySelector('.cards');
//DOM для попапа картинки
const popupPlace = document.querySelector('.popup-place');
const popupPlaceContainer = popupPlace.querySelector('.popup-place__container');
const popupPlaceClose = popupPlaceContainer.querySelector('.popup-place__close');


//рендер
initialCards.forEach(function (el) {
  const card = new Card(el.name, el.link, '.cards-template')
  cardCase.append(card.generateCard());
});

//добавляем новую карточку
const addNewCard = (event) => {
  event.preventDefault()
  const placeValue = placeCard.value;
  const urlValue = urlCard.value;
  popupSaveAddElement.setAttribute('disabled', true);
  popupSaveAddElement.classList.add('popup__submit-button_anactive');
  const newCard = new Card(placeValue, urlValue, '.cards-template')
  cardCase.prepend(newCard.generateCard());

  closePopup(popupAddPlace);
  event.target.reset();
}

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

import { FormValidator } from './FormValidator.js';
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

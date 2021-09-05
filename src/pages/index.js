import './index.css'
//импорты
//константы
import {
  popupEditProfile,
  popupAddPlace,
  popupOpenButtonElement,
  placeAddButtonElement,
  popupCloseButtonElement,
  popupCloseAddElement,
  formAddElement,
  placeCard,
  urlCard,
  popupElementNameInput,
  popupElementJobInput,
  formElement,
  formSubmitButton,
  popupSaveAddElement,
  popupPlace,
  popupPlaceContainer,
  popupPlaceClose,
  cardCase,
  formEdit,
  formAdd,
  config,
  initialCards,
  personData,
} from '../utils/constants.js'
//компоненты
import Section from '../scripts/Section.js';
import Card from '../scripts/Card.js';
import Popup from '../scripts/Popup.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import Userinfo from '../scripts/UserInfo.js'

//Валидация
const validatorEditProfile = new FormValidator(config, formEdit);
const validatorAddPlace = new FormValidator(config, formAdd);
validatorEditProfile.enableValidation();
validatorAddPlace.enableValidation();

//Рендер
const cardList = new Section({
  data: initialCards,
  renderer: (data) => {
    const card = new Card(data, '.cards-template', handleCardClick);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
  },
},
  cardCase
);
cardList.renderItems();

//Попап картинки
function handleCardClick(name, link) {// это понятно
  const openImagePopup = new PopupWithImage(popupPlace);
  openImagePopup.open(name, link);
};

//Редактор профиля
const UserInfo = new Userinfo(personData);

//Создать экземпляр класса PopupWithForm
const popupWithUserForm = new PopupWithForm(
  popupEditProfile, {
  handleFormSubmit: (userData) => {
    UserInfo.setUserInfo(userData);
    popupWithUserForm.close();
  }
});

//Открыть редактор профиля
popupOpenButtonElement.addEventListener('click', () => {
  validatorEditProfile.resetValidation();
  popupElementNameInput.value = UserInfo.getUserInfo().name;
  popupElementJobInput.value = UserInfo.getUserInfo().job;
  popupWithUserForm.open();
});

//добавление карточки
const popupWithPhotoForm = new PopupWithForm(
  popupAddPlace, {
  handleFormSubmit: (data) => {
    const newCard = createCard(data,
      '.cards-template')
      const newAddedCard = newCard.generateCard()
      cardList.setItemPrepend(newAddedCard)
    formAdd.reset();
    popupWithPhotoForm.close();
  }
});

// Ф-ция создания карточек
const createCard = (data) => {
  const card = new Card(data,
    '.cards-template',
    handleCardClick);
    return card
};

//Добавление фото клик
placeAddButtonElement.addEventListener('click', () => {
  validatorAddPlace.resetValidation();
  popupWithPhotoForm.open();
});

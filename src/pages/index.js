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
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Userinfo from '../components/UserInfo.js'

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
    cardList.appendItem(cardElement);
  },
},
  cardCase
);
cardList.renderItems();
//Класс открытия модульного окна картинки
const openImage = new PopupWithImage(popupPlace);
//Попап картинки
function handleCardClick(name, link) {
  openImage.open(name, link);
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
    const newAddedCard = createCard(data,
      '.cards-template')
    cardList.prependItem(newAddedCard)
    formAdd.reset();
    popupWithPhotoForm.close();
  }
});

// Ф-ция создания карточек
const createCard = (data) => {
  const card = new Card(data,
    '.cards-template',
    handleCardClick);
  return card.generateCard()
};

//Добавление фото клик
placeAddButtonElement.addEventListener('click', () => {
  validatorAddPlace.resetValidation();
  popupWithPhotoForm.open();
});

//импорты
import './index.css'
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
  formAvatar,
  popupDeleteCard,
  popupChangeAvatar,
  personAvatarButton,
  popupDeleteButton
} from '../utils/constants.js'
//компоненты
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDelete from '../components/PopupDelete.js';
import Userinfo from '../components/UserInfo.js';
import Api from '../components/Api.js'


//Сервер
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: '5b7d2295-74cc-4a03-be9c-30bb2cf17786',
    'Content-type': 'application/json'
  }
})

let userId;

Promise.all([api.getPersonalInfo(), api.getCard()])
  .then(([data, item]) => {
    console.log(item)//данные карточек
    console.log(data)//данные пользователя
    UserInfo.setUserInfo(data)
    userId = data._id
    cardList.renderItems(item)
  })
  .catch((err) => {
    console.log(err)
  })

//Ф-ция создания карточек
function createCard(item, cardSelector) {
  const card = new Card({
    item, handleCardClick: (name, link) => {
      openImage.open(name, link)
    },
    deleteCard: () => {
      popupDelete.open(card)
    },
    likeCard: () => {
      const likedCard = card.likedCard();
      const result = likedCard ? api.awaylikeCard(card.getItemId()) : api.likeCard(card.getItemId());

      result.then(data => {
        card.setLike(data.likes);
        card.renderLike()

      }).catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
    }
  }, cardSelector, item._id, userId)

  return card
};

//Рендер
const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item, '.cards-template')
    const cardElement = card.generateCard();
    cardList.appendItem(cardElement);
  }
},
  cardCase);

//Класс открытия
const openImage = new PopupWithImage(popupPlace);

//Редактор профиля
const UserInfo = new Userinfo(personData);

// создание новых карточек
const newCard = new PopupWithForm(
  popupAddPlace,
  (item) => {
    newCard.renderLoading(true)
    api.addNewCard(item)
      .then(item => {
        console.log(item)
        const newCards = createCard(item, '.cards-template')
        const newAddedCard = newCards.generateCard()
        cardList.prependItem(newAddedCard)
        newCard.close()
      })
      .finally(() => {
        newCard.renderLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  })

// попап профиля
const popupProfileChange = new PopupWithForm(
  popupEditProfile,
  (data) => {
    popupProfileChange.renderLoading(true)
    api.changeUserInfo(data)
      .then(() => {
        console.log(data)
        UserInfo.setUserInfo(data)
        popupProfileChange.close()
      })
      .finally(() => {
        popupProfileChange.renderLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
)

//Новый аватар
const changeAvatar = new PopupWithForm(
  popupChangeAvatar,
  (item) => {
    changeAvatar.renderLoading(true)
    console.log(item)
    api.editAvatarUser(item.link)
    .then((res)=>{
      console.log(res)
      UserInfo.setUserInfo(res)
      changeAvatar.close()
    })
    .finally(()=>{
      changeAvatar.renderLoading(false)
    })
  }
)

//Удаление
const popupDelete = new PopupDelete(popupDeleteCard,  (evt, card) => {
  deleteCard(evt, card)
})

function deleteCard(evt, newCard) {
  console.log(newCard.getItemId())
  console.log(evt)
  api.removeCard(newCard.getItemId())
    .then(() => {
      newCard.removeCard()
      popupDelete.close()
    })
    .catch((err) => {
      console.log(err);
    });
}

//Открыть редактор профиля
popupOpenButtonElement.addEventListener('click', () => {
  validatorEditProfile.resetValidation();
  const profileInputInfo = UserInfo.getUserInfo()
  popupElementNameInput.value = profileInputInfo.nameSelector;
  popupElementJobInput.value = profileInputInfo.infoSelector;
  popupProfileChange.open();
});

//Добавление фото
placeAddButtonElement.addEventListener('click', () => {
  validatorAddPlace.resetValidation();
  newCard.open();
});

//Новый аватар
personAvatarButton.addEventListener('click', () => {
  validatorChangeAvatar.resetValidation()
  changeAvatar.open()
})

//Валидация
const validatorEditProfile = new FormValidator(config, formEdit);
const validatorAddPlace = new FormValidator(config, formAdd);
const validatorChangeAvatar = new FormValidator(config, formAvatar);

validatorEditProfile.enableValidation();
validatorAddPlace.enableValidation();
validatorChangeAvatar.enableValidation();


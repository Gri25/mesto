const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupElement = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddPlace = document.querySelector('.popup_add_place');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const placeAddButtonElement = document.querySelector('.profile__add-button');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupCloseAddElement = popupAddPlace.querySelector('.popup__close');
//форма добавления карты
const formAddElement = popupAddPlace.querySelector('.popup__form');
//инпуты для добавления новой карточки
const placeCard = formAddElement.querySelector('.popup__input_type_name');
const urlCard = formAddElement.querySelector('.popup__input_type_link');
//переменные для добавления карточек
const cardImage = document.queryCommandEnabled('.card__img');
const cardTitle = document.querySelector('.card__text');
//
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const popupElementNameInput = popupElement.querySelector('.popup__input_type_name');
const popupElementJobInput = popupElement.querySelector('.popup__input_type_job');
const formElement = document.querySelector('.popup__form');
const formSubmitButton = document.querySelector('.popup__submit-button');
const popupSaveAddElement = popupAddPlace.querySelector('.popup__submit-button');
//
const cardTemplate = document.querySelector('.cards-template').content;
const cardCase = document.querySelector('.cards');
//DOM для попапа картинки
const popupPlace = document.querySelector('.popup-place');
const popupPlaceContainer = popupPlace.querySelector('.popup-place__container');
const popupPlaceClose = popupPlaceContainer.querySelector('.popup-place__close');
const popupPlaceImg = popupPlaceContainer.querySelector('.popup-place__img');
const popupPlaceTitle = popupPlaceContainer.querySelector('.popup-place__title');
//модификатор для лайка
const cardImgActive = document.querySelector('.card__stroke_active');

//обработчики дя функций с картами
function setEventListener(createCard) {
  createCard.querySelector('.card__delete-button').addEventListener('click', handleDelete);
  createCard.querySelector('.card__img').addEventListener('click', openImgPopup);
  createCard.querySelector('.card__stroke').addEventListener('click', cardLikeImg);
}
//наполнение из массива
function getCardTempl(name, link) {
  const createCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardDescription = cardTemplate.querySelector('.card__description');
  const cardText = createCard.querySelector('.card__text');
  const cardImage = createCard.querySelector('.card__img');
  const cardDeleteButton = createCard.querySelector('.card__delete-button');
  const cardLikeButton = createCard.querySelector('.card__stroke');
  cardText.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  setEventListener(createCard);

  return createCard
}

initialCards.forEach(function (el) {
  cardCase.append(getCardTempl(el.name, el.link));
});

// лайкаем карточки
function cardLikeImg(event) {
  const cardLikeButton = event.target.closest('.card__stroke');
  cardLikeButton.classList.toggle('card__stroke_active')
 }

//удаление карточек
function handleDelete(event) {
 const createCard = event.target.closest('.card')
 createCard.remove();
}

//добавляем новую карточку
const addNewCard = (event) => {
  event.preventDefault()
  const newName = placeCard.value;
  const newLink = urlCard.value;
  cardCase.prepend(getCardTempl(newName, newLink));
  closePopup(popupAddPlace);
  placeCard.value = '';
  urlCard.value = '';
}

//попап 3
function openImgPopup(event) {
  const clickElement = event.target.closest('.card__img');
  popupPlace.classList.add('popup__opened')
  popupPlaceImg.src = clickElement.src;
  popupPlaceImg.alt = clickElement.alt;
  popupPlaceTitle.textContent = clickElement.alt;
}




const openPopup = function(selectpopup) {
  popupElementNameInput.value = profileName.textContent;
  popupElementJobInput.value = profileJob.textContent;
  selectpopup.classList.add('popup__opened')
}

const closePopup = function(selectpopup) {
  selectpopup.classList.remove('popup__opened')
}

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup(popupEditProfile)
}

const closeAddPopupByClickAddOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup(popupAddPlace)
}

const closeImgPopupByClickAddOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return
  }

  closePopup(popupPlace)
}

const addTextProfile = function(evt) {
  evt.preventDefault()
  profileName.textContent = popupElementNameInput.value;
  profileJob.textContent = popupElementJobInput.value;
  closePopup(popupElement)
}

popupOpenButtonElement.addEventListener('click', () => openPopup(popupEditProfile));
placeAddButtonElement.addEventListener('click', () => openPopup(popupAddPlace));
popupCloseButtonElement.addEventListener('click',() => closePopup(popupEditProfile));
popupCloseAddElement.addEventListener('click', () => closePopup(popupAddPlace));
popupPlaceClose.addEventListener('click', () => closePopup(popupPlace));
popupEditProfile.addEventListener('click', closePopupByClickOnOverlay);
popupAddPlace.addEventListener('click', closeAddPopupByClickAddOnOverlay);
popupPlace.addEventListener('click', closeImgPopupByClickAddOnOverlay);
formElement.addEventListener('submit', addTextProfile);
formAddElement.addEventListener('submit', addNewCard);


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
const cardImage = document.queryCommandEnabled('.card__img');
const cardTitle = document.querySelector('.card__text');
//
const profileName = document.querySelector('.person__name');
const profileJob = document.querySelector('.person__profession');
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
function setEventListener(createdCard) {
  createdCard.querySelector('.card__delete-button').addEventListener('click', handleDelete);
  createdCard.querySelector('.card__img').addEventListener('click', openImgPopup);
  createdCard.querySelector('.card__stroke').addEventListener('click', likeCardImg);
}
//наполнение из массива
function getCardTemplate(cardData) {
  const createdCard = cardTemplate.querySelector('.card').cloneNode(true);
  const cardText = createdCard.querySelector('.card__text');
  const cardImage = createdCard.querySelector('.card__img');
  const cardLikeButton = createdCard.querySelector('.card__stroke');
  cardText.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  setEventListener(createdCard);

  return createdCard
}

initialCards.forEach(function (cardData) {
  cardCase.append(getCardTemplate(cardData));
});

// лайкаем карточки
function likeCardImg(event) {
  const cardLikeButton = event.target.closest('.card__stroke');
  cardLikeButton.classList.toggle('card__stroke_active')
 }

//удаление карточек
function handleDelete(event) {
 const createdCard = event.target.closest('.card')
 createdCard.remove();
}

//добавляем новую карточку
const addNewCard = (event) => {
  event.preventDefault()
  const newCard  = {
    name: placeCard.value,
    link: urlCard.value
  }
  cardCase.prepend(getCardTemplate(newCard) );
  closePopup(popupAddPlace);
  event.target.reset();
}

//функция открытия третьего попапа
function openImgPopup(event) {
  const clickElement = event.target.closest('.card__img');
  openPopup(popupPlace)
  popupPlaceImg.src = clickElement.src;
  popupPlaceImg.alt = clickElement.alt;
  popupPlaceTitle.textContent = clickElement.alt;
}


//открытие попапов
const openPopup = function(selectedPopup) {
  selectedPopup.classList.add('popup__opened')
}

//функция открытия попапа для редактировния профиля
const openPropfilePopup = function(selectedPopup) {
  popupElementNameInput.value = profileName.textContent;
  popupElementJobInput.value = profileJob.textContent;
  openPopup(selectedPopup)
}

//закрытие попапов
const closePopup = function(selectedPopup) {
  selectedPopup.classList.remove('popup__opened')
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
const addTextProfile = function(evt) {
  evt.preventDefault()
  profileName.textContent = popupElementNameInput.value;
  profileJob.textContent = popupElementJobInput.value;
  closePopup(popupElement)
}

popupOpenButtonElement.addEventListener('click', () => openPropfilePopup(popupEditProfile));
placeAddButtonElement.addEventListener('click', () => openPopup(popupAddPlace));
popupCloseButtonElement.addEventListener('click',() => closePopup(popupEditProfile));
popupCloseAddElement.addEventListener('click', () => closePopup(popupAddPlace));
popupPlaceClose.addEventListener('click', () => closePopup(popupPlace));
formElement.addEventListener('submit', addTextProfile);
formAddElement.addEventListener('submit', addNewCard);


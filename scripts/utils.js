//открытие попапов и присваивание обработчика закрытие на Esc
export const openPopup = function(selectedPopup) {
  selectedPopup.classList.add('popup__opened')
  document.addEventListener('keydown', handleEsc);
}

//закрытие попапов и удаление обработчика закрытие на Esc
export const closePopup = function(selectedPopup) {
  selectedPopup.classList.remove('popup__opened')
  document.removeEventListener('keydown', handleEsc);
}

//закрытие на эскейп
 const ESC_KEY = 'Escape';
export function handleEsc(event) {
    if (event.key === ESC_KEY) {
        const activePopup = document.querySelector('.popup__opened');
        closePopup(activePopup);
    }
}

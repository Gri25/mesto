(()=>{"use strict";var e={871:(e,t,n)=>{e.exports=n.p+"156d07d84524cc942d68.jpg"},458:(e,t,n)=>{e.exports=n.p+"99b6e21b94798ec54759.jpg"},190:(e,t,n)=>{e.exports=n.p+"167b0005add1694393db.jpg"},426:(e,t,n)=>{e.exports=n.p+"50bb648b47735ffba9eb.jpg"},53:(e,t,n)=>{e.exports=n.p+"e2daa86be296ebffd99c.jpg"},313:(e,t,n)=>{e.exports=n.p+"d75cf55cc6dcd72e4e9a.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",(()=>{n(871),n(190),n(426),n(53),n(313),n(458);var e=document.querySelector(".popup"),t=document.querySelector(".popup_type_edit-profile"),r=document.querySelector(".popup_type_add-place"),o=document.querySelector(".person__edit-button"),i=document.querySelector(".person__add-button"),u=(e.querySelector(".popup__close"),r.querySelector(".popup__close"),r.querySelector(".popup__form")),c=(u.querySelector(".popup__input_type_name"),u.querySelector(".popup__input_type_link"),e.querySelector(".popup__input_type_name")),a=e.querySelector(".popup__input_type_job"),s=(document.querySelector(".popup__form"),document.querySelector(".popup__submit-button"),r.querySelector(".popup__submit-button"),document.querySelector(".popup-place")),l=(s.querySelector(".popup-place__container").querySelector(".popup-place__close"),document.querySelector(".cards")),f=document.querySelector(".popup__form_type_profile"),p=document.querySelector(".popup__form_type_place"),h=document.querySelector(".popup__form_type_avatar"),d=document.querySelector(".popup-delete"),_=document.querySelector(".popup_type_change-avatar"),y=document.querySelector(".person__avatar-button"),m=(document.querySelector(".popup-delete__submit-button"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_anactive",inputErrorClass:"popup__input_type_error",errorClass:".popup__input-error",errorClassActive:"popup__input-error_active",sectionInput:".popup__input-section"});function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"appendItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&v(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n,r,o){var i=t.item,u=t.handleCardClick,c=t.deleteCard,a=t.likeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=i.name,this._link=i.link,this._ownerId=i.owner._id,this._counterLike=i.likes,this._cardId=r,this._userId=o,this._cardSelector=n,this._handleCardClick=u,this._deleteCard=c,this._likeCard=a}var t,n;return t=e,(n=[{key:"_getCard",value:function(){return this._cardTemplate=document.querySelector(this._cardSelector).content,this._cardTemplate.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._trashButton.addEventListener("click",(function(){e._deleteCard()})),this._strokeButton.addEventListener("click",(function(){e._likeCard()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"generateCard",value:function(){return this._element=this._getCard(),this._trashButton=this._element.querySelector(".card__delete-button"),this._strokeButton=this._element.querySelector(".card__stroke"),this._numberLikes=this._element.querySelector(".card__stroke-number"),this._cardImage=this._element.querySelector(".card__img"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__text").textContent=this._name,this._setEventListeners(),this._ownerId!==this._userId&&(this._trashButton.style.display="none"),this.renderLike(),this._element}},{key:"removeCard",value:function(){this._element.remove()}},{key:"renderLike",value:function(){this._numberLikes.textContent=this._counterLike.length,this.showLike(this._ownerId)}},{key:"likedCard",value:function(){var e=this;return this._counterLike.some((function(t){return t._id===e._userId}))}},{key:"showLike",value:function(){this.likedCard(this._userId)?this._strokeButton.classList.add("card__stroke_active"):this._strokeButton.classList.remove("card__stroke_active")}},{key:"setLike",value:function(e){this._counterLike=e}},{key:"getItemId",value:function(){return this._cardId}}])&&g(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"_showInputError",(function(e){var t=e.closest(r._sectionInput).querySelector(r._errorClass);r._errorMessage=e.validationMessage,t.textContent=r._errorMessage,t.classList.add(r._errorClassActive),e.classList.add(r._inputErrorClass)})),E(this,"_hideInputError",(function(e){var t=e.closest(r._sectionInput).querySelector(r._errorClass);t.textContent="",t.classList.remove(r._errorClassActive),e.classList.remove(r._inputErrorClass)})),E(this,"_checkInputValidity",(function(e){r._isInputNotValid=!e.validity.valid,r._isInputNotValid?r._showInputError(e):r._hideInputError(e)})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorClassActive=t.errorClassActive,this._sectionInput=t.sectionInput,this._formElement=n}var t,n;return t=e,(n=[{key:"toggleButtonState",value:function(){this._inputList.some((function(e){return!e.validity.valid}))?(this._submitButtonElement.setAttribute("disabled",!0),this._submitButtonElement.classList.add(this._inactiveButtonClass)):(this._submitButtonElement.removeAttribute("disabled"),this._submitButtonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButtonElement=this._formElement.querySelector(this._submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(n){e._checkInputValidity(t),e.toggleButtonState(t)}))}))}},{key:"resetValidation",value:function(){var e=this;this.toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup__opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup__opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup__opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&C(t.prototype,n),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e,t){j(B(u.prototype),"open",this).call(this);var n=this._popupElement.querySelector(".popup-place__img"),r=this._popupElement.querySelector(".popup-place__title");n.src=t,n.alt=e,r.textContent=e}}])&&O(t.prototype,n),u}(L);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._handleSubmit=function(e){e.preventDefault(),n._handleFormSubmit(n._getInputValues())},n._submitButton=n._popupElement.querySelector(".popup__submit-button"),n._defaultSubmitButton=n._submitButton.textContent,n}return t=u,(n=[{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=e?t:this._defaultSubmitButton}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){T(D(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){this._formElement.reset(),T(D(u.prototype),"close",this).call(this)}}])&&R(t.prototype,n),u}(L);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=$(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){if(t&&("object"===M(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=$(r);if(o){var n=$(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;F($(u.prototype),"setEventListeners",this).call(this),this._popupElement.addEventListener("submit",(function(t){t.preventDefault(),e._submit(t,e._cardElement)}))}},{key:"open",value:function(e){this._cardElement=e,F($(u.prototype),"open",this).call(this)}}])&&J(t.prototype,n),u}(L);function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(t){var n=t.nameSelector,r=t.infoSelector,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{nameSelector:this._name.textContent,infoSelector:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;t&&(this._name.textContent=t),n&&(this._job.textContent=n),r&&(this._avatar.src=r)}}])&&K(t.prototype,n),e}();function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y,Z=new(function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getPersonalInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._checkAnswer)}},{key:"getCard",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkAnswer)}},{key:"changeUserInfo",value:function(e){var t=e.name,n=e.about;return console.log(t),console.log(n),fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkAnswer)}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkAnswer)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}},{key:"editAvatarUser",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkAnswer)}},{key:"awaylikeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkAnswer)}},{key:"likeCard",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkAnswer)}},{key:"_checkAnswer",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&W(t.prototype,n),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"5b7d2295-74cc-4a03-be9c-30bb2cf17786","Content-type":"application/json"}});function ee(e,t){var n=new k({item:e,handleCardClick:function(e,t){ne.open(e,t)},deleteCard:function(){ce.open(n)},likeCard:function(){(n.likedCard()?Z.awaylikeCard(n.getItemId()):Z.likeCard(n.getItemId())).then((function(e){n.setLike(e.likes),n.renderLike()})).catch((function(e){console.log(e)}))}},t,e._id,Y);return n}Promise.all([Z.getPersonalInfo(),Z.getCard()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];console.log(i),console.log(o),re.setUserInfo(o),Y=o._id,te.renderItems(i)})).catch((function(e){console.log(e)}));var te=new b({renderer:function(e){var t=ee(e,".cards-template").generateCard();te.appendItem(t)}},l),ne=new x(s),re=new Q({nameSelector:".person__name",infoSelector:".person__profession",avatar:".person__avatar"}),oe=new N(r,(function(e){oe.renderLoading(!0),Z.addNewCard(e).then((function(e){console.log(e);var t=ee(e,".cards-template").generateCard();te.prependItem(t),oe.close()})).finally((function(){oe.renderLoading(!1)})).catch((function(e){console.log(e)}))})),ie=new N(t,(function(e){ie.renderLoading(!0),Z.changeUserInfo(e).then((function(){console.log(e),re.setUserInfo(e),ie.close()})).finally((function(){ie.renderLoading(!1)})).catch((function(e){console.log(e)}))})),ue=new N(_,(function(e){ue.renderLoading(!0),console.log(e),Z.editAvatarUser(e.link).then((function(e){console.log(e),re.setUserInfo(e),ue.close()})).finally((function(){ue.renderLoading(!1)})).catch((function(e){console.log(e)}))})),ce=new G(d,(function(e,t){!function(e,t){console.log(t.getItemId()),console.log(e),Z.removeCard(t.getItemId()).then((function(){t.removeCard(),ce.close()})).catch((function(e){console.log(e)}))}(e,t)}));ce.setEventListeners(),ne.setEventListeners(),ie.setEventListeners(),ue.setEventListeners(),oe.setEventListeners(),o.addEventListener("click",(function(){ae.resetValidation();var e=re.getUserInfo();c.value=e.nameSelector,a.value=e.infoSelector,ie.open()})),i.addEventListener("click",(function(){se.resetValidation(),oe.open()})),y.addEventListener("click",(function(){le.resetValidation(),ue.open()}));var ae=new w(m,f),se=new w(m,p),le=new w(m,h);ae.enableValidation(),se.enableValidation(),le.enableValidation()})()})();
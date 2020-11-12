import React from 'react'
import  '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'

function App() {
// const [isVisible, setIsVisible] = React.useState(false);
const [isEditProfilePopupOpen, setPopupProfileState] = React.useState(false);
const [isAddPlacePopupOpen, setPopupPlaceState] = React.useState(false);
const [isEditAvatarPopupOpen, setPopupAvatarState] = React.useState(false);


function handleEditProfileClick() {
  setPopupProfileState(true);
}

function handleAddPlaceClick() {
  setPopupPlaceState(true)
}

function handleEditAvatarClick() {
  setPopupAvatarState(true)
}

  return (
    <div className="page">
    <Header/>
    <Main
    onEditProfile = {handleEditProfileClick}
    onAddPlace = {handleAddPlaceClick}
    onEditAvatar = {handleEditAvatarClick}/>
    <Footer/>
    <PopupWithForm
      name = 'profile'
      title = 'Редактировать профиль'
      isOpen = {isEditProfilePopupOpen}
      submitButton = 'Сохранить'>
        <input type="text" name="name" id="name" className="popup__input popup__input__profile_name" placeholder="Имя" minLength="2"
          maxLength="40" required/>
        <p className="popup__input-error-message" id="name-error"></p>
        <input type="text" name="description" id="description" className="popup__input  popup__input_description"
          placeholder="Описание" minLength="2" maxLength="200" required/>
        <p className="popup__input-error-message" id="description-error"></p>
    </PopupWithForm>
    <PopupWithForm
      name = 'place'
      title = 'Новое место'
      isOpen = {isAddPlacePopupOpen}
      submitButton = 'Создать'>
        <input type="text" name="place-name" id="place-name" className="popup__input popup__input_place-name"
          placeholder="Название" minLength="2" maxLength="30" required/>
        <p className="popup__input-error-message" id="place-name-error"></p>
        <input type="url" name="place-url" id="place-url" className="popup__input popup__input_url"
          placeholder="Ссылка на картинку" required/>
        <p className="popup__input-error-message" id="place-url-error"></p>
    </PopupWithForm>
    <PopupWithForm
      name = 'userpic'
      title = 'Обновить аватар'
      isOpen = {isEditAvatarPopupOpen}
      submitButton = 'Сохранить'>
      <input type="url" name="userpic-url" id="userpic-url" className="popup__input popup__input_url"
        placeholder="Ссылка на картинку" required/>
        <p className="popup__input-error-message" id="userpic-url-error"></p>
    </PopupWithForm>
    <PopupWithForm
      name = "delete"
      title = 'Вы уверены?'
      closeButton = 'popup__close-button_delete'
      deleteButton = 'popup__submit-button_delete'
      submitButton = 'Да'>
    </PopupWithForm>

    <ImagePopup></ImagePopup>

  <template className="card-template">
    <div className="card">
      <img src="/" className="card__photo" alt="Фото места."/>
      <button className="card__delete-button"></button>
      <h2 className="card__text"></h2>
      <button type="button" className="card__like"></button>
      <p className="card__like-counter">0</p>
    </div>
  </template>
  </div>
  );
}

export default App;
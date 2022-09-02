import {closeModal, openModalBurger} from '../active-modal/active-modal'

let buttonBurger = document.querySelector('.button__burger_show')
// let burgerModal = document.querySelector('.burger-modal')
let burgerPage = document.querySelector('.burger-page')

let backBurgerButton = document.querySelector('.burger-page_disabled')
// let wrapperActive = document.querySelector('.wrapper-burger_active')
buttonBurger.addEventListener('click', () => {
  closeModal()
  openModalBurger()
  // burgerPage.classList.add('burger-page_active')
  // burgerModal.classList.add('burger-modal_active')
})

backBurgerButton.addEventListener('click', () => {
  closeModal()
  openModal()
})

burgerPage.addEventListener('click', (e) => {
  if (e.target === burgerPage) {
    // feedbackModal.classList.remove('feedback-modal_active')
    // feedbackPage.classList.remove('feedback-page_active')
    closeModal()
  }
})

import { closeModal, openModalCallback } from '../active-modal/active-modal'

let callButton = document.querySelector('.button__call_show')
let callButtonLeft = document.querySelector('.button__call_showLeft')
let callbackPage = document.querySelector('.callback-page')
let backCallButton = document.querySelector('.callback-page_disabled')

callButton.addEventListener('click', () => {
  closeModal()
  openModalCallback()
})

callButtonLeft.addEventListener('click', () => {
  closeModal()
  openModalCallback()
})

backCallButton.addEventListener('click', () => {
  closeModal()
})

callbackPage.addEventListener('click', (e) => {
  if (e.target === callbackPage) {
    closeModal()
  }
})

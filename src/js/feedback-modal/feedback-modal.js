import { closeModal, openModalFeedback } from '../active-modal/active-modal'

let chatButton = document.querySelector('.button__chat_show')
let chatButtonLeft = document.querySelector('.button__chat_showLeft')
let feedbackPage = document.querySelector('.feedback-page')
let backFeedButton = document.querySelector('.feedback-page_disabled')

chatButton.addEventListener('click', () => {
  closeModal()
  openModalFeedback()
})

chatButtonLeft.addEventListener('click', () => {
  closeModal()
  openModalFeedback()
})

backFeedButton.addEventListener('click', () => {
  closeModal()
})

feedbackPage.addEventListener('click', (e) => {
  if (e.target === feedbackPage) {
    closeModal()
  }
})

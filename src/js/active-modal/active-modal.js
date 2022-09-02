export function closeModal() {
  const active = [
    'feedback-page_active',
    'feedback-modal_active',
    'burger-modal_active',
    'burger-page_active',
    'callback-page_active',
    'callback-modal_active'
  ]

  active.forEach((element) => {
    try {
      const item = document.querySelector(`.${element}`)
      item.classList.remove(element)
    } catch {}
  })
}

export function openModalCallback() {
  let callbackModal = document.querySelector('.callback-modal')
  let callbackPage = document.querySelector('.callback-page')

  callbackPage.classList.add('callback-page_active')
  callbackModal.classList.add('callback-modal_active')
}

export function openModalFeedback() {
  let feedbackModal = document.querySelector('.feedback-modal')
  let feedbackPage = document.querySelector('.feedback-page')

  feedbackModal.classList.add('feedback-modal_active')
  feedbackPage.classList.add('feedback-page_active')
}
export function openModalBurger() {
  let burgerModal = document.querySelector('.burger-modal')
  let burgerPage = document.querySelector('.burger-page')

  burgerPage.classList.add('burger-page_active')
  burgerModal.classList.add('burger-modal_active')
}

 

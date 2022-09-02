// -------------РЕМОНТ ТЕХНИКИ БРЕНДОВ (первый свайпер)-------------
// let activeBtn = document.querySelector('.showBtn')
// let swiperContainer = document.querySelector('.swiper-container')

// activeBtn.addEventListener('click', () => {
//   swiperContainer.classList.toggle('swiper-container_active')
//   activeBtn.innerHTML =
//     activeBtn.innerHTML === 'Скрыть'
//       ? (activeBtn.innerHTML = 'Показать все')
//       : (activeBtn.innerHTML = 'Скрыть')
//   activeBtn.classList.toggle('showBtn-active')
//   activeBtn.classList.toggle('showBtn-margin')
// })




// -------------о компании текст-------------
let buttonReadmore = document.querySelector('.about-company__readmore')
let textOpen = document.querySelector('.about-company__text')

buttonReadmore.addEventListener('click', () => {
  buttonReadmore.classList.toggle('about-company__readmore_active')
  textOpen.classList.toggle('about-company__text_open')
  buttonReadmore.innerHTML =
    buttonReadmore.innerHTML === 'Скрыть'
      ? (buttonReadmore.innerHTML = 'Показать все')
      : (buttonReadmore.innerHTML = 'Скрыть')
})

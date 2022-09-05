// -------------РЕМОНТ ТЕХНИКИ БРЕНДОВ (первый свайпер)-------------
let activeBtn = document.querySelector('.showBtn')
let swiperContainer = document.querySelector('.swiper-container')

activeBtn.addEventListener('click', () => {
  swiperContainer.classList.toggle('swiper-container_active')
  activeBtn.innerHTML =
    activeBtn.innerHTML === 'Скрыть'
      ? (activeBtn.innerHTML = 'Показать все')
      : (activeBtn.innerHTML = 'Скрыть')
  activeBtn.classList.toggle('showBtn-active')
  activeBtn.classList.toggle('showBtn-margin')
})

const myswiper = (function () {
  if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      direction: 'horizontal',
      loop: true,

      spaceBetween: 16,
      width: 240,
      slidesPerView: 1
    })
  }
})()
window.addEventListener('resize', () => {
  myswiper()
})

// -------------РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ (второй свайпер)-------------

const myswiperSecond = (function () {
  if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper-slider--repair', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      direction: 'horizontal',
      loop: true,

      spaceBetween: 16,
      width: 240,
      slidesPerView: 1
    })
  }
})()
window.addEventListener('resize', () => {
  myswiperSecond()
})

let activeBtnSecond = document.querySelector('.showBtn-repair')
let swiperContainerSecond = document.querySelector('.swiper-container-repair')

activeBtnSecond.addEventListener('click', () => {
  swiperContainerSecond.classList.toggle('swiper-container-repair_active')
  activeBtnSecond.innerHTML =
    activeBtnSecond.innerHTML === 'Скрыть'
      ? (activeBtnSecond.innerHTML = 'Показать все')
      : (activeBtnSecond.innerHTML = 'Скрыть')
  activeBtnSecond.classList.toggle('showBtn-active')
  activeBtnSecond.classList.toggle('showBtn-margin')
})

// -------------ЦЕНЫ НА УСЛУГИ (третий свайпер)-------------|

const myswiperThird = (function () {
  if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper-slider--price', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      direction: 'horizontal',
      loop: true,

      spaceBetween: 16,
      width: 260,
      slidesPerView: 1
    })
  }
})()
window.addEventListener('resize', () => {
  myswiperThird()
})

// const swiper = new Swiper(".swiper-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   spaceBetween: 16,
//   width: 240,
//   slidesPerView: 1,
// });

// let swiperMode = () => {
//   if (window.matchMedia('(min-width: 768px)').matches) {
//     swiper.disable();
//   } else if (window.matchMedia('(max-width: 768px)').matches) {
//     swiper.enable();
//   }}

//   swiperMode();

//   window.addEventListener('resize', () => {
//     swiperMode();
//   });
// const swiper = new Swiper(".swiper-slider", {
//   direction: "horizontal",
//   loop: true,
//   spaceBetween: 16,
//   autoheight: true,
//   loop: false,
//   feeMode: false,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// let swiperMode = function () {
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     swiper.disable();
//   } else if (init == false && window.matchMedia("(max-width: 768px)").matches) {
//     swiper.enable();
//   }
// };
// window.addEventListener("resize", function () {
//   swiperMode();
// });

// window.onload = function () {
//   let swiper-item = document.querySelectorAll('.swiper-item');
//   let showBtn =

// }

// let mql = window.matchMedia("(max-width: 320px)");

// window.addEventListener("resize", () => {
//   if (mql.matches) {
//     let newSwiper = new Swiper(".swiper__slider", {
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       spaceBetween: 16,
//       width: 240,
//       slidesPerView: 1,
//       init: true,
//     });
//   } else {
//     swiper.destroy();
//   }
// });
// const activeBtn = document.querySelector(".showBtn");
// const swiperContainer = document.querySelector(".swiper-container");

// activeBtn.addEventListener("click", () => {
//   swiperContainer.classList.toggle("swiper-container_active");
//   activeBtn.innerHTML =
//     activeBtn.innerHTML === "Скрыть"
//       ? (activeBtn.innerHTML = "Показать всё")
//       : (activeBtn.innerHTML = "Скрыть");
//   activeBtn.classList.toggle("showBtn-active");
// });

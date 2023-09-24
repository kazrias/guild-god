let menu = ['Overview', 'Players list', 'Logs', 'Statistics', 'Siphoned Energy', 'Silver', 'Hideout','ZVZ', 'Kills | Deaths']
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  // autoHeight: true,
  speed: 0,
  // effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
  },
});
let elems = document.querySelectorAll('.swiper-pagination-bullet');
console.log(elems);
let sliders = document.querySelectorAll('.hehe2');
let hehe3=document.querySelector('.hehe3');

sliders.forEach(el=>{
  el.style.opacity='0'
})
elems.forEach(elem => {
  console.log(elem);
  elem.addEventListener('click', () => {
    sliders.forEach(el=>{
      setTimeout(()=>{
        el.style.opacity='1';
        hehe3.style.overflowY='scroll'
      },2000)
    })
  })
})

let firstSlide = document.querySelector('.hehe2');
firstSlide.style.opacity = '0'
let search = document.querySelector('.search-btn');
search.addEventListener('click', () => {
  setTimeout(()=>{
    firstSlide.style.opacity = '1'
  },1500)
  
})

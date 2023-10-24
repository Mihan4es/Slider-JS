// Исходные данные по слайдеру
const slider = document.querySelector('.slider');
const sliderImages = slider.querySelectorAll('.image');
const sliderLine = document.querySelector('.slider_line');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.link_section-2_navigation');
const textCity = document.querySelectorAll('.city_text');
const textArea = document.querySelectorAll('.area_text');
const textTime = document.querySelectorAll('.time_text');

let sliderCount = 0;
let sliderWidth;

// Кнопки листания слайдов вперед и назад
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);


//Функции
// Задает нужную ширину картинки и sliderLine
function showSlide () {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}

showSlide();


// Перелистывает слайд вперед и назад
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;
  console.log(sliderCount);
    rollSlider();
  
  }

  function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;
    rollSlider();
    console.log(sliderCount);
  }

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide1(index) {
  dots.forEach(item => item.classList.remove('active-dot'));
  dots[index].classList.add('active-dot');
  links.forEach(item => item.classList.remove('active-link'));
  links[index].classList.add('active-link');
  textCity.forEach(item => item.classList.remove('active-text'));
  textCity[index].classList.add('active-text');
  textArea.forEach(item => item.classList.remove('active-text'));
  textArea[index].classList.add('active-text');
}



// Вешает клик на dot
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
      rollSlider();
      thisSlide1(sliderCount);
  })
})

// Вешает клик на link
links.forEach((link, index) => {
  link.addEventListener('click', () => {
    sliderCount = index;
      rollSlider();
      thisSlide1(sliderCount);
  })
})

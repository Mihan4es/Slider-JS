let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slide1, .slide2, .slide3');
let links = document.querySelectorAll('.lin');
let nextBtn = document.querySelector('.prev-btn');
let prevBtn = document.querySelector('.next-btn');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;

let slideData = [
  {
      city: "Rostov-on-Don <br> LCD admiral",
      apartmentArea: "81 m2",
      repairTime: "3.5 months",
      repairCost: "Upon request"
  },
  {
      city: "Sochi <br> Thieves",
      apartmentArea: "105 m2",
      repairTime: "4 months",
      repairCost: "Upon request"
  },
  {
      city: "Rostov-on-Don <br> Patriotic",
      apartmentArea: "93 m2",
      repairTime: "3 months",
      repairCost: "Upon request"
  }
];

function updateInfo(slideIndex) {
  let cityElement = document.querySelector('.card_city p');
  let apartmentElement = document.querySelector('.card_apartment p');
  let timeElement = document.querySelector('.card_time p');
  let costElement = document.querySelector('.card_cost p');
  let data = slideData[slideIndex];

  cityElement.innerHTML = data.city;
  apartmentElement.textContent = data.apartmentArea;
  timeElement.textContent = data.repairTime;
  costElement.textContent = data.repairCost;
}

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    dots[n].classList.add('active-dot');

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active-links');
    }
    links[n].classList.add('active-links');
    updateInfo(n);
};

prevBtn.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', function() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    showSlide(currentSlide);
});

dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

links.forEach(function(link, index) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide);
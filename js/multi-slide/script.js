const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

makeClone();

// 앞, 뒤 똑같은 친구들 만들기
function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount-1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add('animated');
  }, 100);
}

// 부모Ul 최대 넓이 설정
function updateWidth() {
  let currentSlides = document.querySelectorAll('.slides li');
  let newSlideCount = currentSlides.length;

  let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + "px";
  slides.style.width = newWidth;
}

// 중간 블록으로 지정
function setInitialPos() {
  let initialTranslateValue = -(slideWidth + slideMargin) * slideCount
  // slides { transform  " translateX(-1000px)"}
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
}

nextBtn.addEventListener('click', () => {
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener('click', () => {
  moveSlide(currentIdx - 1);
});


// 움직이기
function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIdx = num;

  if (currentIdx === slideCount || -currentIdx === slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = 0;
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
  // console.log(currentIdx, slideCount);
}
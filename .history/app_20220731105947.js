const carousel = document.querySelector('.carousel');
let slider = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
};

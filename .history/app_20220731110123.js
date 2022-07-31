const carousel = document.querySelector('.carousel');
let slider = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating DOM Element
  let slide = document.createElement('div');
  let imgElement = document.createElement('img');
  let content = document.createElement('div');
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
};

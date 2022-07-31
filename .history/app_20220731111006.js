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

  //attaching all elemnets
  imgElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  content.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classname
};

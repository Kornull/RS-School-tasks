const petsNames = ['Katrine', 'Charly', 'Freddie', 'Jennifer', 'Scarlet', 'Sophia', 'Timmy', 'Woody']
const sliderMain = document.querySelector('.slider__cards')
const sliderPets = document.querySelector('.slider__cards--our')

function slide(count) {
  let numName;
  sliderMain.innerHTML = '';
  const arrName = [];
  while (arrName.length < count) {
    numName = Math.floor(Math.random() * petsNames.length);
    if (!arrName.includes(numName)) {
      arrName.push(numName);
    }
  }
  for (num of arrName) {
    let a = document.createElement('li');
    if (sliderPets) {
      a.className = 'slider__blocks slider--our';
    } else {
      a.className = 'slider__blocks';
    }
    a.innerHTML = `<div class='slider__img'><img src="../assets/img/pets-${petsNames[num].toLowerCase()}.png"></img></div><div class="slider__title">
  <h3 class="our__pets--slider">${petsNames[num]}</h3>
  </div> <button class="btn btn__white">
   Learn more
  </button>`;
    sliderMain.append(a);
  }
}

window.addEventListener('resize', function () {
  let size = document.documentElement.clientWidth;
  if (!sliderPets) {
    if (size > 1279) {
      count = 3;
    } else if (size > 767) {
      count = 2;
    } else {
      count = 1;
    }
  }
  if (sliderPets) {
    if (size > 1279) {
      count = 8;
    } else if (size > 767) {
      count = 6;
    } else {
      count = 3;
    }
  }
  slide(count)
});

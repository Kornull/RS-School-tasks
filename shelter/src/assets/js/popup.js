import petsConfig from '../../main/pets.json';

const popupPets = document.querySelector('.popup--pets');
const slider = document.querySelector('.pets__slider');
const popup = document.querySelector('.popup');
const id = Array.from(document.all).map(i => i.id).filter(i => i != "");
const arrIdBlock = ['help', 'footer', 'text-our', 'pets']
const arrId = [];

id.forEach(i => {
  if (!arrIdBlock.includes(i)) arrId.push(i)
});

(function () {
  slider.querySelectorAll('.slider__blocks').forEach(el => {
    el.addEventListener('click', function (x) {
      let namePet = el.querySelector('h3').textContent;
      popup.classList.add('active');
      openPopup(namePet)
    });
  })
}())

const openPopup = (el) => {
  petsConfig.forEach(j => {
    if (el === j.name) {
      arrId.forEach(i => {
        if (i === 'img') {
          if (popupPets) {
            popup.querySelector(`#${i}`).innerHTML = `<img src="../${j[i]}">`;
          } else {
            popup.querySelector(`#${i}`).innerHTML = `<img src="${j[i]}">`;
          }
        } else {
          popup.querySelector(`#${i}`).innerText = j[i];
        }
      });
    }
  });
};

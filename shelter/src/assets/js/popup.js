import petsConfig from '../../main/pets.json';

const popupPets = document.querySelector('.popup--pets');
const slider = document.querySelector('.pets__slider');
const popup = document.querySelector('.popup');
const id = Array.from(document.all).map(i => i.id).filter(i => i != "");


(function () {
  slider.querySelectorAll('.slider__blocks').forEach(el => {
    el.addEventListener('click', function (x) {
      popup.classList.add('active')
      let namePet = el.querySelector('h3').textContent
      console.log(el.querySelector('h3').textContent)
      for (let i of petsConfig) {
        if (i.name === namePet) {
          if (popupPets) {
            document.querySelector('#img').innerHTML = `<img src="../${i.img}">`
          } else {
            document.querySelector('#img').innerHTML = `<img src="${i.img}">`
          }
          document.querySelector('#name').innerText = i.name;
          document.querySelector('#type').innerText = i.type;
          document.querySelector('#breed').innerText = i.breed;
          document.querySelector('#description').innerText = i.description;
          document.querySelector('#age').innerText = i.age;
          document.querySelector('#diseases').innerText = i.diseases;
          document.querySelector('#inoculations').innerText = i.inoculations;
          document.querySelector('#parasites').innerText = i.parasites;
          console.log(i)
        }
      }
    });
  })
}())

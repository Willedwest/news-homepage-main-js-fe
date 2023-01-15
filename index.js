//Getting nodeElement from the DOM

const openMenuBtn = document.querySelector('.openMenu');

const closeMenuBtn = document.querySelector('.closeMenu');

let container = document.querySelector('.container')

console.log(container);

openMenuBtn.addEventListener('click', () => {
  container.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
  container.classList.remove('active')
});
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('header .navigation').classList.add('active');
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('header .navigation').classList.remove('active');
});

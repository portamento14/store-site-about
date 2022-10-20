const hamburgerMenu=document.getElementById('hamburger-menu');
const cover=document.getElementById('cover');
const closeMenu=document.getElementById('close-menu');
const aboutClose=document.getElementById('about-close');

hamburgerMenu.addEventListener('click',()=>{
  cover.classList.add('show');
  closeMenu.classList.add('active');
  hamburgerMenu.classList.add('invisible');
});

closeMenu.addEventListener('click',()=>{
  cover.classList.remove('show');
  closeMenu.classList.remove('active');
  hamburgerMenu.classList.remove('invisible');
});

aboutClose.addEventListener('click',()=>{
  cover.classList.remove('show');
  closeMenu.classList.remove('active');
  hamburgerMenu.classList.remove('invisible');
});
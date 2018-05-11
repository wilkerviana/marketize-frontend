let btnMenu = document.querySelector('.collapse-button');
let linkMenu = document.querySelectorAll('.menu-header .nav-link');
btnMenu.addEventListener('click',function(){
  document.querySelector('.menu-header').classList.toggle('active');
});
linkMenu.forEach(function(link){
  link.addEventListener('click',function(){
    document.querySelector('.menu-header').classList.remove('active');
  });
});
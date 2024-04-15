document.addEventListener ('DOMContentLoaded', function () {
  window.addEventListener ('scroll', function () {
    let header = document.getElementById ('estagio-header');
    let boxCategoria1 = document.querySelector ('#estagio-aluno .box-categoria');  
    let boxCategoria2 = document.querySelector ('#estagio-empresas .box-categoria');   
 
    if (!header || !boxCategoria1 || !boxCategoria2) {
      return;  
    }

    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.classList.add (
        'scrolled',
        'animate__animated',
        'animate__fadeInDown'
      );
    } else {
      header.classList.remove (
        'scrolled',
        'animate__animated',
        'animate__fadeInDown'
      );
    }

    if (scrollPosition > 200) {
      boxCategoria1.classList.add (
        'animate__animated', 
        'animate__fadeInLeft'
    );
    } else {
      boxCategoria1.classList.remove (
        'animate__animated',
        'animate__fadeInLeft'
      );
    }

    if (scrollPosition > 1700) {
      boxCategoria2.classList.add (
        'animate__animated', 
        'animate__fadeInLeft'
      ); 
    } else {
      boxCategoria2.classList.remove (
        'animate__animated', 
        'animate__fadeInLeft'
      ); 
    }
  });
});

document.addEventListener ('DOMContentLoaded', function () {
  let btnDuvidas = document.getElementById ('btn-duvidas');
  let boxDuvidas = document.getElementById ('box-duvidas');
  let boxArrow = document.querySelector ('.box-arrow');

  btnDuvidas.addEventListener ('click', function () {
    if (boxDuvidas.classList.contains ('fade')) {
      boxDuvidas.classList.remove ('fade', 'd-none');
      boxDuvidas.classList.add ('show', 'd-block');
      boxArrow.classList.add ('rotate');
    } else {
      boxDuvidas.classList.remove ('show', 'd-block');
      boxDuvidas.classList.add ('fade', 'd-none');
      boxArrow.classList.remove ('rotate');
    }
  });
}); 

function addAnimation (element) {
  element.classList.add ('btn-shadow-animation-over');
  element.classList.remove ('btn-shadow-animation-out'); 
}

function removeAnimation (element) {
  element.classList.remove ('btn-shadow-animation-over'); 
  element.classList.add ('btn-shadow-animation-out'); 
}
 

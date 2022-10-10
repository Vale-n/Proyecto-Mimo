/*------CARRUSEL------*/
(function() {
  
    var slideContainer = $('.slide-container');
    
    slideContainer.slick();
    
    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);
    
    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.clash-card img').fadeOut(1000);
    });
    
    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.clash-card img').fadeIn(200);
    });
    
  })();

  /*-----------------------------------------------------CARRUSEL------------------------------------------------------*/
 
  /*-----------------------------------------------Acordeon de té------------------------------------------------------*/
   const accordionContent = document.querySelectorAll(".accordion-content");

  accordionContent.forEach((item, index) => {
      let header = item.querySelector("header");
      header.addEventListener("click", () =>{
          item.classList.toggle("open");
  
          let description = item.querySelector(".description");
          if(item.classList.contains("open")){
              description.style.height = `${description.scrollHeight}px`; 
              item.querySelector("i").classList.replace("fa-plus", "fa-minus");
          }else{
              description.style.height = "0px";
              item.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
          removeOpen(index); 
      })
  })
  
  function removeOpen(index1){
      accordionContent.forEach((item2, index2) => {
          if(index1 != index2){
              item2.classList.remove("open");
  
              let des = item2.querySelector(".description");
              des.style.height = "0px";
              item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
          }
      })
  }
  /*-----------------------------------------------Acordeon de té------------------------------------------------------*/
const navSlide = () => {
    const burger = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        

        // animate links 
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation= '';
            }else{
                link.style.animation= `navLinkFade 0.5s ease forwards ${index / 5 + .5}s`;
            }
        });

        // burger animation 
        burger.classList.toggle('toggle');
    });
}

navSlide();


$(document).ready(function(){
    var docEl = $(document),
        headerEl = $('.section-nav'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav'),
        linkScroll = $('.scroll');
    
    docEl.on('scroll', function(){
      if ( docEl.scrollTop() > 60 ){
        headerEl.addClass('fixed-to-top');
        headerWrapEl.addClass('fixed-to-top');
        navEl.addClass('fixed-to-top');
      }
      else {
        headerEl.removeClass('fixed-to-top');
        headerWrapEl.removeClass('fixed-to-top');
        navEl.removeClass('fixed-to-top');
      }
    });
    
    // linkScroll.click(function(e){
    //     e.preventDefault();
    //     $('body, html').animate({
    //        scrollTop: $(this.hash).offset().top
    //     }, 500);
    //  });
  });
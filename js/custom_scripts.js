



    
$('.hamburger').click(function(){

  	$('.hamburger').toggleClass('is-active');
  	$('.hamburger-menu').toggleClass('show-menu');
    event.stopPropagation();
})

$(".hamburger-menu").on("click", function (event) {
    event.stopPropagation();
});

$(".general-header").on("click", function () {
    $('.hamburger').hasClass('is-active') //method of choice: our method uses the input checkbox method as fallback.
    $('.hamburger').removeClass('is-active');
    $('.hamburger-menu').removeClass('show-menu');
});


 $(document).ready(function(){
  $('#carouselExample').carousel({
    interval: 0
  })
   $('.partners-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
      });
      
      
      $('.seriv').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
      

  $('.galery-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.galery-carousel-thumbnails'
  });
  $('.galery-carousel-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.galery-carousel',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    swipeToSlide: true
  });


      $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
      $('.slick-next').html('<i class="fas fa-angle-right"></i>');
});

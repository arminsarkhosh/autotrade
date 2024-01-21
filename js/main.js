$(document).ready(function(){
    $('.slider').slick({
      centerMode: true,
      centerPadding: '25%',
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '10%',
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '5%',
          }
        }
      ]
    });
  });
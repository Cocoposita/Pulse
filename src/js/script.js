// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         //adaptiveHeigth: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="/icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="/icons/right.png"></button>',
//         responsive: [
//             {
//             breakpoint: 992,
//             settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }
//         ]
//     }
//     ); 
//   });

const slider = tns({
    container: '.carousel__inner',
    controls: false,
    nav: false,
    items: 1,
    slideBy: 'page',
    autoplay: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  
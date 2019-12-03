$(function () {
  $('.owl-carousel').owlCarousel({
    nav:true,
    pagination: true,
    responsive:{
      320: {
        items: 1,
        pagination: true,
        nav:false
      },
      768:{
          items:2,
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
    }
  });
});
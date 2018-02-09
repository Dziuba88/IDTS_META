$.get("img/sprite.svg", function(data) {
  var div = document.createElement("div");
  div.hidden = true;
  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
  document.body.insertBefore(div, document.body.childNodes[0]);
});

function createSticky(sticky) {
  if (typeof sticky !== "undefined") {
    var pos = 100,  win = $(window);
    win.on("scroll", function() {
      win.scrollTop() >= pos ? sticky.addClass("sticky") : sticky.removeClass("sticky");
    });
  }
};

$(document).ready(function() {
  createSticky($(".navbar"));
  $('.navbar--nav').singlePageNav({
    currentClass: 'active',
    offset: 61,
    speed: 960,
  });

  $('[data-slider=promo]').owlCarousel({
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    navText: ['<svg><use xlink:href="#prev"></use></svg>','<svg><use xlink:href="#next"></use></svg>'],
    dots: false,
    items:1,
    loop:true,
    margin:0,
    video:true,
    thumbs: true,
    thumbImage: true,
  })

  $('[data-slider=gallery]').owlCarousel({
    items: 5,
    thumbs: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: true,
    navText: ['<svg><use xlink:href="#prev"></use></svg>','<svg><use xlink:href="#next"></use></svg>'],
    dots: false,
  });





});


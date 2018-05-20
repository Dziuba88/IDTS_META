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
  // NAVBAR SETTINGS
    createSticky($(".navbar"));

    $('[data-show=navbar--nav]').click(function () {
      $(this).toggleClass('active');
      $('.navbar--nav').toggleClass('open');
    })

    $('.navbar--nav ul li a').click(function () {
      $('.navbar--nav').removeClass('open');
    })

    $('.navbar--nav').singlePageNav({
      currentClass: 'active',
      offset: 60,
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
  // distributie--map //
    var locations = [
        ["Location Title", 45.8453500, 24.8500363, "img/marker.png"],
        ["Location Title", 46.9999648, 28.7881371, "img/marker.png"],
        ["Location Title", 46.7834818, 23.546473, "img/marker.png"],
        ["Location Title", 44.4379269, 26.024598, "img/marker.png"],
        ["Location Title", 45.8757058, 22.8782045, "img/marker.png"],
        ["Location Title", 45.7411630, 21.1465503, "img/marker.png"],
        ["Location Title", 47.1562327, 27.5169309, "img/marker.png"],
    ];
    var map = new google.maps.Map(document.getElementById('distributie--map'), {
        zoom: 6,
        center: new google.maps.LatLng(45.84535,24.8500363),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: {
                url: locations[i][3],
                scaledSize: new google.maps.Size(25, 30)
            }
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }


    var contact_map = new google.maps.Map(document.getElementById('contacts--map'), {
        zoom: 10,
        center: new google.maps.LatLng(44.439866, 26.149394),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  // contact_map //
    var contact_location = ["Location Title", 44.439866, 26.149394, "img/marker.png"];
    var info = new google.maps.InfoWindow({content: 'SC MAI SERV SRL'});

    contact_marker = new google.maps.Marker({
            position: new google.maps.LatLng(contact_location[1], contact_location[2]),
            map: contact_map,
            icon: {
                url: contact_location[3],
                scaledSize: new google.maps.Size(34, 38)
            }
    });
    contact_marker.addListener('click', function() {
      info.open(contact_map, contact_marker);
    });
  // promo gallery
    $('[data-slider=gallery]').owlCarousel({
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
        },
        640:{
            items:2,
        },
        961:{
            items:3,
        },
        1201:{
            items:5,
        }
      },
      thumbs: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      nav: true,
      navText: ['<svg><use xlink:href="#prev"></use></svg>','<svg><use xlink:href="#next"></use></svg>'],
      dots: false,
    });
    $('[data-slider=gallery]').magnificPopup({
      delegate: 'a',
      type: 'image',
      fixedContentPos: true,
      mainClass: 'mfp-img-mobile',
      closeMarkup: '<button title="%title%" class="mfp-close"><svg><use xlink:href="#close"></use></svg></button>',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tCounter: '%curr% | %total%',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>Promo Gallery</small>';
        }
      },
      callbacks: {
        buildControls: function() {
          this.arrowLeft.appendTo(this.contentContainer);
          this.arrowRight.appendTo(this.contentContainer);
        }
      }
    });
  // catalog modals
    $('.catalog--link').magnificPopup({
      type: 'inline',
      closeMarkup: '<button title="%title%" class="mfp-close"><svg><use xlink:href="#close"></use></svg></button>',

      closeBtnInside: true,
      preloader: false,
      fixedContentPos: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
  // Validate Plugin //
    if($("[data-validate]").length) {
      //$.validator.messages.required = 'Заполните правильно поле';
      $('[data-validate]').each(function() {
        $(this).validate({
          focusInvalid: false,
          errorElement: "span",
          errorPlacement: function(error, element) {{
            //$( element ).parent().find('label').addClass("error");
            $( element ).addClass("error");
            error.insertAfter( element );
          }}
        });
      });
    };

  $('[data-more]').each( function () {
    var target = $(this).data('more');
    $(this).click( function () {
      $(target).toggleClass('show')
      $(this).toggleClass('active')
      $(this).text(function(i, text){
        return text === "Citeste mai mult" ? "Ascunde" : "Citeste mai mult";
      })
    });
  });

  $('[data-navigation=moldova], [data-direction=moldova]').addClass('active');
  $('[data-navigation=gurmoano], [data-direction=gurmoano]').removeClass('active');

  $('[data-navigation=moldova]').click(function () {
    $(this).addClass('active');
    $('[data-navigation=gurmoano]').removeClass('active');
    $('[data-direction=moldova]').addClass('active');
    $('[data-direction=gurmoano]').removeClass('active');
  })
  $('[data-navigation=gurmoano]').click(function () {
    $(this).addClass('active');
    $('[data-navigation=moldova]').removeClass('active');
    $('[data-direction=gurmoano]').addClass('active');
    $('[data-direction=moldova]').removeClass('active');
  })

});

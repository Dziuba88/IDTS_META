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
        zoom: 7,
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
                scaledSize: new google.maps.Size(34, 38)
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
        zoom: 17,
        center: new google.maps.LatLng(44.4080438,26.0834312),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
// contact_map //
  var contact_location = ["Location Title", 44.4080438, 26.0834312, "img/marker.png"];
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


});

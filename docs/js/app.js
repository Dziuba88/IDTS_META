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
});


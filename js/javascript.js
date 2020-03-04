function toggleMeny() {

    document.querySelector(".navLinks").classList.toggle("navActive");
    document.querySelector(".burger").classList.toggle("toggle");

}

document.querySelector(".burger").addEventListener("click", toggleMeny);



var didScroll;
// on scroll, let the interval function know the user has scrolled
$(window).scroll(function(event){
  didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $("nav").outerHeight();
    var st = $(this).scrollTop();
    

    // If current position > last position AND scrolled past navbar...
if (st > lastScrollTop && st > navbarHeight){
    // Scroll Down
    $("nav").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    // If did not scroll past the document (possible on mac)...
    if(st + $(window).height() < $(document).height()) { 
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}



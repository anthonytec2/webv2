window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Navbar burger toggle (mobile menu)
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Bulma carousel / slider init (no-ops if no such elements exist)
    if (window.bulmaCarousel) {
      bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 3,
        loop: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
      });
    }
    if (window.bulmaSlider) {
      bulmaSlider.attach();
    }
});

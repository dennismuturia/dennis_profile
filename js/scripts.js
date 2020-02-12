$(window).scroll(function() {
    var offset = $(window).scrollTop();
    var sizeChange = $(window).scrollTop();
    console.log(offset);
    $('.navbar').toggleClass('trans', offset < 50);
  });
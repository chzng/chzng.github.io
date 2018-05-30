$(document).ready(function() {

  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function(e) {
    e.preventDefault();
    $('.flex-container').toggleClass('active');
    
    // Mask Click
    if($('.flex-container').hasClass('active')) {
      $("body").css("overflow","hidden");
      $('.flex-container.active .page-mask').on('click',function(){
        $('.flex-container').removeClass('active');
        $('body').removeAttr("style");
      });
    }
  });
  
  // Search Settings
  $('.search-icon').on('click', function(e){
    e.preventDefault();
    $('.search-box').toggleClass('search-active');

    if ($('.search-box').hasClass('search-active')) {
      $('.search-icon-close').on('click', function(e){
  		e.preventDefault();
  		$('.search-box').removeClass('search-active');
  	});
  }
  });

});

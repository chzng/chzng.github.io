$(document).ready(function() {

  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function(e) {
    e.preventDefault();
    $('.flex-container').toggleClass('active');
    
    // Mask Click
    if($('.flex-container').hasClass('active')) {
      $("body").css("display","block");
      $('.flex-container.active .page-mask').on('click',function(){
        $('.flex-container').removeClass('active');
      });
    } else {
      $('body').removeAttr("display");
    }
  });
  
  // Mask Click
//   $('.flex-container.active .page-mask').on('click',function(){
//     $('.flex-container').removeClass('active');
//   });
  
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

$(document).ready(function() {

  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function(e) {
    //e.preventDefault();
    $('.flex-container').toggleClass('active');
    $('.flex-container.active .page-mask').on('click',function(){
      $('.flex-container').removeClass('active');
    });
  });
  
  // Mask Click
  $('.flex-container.active .page-mask').on('click',function(){
    $('.flex-container').removeClass('active');
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

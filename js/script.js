$(".panel-header h1").on('click', function(){
  //$(".panel-body").toggle();
  $(this).parent().siblings('.panel-body').toggle();
});
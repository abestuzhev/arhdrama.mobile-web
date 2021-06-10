console.log("hello");
$(function(){

  $(".header-menu__mobile").on("click", function(){
    $("body").toggleClass("lock");
    $(this).toggleClass("active");
    $(".header-menu__layout-mobile").toggleClass("is-show");
  })


});
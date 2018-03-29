$(document).ready(function () {
  $(".hsldr-container").hslider({
    navBar: true,
    auto: true,
    delay: 4000
  });

  $(function () {
    $(".tel").mask("+7(999) 999-9999");
  });

  $("nav, .mobile").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $("a.scroll").click(function () {
    var elementClick = '#' + $(this).attr("href").split("#")[1]
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
    return false;
  });

  $("div.menu").click(function(){
    $("div.mobile").toggleClass("collapse show");
    
    
  });
  
  window.onresize = function(){
    // если открыта меню и страничка увеличит ширину то убрать мобильную версию меню
    if(window.innerWidth>950){
      $("div.mobile").attr("class","mobile collapse")
    }
  }
  
});

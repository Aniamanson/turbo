$(function(){
  $(".tel").mask("+7(999) 999-9999");
});



$(document).ready(function(){
	$("nav").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 2500);
	});
});

$(document).ready(function() {
  $("a.scroll").click(function () {
      var elementClick = '#'+$(this).attr("href").split("#")[1]
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
  });
});
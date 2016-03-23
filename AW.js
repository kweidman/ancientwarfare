$(".buttonAPI").click(function(){
	$(".API").toggle();
});


$(function(){
   $(".buttonAPI").click(function () {
      $(this).text(function(i, text){
          return text === "VIEW" ? "HIDE" : "VIEW";
      })
   });
})



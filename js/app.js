$(document).ready(function() {
	$("#add").on("click", function(event){
		event.preventDefault();

		var userInput = $(".shoppingitem").val();

		$(".list-area-active").append("<li>" + "<input type='checkbox'>" + userInput + "</li>")	
	});
});


$(".clearbutton").on("click", function(event) {
		event.preventDefault();

		var userInput = $(".clearbutton").val();

		$(".list-area-active", "li").hide();
});
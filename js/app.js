$(document).ready(function() {
	$("#add").on("click", function(event){
		event.preventDefault();

		var userInput = $(".shoppingitem").val();

		$(".to-do").prepend("<li>" + userInput + "</li>")
	});
});
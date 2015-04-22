$(document).ready(function() {
	$("#add").on("click", function(event){
		event.preventDefault();

		var userInput = $(".shoppingitem").val();

		$(".list-area-active").append("<li></li>" + "<input type='checkbox'>" + userInput + "</li>")	
	});
$(document).on("click", "li", function() {
        $(this).remove();
    });
});


// $(".clearbutton").on("click", function(event) {
// 		event.preventDefault();

// 		var userInput = $(".clearbutton").val();

// 		$(".list-area-active", "li").hide();
// });
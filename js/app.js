$('#add').on('click', function(event){
    event.preventDefault(); 
    
    var userInput = $('.shoppingItem').val();

    $('.todos').append('<li>' + userInput + '</li>')  
})
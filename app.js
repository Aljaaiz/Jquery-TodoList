$(function(){
//done list
$("ul").on('click',"li", function(){
    $(this).toggleClass('done');
})
// TO remove Deleted todo
    $("ul").on('click',"span", function(event){
        event.stopPropagation()
        $(this).parent().fadeOut(200, function(){
            $(this).remove();
        })
    })

    // creating new todo 

    $('#button').on('click',function(){
        if($('.input').val() == ''){
            alert("input is empty")
        }else{
             var textInput = $('.input').val();
              $('.input').val("");
            
              //Append to the Ul
           $('ul').append('<li> <span><i class="fas fa-trash"></i></span> ' + textInput + "</li>")   

        }
        
        
    })

})
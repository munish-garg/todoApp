$('ul').on('click', 'li', function(){
    $(this).toggleClass('line-through');
    // alert('Clicked on li...');
})

$('ul').on('click', 'i', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})

$('#task-name').keypress(function(event){
    if(event.originalEvent.keyCode === 13 && $(this).val() !== ''){
        let task = $(this).val();
        let todo = `<li><i class="far fa-trash-alt"></i><div>${task}</div></li>`;
        $(todo).css('background-color', 'red')
        $('#list').append(todo);
        // $('#list').css('background-color', 'red')
        $(this).val('');
    }
})

$('#visible').click(function(){
    $(this).toggleClass('visible')
})
$('ul').on('click', 'li', function(){
    $(this).toggleClass('line-through');
    // alert('Clicked on li...');
})

$('ul').on('click', 'span', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(2000, function(){
        $(this).remove();
    })
})

$('#task-name').keypress(function(event){
    if(event.originalEvent.keyCode === 13 && $(this).val() !== ''){
        let task = $(this).val();
        let todo = `<li><span>X</span>${task}</li>`;
        $('#list').append(todo);
        $(this).val('');
    }
})
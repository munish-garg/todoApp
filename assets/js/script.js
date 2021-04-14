$('ul').on('click', 'li', function(){
    $(this).toggleClass('line-through');
    // alert('Clicked on li...');
})

$('ul').on('click', '.fa-trash-alt', function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})

$('#task-name').keypress(function(event){
    if(event.originalEvent.keyCode === 13 && $(this).val() !== ''){
        let task = $(this).val();
        let todo = `<li><i class="far fa-trash-alt"></i><i class="fas fa-arrow-circle-up"></i><i class="fas fa-arrow-circle-down"></i><div>${task}</div></li>`;
        $(todo).css('background-color', 'red')
        $('#list').append(todo);
        // $('#list').css('background-color', 'red')
        $(this).val('');
    }
})

$('#visible').click(function(){
    $('#task-name').toggleClass('visible')
})

$('#visible').click(function(){
    $('#btn').toggleClass('visible');
})

$('#btn').click(function(){
    let task = $('#task-name').val();
    if(task !== ''){
        let todo = `<li><i class="far fa-trash-alt"></i><div>${task}</div></li>`
        $('#list').append(todo)
    }
})

$('ul').on('click', '.fa-arrow-circle-up', function(event){
    event.stopPropagation();
    $(this).parent().insertBefore($(this).parent().prev());
})

$('ul').on('click', '.fa-arrow-circle-down', function(event){
    event.stopPropagation();
    console.log("Hello World!!!")
    $(this).parent().next().insertBefore($(this).parent());
})
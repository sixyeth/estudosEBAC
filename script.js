$(document).ready(function(){
    $('#btnCadastrar').on('click', function(e){
        e.preventDefault();
        var inputValue = $('#inputName').val();
        if(inputValue.length > 0){
            addTarefa(inputValue);
        }
    });

    function addTarefa(text){
        $('#taskList').append('<li>' + text + '</li>')
    }

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed');
    })
})

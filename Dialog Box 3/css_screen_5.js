$(document).ready(function(){
    $("#close,#cancel_button,#button_run").click(function(){
        $('#outer_container').hide();
    });

    $('#close_organizer').click(function(){
        $('#organizer_container').css({'visibility':'hidden'});
    });

    $('#button_organizer').click(function(){
        $('#organizer_container').css('visibility','visible');
    });

    $("#question_mark").click(function(){
        window.open('https://www.google.com','_blank','width:500,height:700');
    });

    $('#button_step_into,#button_edit').click(function(){
        $('#step_into_container').css('visibility','visible');
    });

    $('#close_step_into').click(function(){
        $('#step_into_container').css('visibility','hidden');
    });
    
    $('#close_delete_container').click(function(){
        $('#delete_container').css('visibility','hidden');
    });

    $('#button_create,#button_delete').click(function(){
        $('#delete_container').css('visibility','visible');
    });
});
$(function() {
    let $questionMark = $("#question_mark");
    let $labelCategories = $("#label_categories");
    let $replaceText = $("#replace_text");
    let $dialogClose = $("#close_dialog");
    let $questionContainer = $("#question_container");

    $("#close_button_header, #ok_btn, #cancel_btn").click(function() {
        $("#main_container").css("visibility", "hidden");
    });

    $dialogClose.click(function() {
        $questionContainer.css("visibility", "hidden");
    });

    $questionMark.click(function() {
        $questionContainer.css("visibility", "visible");
    });

    $labelCategories.change(function() {
        let str="";
        $("select option:selected").addClass('active').removeClass('active');
        $('select option:selected').each(function() {
            str = $(this).text();           
        });
        $replaceText.val(str);
    }).change();
});    
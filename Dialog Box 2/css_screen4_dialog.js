$(function() {
    let $mainContainer = $('#main_container');
    let $envelopeList = $('#envelope_list');
    let $labelList = $('#label_list');
    let $hiddenLabelImage = $('#hidden_label_iamge');
    let $envelopeContainer = $('#envelope_container');

    $('#header_close,#button_cancel').click(function() {
        $mainContainer.css('visibility', 'hidden');
    });
    
    $('#header_question_mark').click(function() {    
        $("#question_container").dialog({
            width: 410,
            height: 567,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
        }).show();
    });

    $('#print_button').click(function() {
        $("#printer_information_container").dialog({
            width: 669,
            height: 472,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: {
                Save: function() {
                    $(this).dialog("close");
                },
                Cancel: function() {
                    $(this).dialog("close");
                },
            },
        }).show();
    });

    $('#option_button').click(function() {
        $("#option_dialog_box").dialog({
            width: 565,
            height: 370,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: {
                OK: function() {
                    $(this).dialog("close");
                },
                Cancel: function() {
                    $(this).dialog("close");
                },
            },
        }).show();
    });

    $('#postage_button').click(function() {
        $("#epostage_dialog_box").dialog({
            width: 829,
            height: 190,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: {
                Yes: function() {
                    $(this).dialog("close");
                },
                No: function() {
                    $(this).dialog("close");
                },
            },
        }).show();
    });

    $envelopeList.click(function() {
        $(this).addClass('active');
        $labelList.removeClass('active');          
        $hiddenLabelImage.css("display", "block");
        $envelopeContainer.css("display", "none");
    });
            
    $labelList.click(function() {
        $(this).addClass('active');
        $envelopeList.removeClass('active');      
        $hiddenLabelImage.css("display", "none");
        $envelopeContainer.css("display", "block");
    });
});

function opacity_toggle() {
    let getSinglePage = document.getElementById('full_page_radio');
    let getSingleLabel = document.getElementById('single_label_radio');
    let rowInputNumber = document.getElementById('select_row_number');
    let getNewDocument = document.getElementById('new_doc_button');
    let colInputNumber = document.getElementById('select_column_number');
    let noOpacity = document.getElementById('no_opacity');
    let opacityZero = document.getElementById('opacity_zero');
    let rowAndColumnRight = document.getElementById('row_and_column_right');
         
    if (getSinglePage.checked) {
        getNewDocument.style.opacity = 1;
        rowInputNumber.disabled = true;
        getNewDocument.disabled = false;
        colInputNumber.style.opacity = 0.6;
        rowInputNumber.style.opacity = 0.6;
        noOpacity.style.opacity = 0.6;
        opacityZero.style.opacity = 0.6;
        rowAndColumnRight.style.opacity = 0.6;
        colInputNumber.disabled = true;
    } else if (getSingleLabel.checked) {
        rowInputNumber.disabled = false;
        getNewDocument.disabled = true;
        getNewDocument.style.opacity = 0.5;
        colInputNumber.disabled = false;
        colInputNumber.style.opacity = '1';
        rowInputNumber.style.opacity = 1;
        noOpacity.style.opacity = 1;
        opacityZero.style.opacity = 1;
        rowAndColumnRight.style.opacity = 1;
    }
}

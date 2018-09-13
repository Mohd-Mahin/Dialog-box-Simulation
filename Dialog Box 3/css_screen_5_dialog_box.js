$(function() {
    const $descriptionTextarea = $('#description_textarea');
    const getInputTextValue = document.getElementById('macro_input_text');
    const getOptionValue = document.getElementById('macro_selection');    
    const $getSelectId = $('#macro_selection');
    const $wordCommand = $('#word_command');
    const selectButton = document.querySelectorAll('button');
    let optionsValue = getOptionValue.options;
    let selectedOption = getOptionValue.options[getOptionValue.selectedIndex];
    let bool = false;
    let showReplaceDialogBox = true;
    let changeBooleanVisibilty = true;
  
    $('#button_create').click(function() {
        if(showReplaceDialogBox) {
            $("#microsoft_office_word_dialog_box").dialog({
                width: 350,
                height: 200,
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
                    Cancel: function() {
                        $(this).dialog("close");
                    },
                },
            }).show();
        } else {
            let $getTextBox = $('#macro_input_text').val();
            let $option = $('<option/>');
            $getSelectId.find('option:selected').removeAttr('selected');
            $option.text($getTextBox).attr({
                "selected": "selected",
                "class": "option_element"
            });
            $getSelectId.prepend($option);
            for (let ctr= 0; ctr < 5; ctr += 1) {
                selectButton[ctr].disabled = false;
                selectButton[ctr].classList.remove('btn_style_none');
            }
            showReplaceDialogBox = true;
        }
    });
    
    $("#close, #cancel_button, #button_run, #button_step_into, #button_edit").click(function() {
        $('#outer_container').hide();
    });
    
    $('#button_delete').click(function() {
        $("#delete_container_dialog").dialog({
            width: 300,
            height: 200,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: {
                Yes: function() {
                    $('#macro_selection option:selected').remove();
                    $('#macro_selection > option:first-child').attr("selected", "selected");
                    $('#macro_input_text').val("");
                    $(this).dialog("close");
                },
                No: function() {
                    $(this).dialog("close");
                },
            },
        }).show();
    });

    $('#question_mark').click(function() {    
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
    
    $('#button_organizer').click(function() {
        $("#organizer_container_dialog").dialog({
            width: 730,
            height: 458,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: {
                Close: function() {
                    $(this).dialog("close");
                },
            },
        }).show();
    });
    
    $('#macro_in_select, #macro_selection, #word_command').change(function() {
        changeButtonStyleOnSelect = (boolValue, booleanVisibility) => {
            changeBooleanVisibilty = booleanVisibility;
            for (let ctr = 2; ctr < 5; ctr += 1) {
                selectButton[ctr].disabled = boolValue;
                boolValue == true ? selectButton[ctr].classList.add('btn_style_none') : selectButton[ctr].classList.remove('btn_style_none');
            }
        }

        if ($('#macro_in_select').is(':focus')) {
            let $macroInSelectOption = $('#macro_in_select option:selected').val();
            if ($macroInSelectOption == 3) {
                $getSelectId.hide();
                $wordCommand.show();
                changeButtonStyleOnSelect(true ,false);
                $descriptionTextarea.text('Change the position of the list');
                $descriptionTextarea.prop("disabled", "disabled");
            } else if ($macroInSelectOption == 1) {
                $getSelectId.show();
                $wordCommand.hide();
                $descriptionTextarea.removeAttr("disabled");
                changeButtonStyleOnSelect(false, true);
            } else if ($macroInSelectOption == 2) {
                $getSelectId.show();
                $wordCommand.hide();
                $descriptionTextarea.removeAttr("disabled");
                changeButtonStyleOnSelect(false, true);
            }
        }

        let valueOfSelectOption = (changeBooleanVisibilty == true) ? $('#macro_selection > option:selected').text() : $('#word_command > option:selected').text();
        $('#macro_input_text').val(valueOfSelectOption);
    }).change();

    checkSelectValue = () => {
        for (ctr= 0; ctr < getOptionValue.length; ctr += 1) {
            if (getOptionValue.children[ctr].innerHTML == getInputTextValue.value) bool = true;
        }
    
        let changeStyle = (boolValue, styleOfButton) => {
            let buttonStyle;
            for( let i = 0; i < 5; i += 1) {
                if(i == 3) continue;
                selectButton[i].disabled = boolValue;
                buttonStyle = styleOfButton == 1 ? selectButton[i].classList.add('btn_style_none') : selectButton[i].classList.remove('btn_style_none'); 
            }
        }
    
        if (bool) {
            changeStyle(false, 0);
            showReplaceDialogBox = true;
        } else {
            showReplaceDialogBox = false;
            changeStyle(true, 1);
        }
    }
});
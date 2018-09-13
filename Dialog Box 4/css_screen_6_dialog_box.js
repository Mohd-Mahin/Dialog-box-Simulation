$(function() {
    const optionMicroSoft = document.getElementById('option_microsoft');
    const optionAceLabel = document.getElementById('option_ace_label');
    const getContinuousFeed = document.getElementById('continuous_feed');
    const getPageRadio = document.getElementById('page_radio'); 
    const getRadioAndSelectRightSelect = document.getElementById('radio_and_select_right_select');       
    const optionAveryUsLetter = document.getElementById('option_avery_us_letter');
    const getOptionAveryA4 = document.getElementById('option_avery_a4');
    let customSelectOptionValue = 1;
    let textType = "";
    let textHeight = ""; 
    let textWidth = "";
    let textPageSize = "";
    let declareGlobalValue = document.getElementById('product_number_select').options[document.getElementById('product_number_select').selectedIndex].innerHTML;

    $('#close, #ok_btn, #cancel_btn').click(function() {
        $('#outer_container').css('visibility', 'hidden');
    });
	
	let funcDialog = (passBtnObject) => {
		$("#detail_dialog_container").dialog({
            width: 420,
            height: 515,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: passBtnObject,
        }).show();
	}

    $('#details_btn').click(function() {
        let passBtnObjectDetail = {
            OK: function() {
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            },
        }
        funcDialog(passBtnObjectDetail);
    });
    
    $('#label_btn').click(function() {
        let passBtnObjectLabel = {
            OK: function() {
                $('#custom_select_option').show();
                $('#product_number_select').hide();
                $('#delete_btn').removeAttr("disabled");
                $('#button_delete').removeClass("button_delete");
                $('#custom_select_option').find('option:selected').removeAttr("selected");
                $("<option/>",
                    {
                        value: customSelectOptionValue++,
                        text: declareGlobalValue
                    }
                ).appendTo('#custom_select_option').prop("selected", "selected");       
                let checkOptionRepititions = false;
                $("#label_vendor_select_microsoft").find("option").each(function(index, element) {
                    if(index == 0 && element.text == 'Other/Custom') checkOptionRepititions = true; 
                });
                    
                if(!checkOptionRepititions) {
                    $("<option/>",
                        {
                            value: 3,
                            text: "Other/Custom",
                            id: "customSelectBox"
                        }
                    ).prependTo('#label_vendor_select_microsoft').prop("selected", "selected"); 
                }
                if($('#label_vendor_select_microsoft').children("option:selected").text() == "Ace Label") {
                    $('#custom_select_option').hide();
                }
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            },
        };
        funcDialog(passBtnObjectLabel);
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
 
    changeText = (thisInsatnce) => {
        let getItemValue = thisInsatnce.value;
        let getItemId = thisInsatnce.id;
        declareGlobalValue = thisInsatnce.options[thisInsatnce.selectedIndex].innerHTML;
        changeCommonValues = (textTypeValue, textHeightValue, textWidthValue, textPageSizeValue) => {
            textType = textTypeValue;
            textHeight = textHeightValue;
            textWidth = textWidthValue;
            textPageSize = textPageSizeValue;
        }
        
        if (getItemId == "product_number_select") {
            if (getItemValue == 1) {
                changeCommonValues("1/2 Letter  Postcard", '8.5"', '5.5"', '5.5" X 8.5"');
            } else if (getItemValue == 2) {
                changeCommonValues("1/2 Letter Postcard", '5.5"', '8.5"', '8.5" X 5.5"');
            } else if (getItemValue == 3) { 
                changeCommonValues("1/4 Letter Postcard", '5.5"', '4.25"', '5.5" X 4.25"');
            } 
        }
    
        if (getItemId == "product_number_select_page_printer") {
            if (getItemValue == 1) {
                changeCommonValues("Other Label", '1.9"', '4"', '5.5" X 12"');
            } else if (getItemValue == 2) {
                changeCommonValues("Other Label", '0.57"', '1"', '4.33" X 8"');
            } else if (getItemValue == 3) {
                changeCommonValues("Other Label", '0.57"', '1.6"', '4" X 8"');
            } 
        }
    
        if (getItemId == "product_number_select_acelabel") {
            if (getItemValue == 1) {
                changeCommonValues("2-UP AUDIO CASSETTE CASE..", '6.75"', '4"', '11" X 8.5"');
            } else if (getItemValue == 2) {
                changeCommonValues("2-UP AUDIO CASSETTE CASE..", '4"', '4"', '8.5" X 11"');
            } else if (getItemValue == 3) {
                changeCommonValues("2-UP AUDIO CASSETTE CASE..", '4"', '4"', '4" X 8"');
            } 
        }
    
        if (getItemId == "product_number_select_avery_us_letter") {
            if (getItemValue == 1) {
                changeCommonValues("Pin Fed Mailing Label", '0.94"', '3.5"', '4.25" X 12"');
            } else if (getItemValue == 2) {
                changeCommonValues("Pin Fed Mailing Label", '1.44"', '4"', '4.5" X 12"');
            } else if (getItemValue == 3) {
                changeCommonValues("Pin Fed Mailing Label", '0.94"', '5"', '6" X 12"');
            } 
        }
    
        $('#label_info_type').text(textType);
        $('#label_info_height').text(textHeight);
        $('#label_info_width').text(textHeight);
        $('#label_info_size').text(textPageSize);    
    }

    getAndSetValues = (labelInfoType, labelInfoHeight, labelInfoWidth, labelInfoSize) => {
        $('#label_info_type').text(labelInfoType);
        $('#label_info_height').text(labelInfoHeight);
        $('#label_info_width').text(labelInfoWidth);
        $('#label_info_size').text(labelInfoSize);
    }
    
    change_opacity = () => {    
        if (getContinuousFeed.checked) {
            getRadioAndSelectRightSelect.style.opacity = 0.3;
            getRadioAndSelectRightSelect.disabled = true;
            $('#product_number_select, #label_vendor_select_microsoft, #product_number_select_acelabel, #product_number_select, #custom_select_option').hide();
            $('#product_number_select_page_printer, #label_vendor_select').show();           
            getAndSetValues("Other Label", '1.9"', '4"', '5.5" X 12"');
        } else if (getPageRadio.checked) {
            getRadioAndSelectRightSelect.style.opacity = 1;
            getRadioAndSelectRightSelect.disabled = false;
            $('#label_vendor_select, #product_number_select_page_printer, #product_number_select_avery_us_letter, #product_number_select, #custom_select_option').hide();
            $('#label_vendor_select_microsoft, #product_number_select').show();
            getAndSetValues("1/2 Letter Postcard", '8.5"', '5.5"', '5.5" X 8.5"');
        }
    }
    
    changeOptionContent = () => {
        if (getOptionAveryA4.selected == true) {
            $('#product_number_select_avery_us_letter, #product_number_select').hide();
            $('#product_number_select_page_printer').show();
            getAndSetValues("Other Label", '1.9"', '1.9"', '5.5" X 12"');
        } else if (optionAveryUsLetter.selected == true) {
            $('#product_number_select_avery_us_letter').show();
            $('#product_number_select_page_printer, #product_number_select').hide();
            getAndSetValues("Pin Fed Mailing Label", '0.94"', '0.94"', '4.25" X 12"');
        }
    }
    
    changeMicroSoftOptionContent = () => {    
        if (optionMicroSoft.selected == true) {
            $('#product_number_select').show();
            $('#product_number_select_acelabel').hide(); 
            getAndSetValues("1/2 Letter Postcard", '8.5"', '8.5"', '5.8" X 8.5"');
        } else if (optionAceLabel.selected == true) {
            $('#product_number_select').hide();
            $('#product_number_select_acelabel').show();
            getAndSetValues("2-UP AUDIO CASSETTE", '6.75"', '6.75"', '11" X 8.5"');
        } else if(document.getElementById('customSelectBox').selected == true) {
            $('#custom_select_option').hide();
        }
    }

    $("#label_vendor_select_microsoft").change(function() {
        let checkSelectValueExist = document.getElementById('label_vendor_select_microsoft');   
        if(checkSelectValueExist.options[checkSelectValueExist.selectedIndex].innerHTML == "Other/Custom") {
            $('#product_number_select_acelabel, #product_number_select').hide();
            $('#custom_select_option').show();
            $('#delete_btn').removeAttr("disabled");
            $('#button_delete').removeClass("button_delete");
        } else {
            $('#custom_select_option').hide();
            $('#delete_btn').prop("disabled", "disabled");
            $('#button_delete').addClass("button_delete");
        }
    }).change();

    $('#delete_btn').click(function() {
        $("#delete_dialog").dialog({
            width: 310,
            height: 190,
            modal: true,
            show: { 
                effect: "blind",
                duration: 300, 
            },
            buttons: {
                OK: function() {
                    $('#custom_select_option').find('option:selected').remove();
                    $('#custom_select_option').find('option:last-child').attr("selected", "selected");
                    $(this).dialog("close");
                },
                Cancel: function() {
                    $(this).dialog("close");
                },
            },
        }).show();       
    });
});



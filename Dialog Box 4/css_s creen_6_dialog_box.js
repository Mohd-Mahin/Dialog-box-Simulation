$(document).ready(function (){
    $('#close,#ok_btn,#cancel_btn').click(function(){
        $('#outer_container').css("visibility",'hidden');
    });

    $('#close_dialog').click(function(){
        $('#detail_dialog_container').css("visibility",'hidden');
    });

    $("#details_btn").click(function(){
        $('#detail_dialog_container').css("visibility",'visible');
    });
    $('#label_btn').click(function(){
        $('#detail_dialog_container').css("visibility",'visible');
    });
});

function change_opacity(){
    let getContinuousFeed=document.getElementById('continuous_feed');
    let getPageRadio=document.getElementById('page_radio'); 
    let getRadioAndSelectRightSelect=document.getElementById('radio_and_select_right_select');   
    if(getContinuousFeed.checked){
        getRadioAndSelectRightSelect.style.opacity=0.3;
        getRadioAndSelectRightSelect.disabled=true;
            $(function() {
                $('#product_number_select,#label_vendor_select_microsoft,#product_number_select_acelabel').hide();
                $('#product_number_select_page_printer,#label_vendor_select').show();           
                $('#label_info_type').text("Other Label");
                $('#label_info_height').text('1.9"');
                $('#label_info_width').text('4"');
                $('#label_info_size').text('5.5" X 12"');
            }
        );
    }
    else if (getPageRadio.checked) {
        getRadioAndSelectRightSelect.style.opacity=1;
        getRadioAndSelectRightSelect.disabled=false;
        $('#label_vendor_select,#product_number_select_page_printer,#product_number_select_avery_us_letter').hide();
        $('#label_vendor_select_microsoft,#product_number_select').show();
        $('#label_info_type').text("1/2 Letter Postcard");
        $('#label_info_height').text('8.5"');
        $('#label_info_width').text('5.5"');
        $('#label_info_size').text('5.5" X 8.5"');
    }
}
function changeOptionContent() {
    if(document.getElementById('option_avery_a4').selected==true) {
        $(function() {
            $('#product_number_select_avery_us_letter').hide();
            $('#product_number_select_page_printer').show();
            $('#label_info_type').text("Other Label");
            $('#label_info_height').text('1.9"');
            $('#label_info_width').text('1.9"');
            $('#label_info_size').text('5.5" X 12"');
        });
    } 
    else if(document.getElementById('option_avery_us_letter').selected==true) {
        $(function() {
            $('#product_number_select_avery_us_letter').show();
            $('#product_number_select_page_printer').hide();
            $('#label_info_type').text("Pin Fed Mailing Label");
            $('#label_info_height').text('0.94"');
            $('#label_info_width').text('0.94"');
            $('#label_info_size').text('4.25" X 12"');
        });
    }
}
function changeMicroSoftOptionContent(){
    if(document.getElementById('option_microsoft').selected==true) {
        $(function(){
            $('#product_number_select').show();
            $('#product_number_select_acelabel').hide(); 
            $('#label_info_type').text("1/2 Letter Postcard");
            $('#label_info_height').text('8.5"');
            $('#label_info_width').text('8.5"');
            $('#label_info_size').text('5.8" X 8.5"');
        });
    } else if(document.getElementById('option_ace_label').selected==true) {
        $(function(){
            $('#product_number_select').hide();
            $('#product_number_select_acelabel').show();
            $('#label_info_type').text("2-UP AUDIO CASSETTE");
            $('#label_info_height').text('6.75"');
            $('#label_info_width').text('6.75"');
            $('#label_info_size').text('11" X 8.5"');
        });
    }
}
function changeText(thisInsatnce) {
    let getItemValue=thisInsatnce.value;
    let getItemId=thisInsatnce.id;
    let textType="",textHeight="",textWidth="",textPageSize="";
    if(getItemId=="product_number_select") {
        if(getItemValue==1) {
            textType="1/2 Letter Postcard";
            textHeight='8.5""';
            textWidth='5.5"';
            textPageSize='5.5" X 8.5"';
        } 
    else
        if (getItemValue==2) {
            textType="1/2 Letter Postcard";
            textHeight='5.5""';
            textWidth='8.5"';
            textPageSize='8.5" X 5.5"';
        } 
    else
        if(getItemValue==3) {
            textType="1/4 Letter Postcard";
            textHeight='5.5""';
            textWidth='4.25"';
            textPageSize='5.5" X 4.25"';
        } 
    }
    if(getItemId=="product_number_select_page_printer") {
        if(getItemValue==1) {
            textType="Other Label";
            textHeight='1.9""';
            textWidth='4"';
            textPageSize='5.5" X 12"';
        }
    else
        if(getItemValue==2) {
            textType="Other Label";
            textHeight='0.57"';
            textWidth='1"';
            textPageSize='4.33" X 8"';
        }
    else 
        if(getItemValue==3) {
            textType="Other Label";
            textHeight='0.57"';
            textWidth='1.6"';
            textPageSize='4" X 8"';
        } 
    }
    if(getItemId=="product_number_select_acelabel") {
        if(getItemValue==1) {
            textType="2-UP AUDIO CASSETTE CASELINER.. ";
            textHeight='6.75""';
            textWidth='4"';
            textPageSize='11" X 8.5"';
        }
    else 
        if(getItemValue==2) {
            textType="2-UP AUDIO CASSETTE CASELINER..";
            textHeight='4"';
            textWidth='4"';
            textPageSize='8.5" X 11"';
        }
    else 
        if(getItemValue==3) {
            textType="2-UP AUDIO CASSETTE CASELINER..";
            textHeight='4"';
            textWidth='4"';
            textPageSize='4" X 8"';
        } 
    }
    if(getItemId=="product_number_select_avery_us_letter") {
        if(getItemValue==1) {
            textType="Pin Fed Mailing Label";
            textHeight='0.94""';
            textWidth='3.5"';
            textPageSize='4.25" X 12"';
        }
    else 
        if(getItemValue==2) {
            textType="Pin Fed Mailing Label";
            textHeight='1.44"';
            textWidth='4"';
            textPageSize='4.5" X 12"';
        }
    else 
        if(getItemValue==3){
            textType="Pin Fed Mailing Label";
            textHeight='0.94"';
            textWidth='5"';
            textPageSize='6" X 12"';
        } 
    }
    $(function(){
        $('#label_info_type').text(textType);
        $('#label_info_height').text(textHeight);
        $('#label_info_width').text(textHeight);
        $('#label_info_size').text(textPageSize);
    });    
}
    



---------------------------------------------------------------------------------------------------------------
$(function() {
    $('#close, #ok_btn, #cancel_btn').click(function() {
        $('#outer_container').css('visibility', 'hidden');
    });
	
	let funcDialog = () => {
		$("#detail_dialog_container").dialog({
            width: 420,
            height: 515,
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
	}

    $('#details_btn').click(function() {
        funcDialog();
    });

    $('#label_btn').click(function() {
        funcDialog();
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
});

function change_opacity() {
    const getContinuousFeed = document.getElementById('continuous_feed');
    const getPageRadio = document.getElementById('page_radio'); 
    const getRadioAndSelectRightSelect = document.getElementById('radio_and_select_right_select');   
    
    if (getContinuousFeed.checked) {
        getRadioAndSelectRightSelect.style.opacity = 0.3;
        getRadioAndSelectRightSelect.disabled = true;
        $(function() {
            $('#product_number_select, #label_vendor_select_microsoft, #product_number_select_acelabel').hide();
            $('#product_number_select_page_printer, #label_vendor_select').show();           
            $('#label_info_type').text("Other Label");
            $('#label_info_height').text('1.9"');
            $('#label_info_width').text('4"');
            $('#label_info_size').text('5.5" X 12"');
        });
    }
    else if (getPageRadio.checked) {
        getRadioAndSelectRightSelect.style.opacity = 1;
        getRadioAndSelectRightSelect.disabled = false;
        $('#label_vendor_select, #product_number_select_page_printer, #product_number_select_avery_us_letter').hide();
        $('#label_vendor_select_microsoft, #product_number_select').show();
        $('#label_info_type').text("1/2 Letter Postcard");
        $('#label_info_height').text('8.5"');
        $('#label_info_width').text('5.5"');
        $('#label_info_size').text('5.5" X 8.5"');
    }
}

function changeOptionContent() {
    const optionAveryUsLetter = document.getElementById('option_avery_us_letter');
    const getOptionAveryA4 = document.getElementById('option_avery_a4');
    if (getOptionAveryA4.selected == true) {
        $(function() {
            $('#product_number_select_avery_us_letter').hide();
            $('#product_number_select_page_printer').show();
            $('#label_info_type').text("Other Label");
            $('#label_info_height').text('1.9"');
            $('#label_info_width').text('1.9"');
            $('#label_info_size').text('5.5" X 12"');
        });
    } 
    else if (optionAveryUsLetter.selected == true) {
        $(function() {
            $('#product_number_select_avery_us_letter').show();
            $('#product_number_select_page_printer').hide();
            $('#label_info_type').text("Pin Fed Mailing Label");
            $('#label_info_height').text('0.94"');
            $('#label_info_width').text('0.94"');
            $('#label_info_size').text('4.25" X 12"');
        });
    }
}

function changeMicroSoftOptionContent() {
    const optionMicroSoft = document.getElementById('option_microsoft');
    const optionAceLabel = document.getElementById('option_ace_label');

    if (optionMicroSoft.selected == true) {
        $(function() {
            $('#product_number_select').show();
            $('#product_number_select_acelabel').hide(); 
            $('#label_info_type').text("1/2 Letter Postcard");
            $('#label_info_height').text('8.5"');
            $('#label_info_width').text('8.5"');
            $('#label_info_size').text('5.8" X 8.5"');
        });
    } else if (optionAceLabel.selected == true) {
        $(function() {
            $('#product_number_select').hide();
            $('#product_number_select_acelabel').show();
            $('#label_info_type').text("2-UP AUDIO CASSETTE");
            $('#label_info_height').text('6.75"');
            $('#label_info_width').text('6.75"');
            $('#label_info_size').text('11" X 8.5"');
        });
    }
}

function changeText(thisInsatnce) {
    let getItemValue = thisInsatnce.value;
    let getItemId = thisInsatnce.id;
    let textType = "",
    textHeight = "", 
    textWidth = "",
    textPageSize = "";
    
    if (getItemId == "product_number_select") {
        if (getItemValue == 1) {
            textType = "1/2 Letter Postcard";
            textHeight = '8.5""';
            textWidth = '5.5"';
            textPageSize = '5.5" X 8.5"';
        } else if (getItemValue == 2) {
            textType = "1/2 Letter Postcard";
            textHeight = '5.5""';
            textWidth = '8.5"';
            textPageSize = '8.5" X 5.5"';
        } else if (getItemValue == 3) {
            textType = "1/4 Letter Postcard";
            textHeight = '5.5""';
            textWidth = '4.25"';
            textPageSize = '5.5" X 4.25"';
        } 
    }

    if (getItemId == "product_number_select_page_printer") {
        if (getItemValue == 1) {
            textType = "Other Label";
            textHeight = '1.9""';
            textWidth = '4"';
            textPageSize = '5.5" X 12"';
        } else if (getItemValue == 2) {
            textType = "Other Label";
            textHeight = '0.57"';
            textWidth = '1"';
            textPageSize = '4.33" X 8"';
        } else if (getItemValue == 3) {
            textType = "Other Label";
            textHeight = '0.57"';
            textWidth = '1.6"';
            textPageSize = '4" X 8"';
        } 
    }

    if (getItemId == "product_number_select_acelabel") {
        if (getItemValue == 1) {
            textType = "2-UP AUDIO CASSETTE CASE.. ";
            textHeight = '6.75""';
            textWidth = '4"';
            textPageSize = '11" X 8.5"';
        }
    else if (getItemValue == 2) {
            textType = "2-UP AUDIO CASSETTE CASE..";
            textHeight = '4"';
            textWidth = '4"';
            textPageSize = '8.5" X 11"';
        }
    else if (getItemValue == 3) {
            textType = "2-UP AUDIO CASSETTE CASE..";
            textHeight = '4"';
            textWidth = '4"';
            textPageSize = '4" X 8"';
        } 
    }

    if (getItemId == "product_number_select_avery_us_letter") {
        if (getItemValue == 1) {
            textType = "Pin Fed Mailing Label";
            textHeight = '0.94""';
            textWidth = '3.5"';
            textPageSize = '4.25" X 12"';
        }
    else if (getItemValue == 2) {
            textType = "Pin Fed Mailing Label";
            textHeight = '1.44"';
            textWidth = '4"';
            textPageSize = '4.5" X 12"';
        }
    else if (getItemValue == 3) {
            textType = "Pin Fed Mailing Label";
            textHeight = '0.94"';
            textWidth = '5"';
            textPageSize = '6" X 12"';
        } 
    }

    $(function() {
        $('#label_info_type').text(textType);
        $('#label_info_height').text(textHeight);
        $('#label_info_width').text(textHeight);
        $('#label_info_size').text(textPageSize);
    });    
}
    
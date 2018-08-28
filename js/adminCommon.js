function upload(e){
    e.preventDefault();
    formfield = jQuery(this).prev('input');
    formnxtfield = jQuery(this).next('input');
    jQuery(this).parent('p').next('.show_upload_image').addClass('active');
    jQuery(this).parent('p').next('.show_upload_image').css('display','block');
       
    var custom_uploader;
    if (custom_uploader) {
        custom_uploader.open();
        return;
    }
    custom_uploader = wp.media.frames.file_frame = wp.media({
        title: 'Choose Image',
        button: {
            text: 'Choose Image'
        },
        multiple: false
    });
    custom_uploader.open();
    custom_uploader.on('select', function() {
        attachment = custom_uploader.state().get('selection').first().toJSON();
        formfield.val(attachment.url);
        if(formnxtfield.length > 0)
        {
            formnxtfield.val(attachment.id);
        }
        jQuery('.show_upload_image.active').html('<img src="'+attachment.url+'" width="372" />').removeClass('noImg active');
    });
   
}
function showHide(){
	jQuery(".mt_headerimg, .mt_slideCont").hide();
	
	if (jQuery("input[name=mt_headeropt]:checked").val() == '1'){
		jQuery(".mt_slideCont").show();
		//jQuery(".mt_headerimg").hide();
	}
	else {
		jQuery(".mt_headerimg").show();
		//jQuery(".mt_slideCont").hide();
	}
	
	jQuery("input[name=mt_headeropt]").click(function() {
		
		if (jQuery("input[name=mt_headeropt]:checked").val() == '1'){
			jQuery(".mt_headerimg").hide();
			jQuery(".mt_slideCont").show();
		}
		else {
			jQuery(".mt_slideCont").hide();
			jQuery(".mt_headerimg").show();
		}
     
  }); 
}

function sideBarPos(){
	
	jQuery(".bars, .barsPos").hide();
	
	var showBarValue 	= jQuery(".showBar input:checked").val();
	var showBarPosValue = jQuery(".showBarPos input:checked").val();
	
	if (showBarValue === 'true'){
		jQuery("#sidebarpos").show();
		jQuery("#sidebars" + showBarPosValue).show();
	}
	else{
		jQuery(".bars, .barsPos").hide();
	}
		
	jQuery(".showBar input").click(function(){
		
		if (jQuery(this).val() == 'true'){
        	jQuery("#sidebarpos").show("fast");
			jQuery("#sidebars" + showBarPosValue).show();
		}
		else{
			jQuery(".bars, .barsPos").hide("fast");
			jQuery(".bars input, .barsPos input").prop('checked',false);
		}
    });
	jQuery(".showBarPos input").click(function(){
		
		var value = jQuery(this).val();
		jQuery(".barsPos").hide();
        jQuery("#sidebars" + value).show("fast");
		
    });
}

function addCls() {
	jQuery('input:checked').parent().addClass("selected");
    jQuery('input').click(function () {
      jQuery('input:not(:checked)').parent().removeClass("selected");
      jQuery(this).parent().addClass("selected");
    });
}

function upload_new(e){
	e.preventDefault();
	formfield = jQuery(this).prev('input');
	jQuery(this).parent('p').next('.show_upload_image').addClass('active');
		
	var custom_uploader;
    if (custom_uploader) {
        custom_uploader.open();
        return;
    }
    custom_uploader = wp.media.frames.file_frame = wp.media({
        title: 'Choose Image',
        button: {
            text: 'Choose Image'
        },
        multiple: false
    });
    custom_uploader.open();
    custom_uploader.on('select', function() {
        attachment = custom_uploader.state().get('selection').first().toJSON();
        formfield.val(attachment.url);
        jQuery('.show_upload_image.active').html('<img src="'+attachment.url+'" width="372" />').removeClass('noImg active');
    });
    
}

function tab(){
	if ( jQuery('#v-nav').length ){
		jQuery('#v-nav ul li:first-child').addClass('first current');
		jQuery('#v-nav ul li:last-child').addClass('last');
		
		 var items = jQuery('#v-nav ul li').each(function () {
			jQuery(this).click(function () {
				//remove previous class and add it to clicked tab
				items.removeClass('current');
				jQuery(this).addClass('current');
	
				//hide all content divs and show current one
				jQuery('#v-nav div.tab-content').hide().eq(items.index(jQuery(this))).show();
	
				window.location.hash = jQuery(this).attr('tab');
			});
		});
	    
	    function showTab(tab) {
			jQuery("#v-nav ul li[tab=" + tab + "]").click();
		}
		
		if (location.hash) {
			showTab(location.hash);
		}
		else {
			showTab("tab1");
		}
	
		
	
		// Bind the event hashchange, using jquery-hashchange-plugin
		jQuery(window).hashchange(function () {
			showTab(location.hash.replace("#", ""));
		})
	
		// Trigger the event hashchange on page load, using jquery-hashchange-plugin
		jQuery(window).hashchange();
	}
}
jQuery(document).ready(function($) {  
	$( "#accordion" ).accordion({
      collapsible: true
    });
	colorPick();
	tab();
	$(document).on("click",".color",function(){
		var next_color_plate = $(this).next(".popup-colorpicker");
		$( next_color_plate ).trigger( "click" );
	});
	
	$('.show_upload_image').filter(function () {
   	 return $.trim($(this).html()).length == 0;
	}).addClass('noImg');

   
    $('.show_upload_image').filter(function () {
        return $.trim($(this).html()).length == 0;
    }).addClass('noImg');
   
    /*$('#catUpload').click(function(){
        $('#submit').addClass('addPcat');
    });*/
   
    $('body').on('click', '.upload_image_button', upload);
    $('.upload_image_button_new').bind('click', upload_new);   
    showHide();
	sideBarPos();

	addCls();

	$('input.colorPicker').bind("keyup", function() {
		$(this).next('input')
			   .css('background-color', $(this).val())
			   .css('border-color', $(this).val());
	});
	
	if (jQuery('#message').length){
		$('#message').delay(1000).fadeOut('slow');
	}
   
});
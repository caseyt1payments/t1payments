jQuery(document).ready(function(){
	/********************** Remove Image METABOX general as long as the layout stays the same **********************/
	jQuery('a[class*="_remove_image"]').click(function(e){
		var thethis = jQuery(this);
		thethis.siblings("input[type=hidden]").val('');
		thethis.siblings("input[type='text'][readonly]").val('');
		thethis.parent('p').siblings('.show_upload_image').find('img').attr('src', '');
		thethis.parent('p').siblings('.show_upload_image').hide();
	});

});

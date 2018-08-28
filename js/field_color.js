var colorPick = function(){

	var colorpicker_inputs = jQuery('input.popup-colorpicker');

	colorpicker_inputs.each(
	function(){
	var $input = jQuery(this);
	var $input1 = jQuery(this).prev('input');
	var sIdSelector = "#" + jQuery(this).attr('id') + "picker";
	var oFarb = jQuery.farbtastic(
	sIdSelector,
	function( color ){
	
	$input1.val( color );
	$input.css({
	backgroundColor: color,
	color: color,
	borderColor: color
	});
	
	/*$input.css({
	backgroundColor: color,
	color: oFarb.hsl[2] > 0.5 ? '#000' : '#fff'
	}).val( color );*/
	
	if( oFarb.bound == true ){
	$input.change();
	$input1.change();
	}else{
	oFarb.bound = true;
	}
	}
	);
	oFarb.setColor( $input.val() );
	oFarb.setColor( $input1.val() );
	
	}
	);
	
	colorpicker_inputs.each(function(e){
	jQuery(this).next('.farb-popup').hide();
	});
	
	
	colorpicker_inputs.live('focus',function(e){
	jQuery(this).next('.farb-popup').show();
	jQuery(this).parents('li').css({
	position : 'relative',
	zIndex : '9999'
	})
	jQuery('#tabber').css({overflow:'visible'});
	});
	
	colorpicker_inputs.live('blur',function(e){
	jQuery(this).next('.farb-popup').hide();
	jQuery(this).parents('li').css({
	zIndex : '0'
	})
	});
};
/*jQuery(document).ready(function(){
	colorPick();
});*/
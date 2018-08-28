jQuery(document).ready(function(){

	jQuery('#emailsubmit').on('click',function(e){ 
            e.preventDefault(); 
           var email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            var username = jQuery('#nameuser').val();
            var useremail = jQuery('#emailuser').val();
            var userphone = jQuery('#phoneuser').val();
            var supportuser = jQuery('#supportuser').val();
            var hiddensitename = jQuery('#hiddensitename').val();
            var hiddensiteurl = jQuery('#hiddensiteurl').val();
            var hiddenadminemail = jQuery('#hiddenadminemail').val();
            var siteurl = document.location.origin;
            //var redirecturl = siteurl+'/wp-admin/admin.php?page=theme-options#tab1/';
            var counter = 1;

            jQuery('.req').each(function (index) {
			    if (jQuery(this).val() == '') {
			        counter ++;
			        jQuery(this).addClass('error');
			    }else if( (jQuery(this).attr('type') == 'email') && (!email_pattern.test(jQuery(this).val()) )){
					counter ++;
					jQuery('#emailuser').addClass('error');
			    }else{
			    	jQuery(this).removeClass('error');
			    }
			});

            if(counter == 1){
	            jQuery.ajax({
	                     type:'post',
	                     url: siteurl+'/wp-content/themes/Governor/inc/theme-options/admin/admin-form-ajax.php',
	                     data: {
	                     		username: username,
	                     		useremail: useremail,
	                     		userphone: userphone,
	                     		supportuser: supportuser,
	                     		hiddensitename: hiddensitename,
	                     		hiddensiteurl: hiddensiteurl,
	                     		hiddenadminemail: hiddenadminemail
	                     	},
	                     success: function(data){
	                     	//console.log(data);
	                         jQuery('.emailsuccess').css('display','block');
	                         jQuery('#nameuser').val('');
	                         jQuery('#emailuser').val('');
	                         jQuery('#phoneuser').val('');
	                         jQuery('#supportuser').val('');
	                     }
	            });
           }

         });

});
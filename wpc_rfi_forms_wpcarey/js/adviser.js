(function($) {
    Drupal.behaviors.tracking = {
        attach: function(context, settings){
            //define function to see if element exists
            jQuery.fn.exists = function(){ return this.length > 0; }
            $.urlParam = function(name){
                var results = new RegExp('[\&]' + name + '=([^&#]*)').exec(window.location.href);

                if(results) {
                    return results[1];
                }else {
                    return null;
                }
            }


           if($('a.contact-adviser').exists()){

                var email = $.urlParam('Email');
                var first_name = $.urlParam('FirstName');
                var last_name = $.urlParam('LastName');
                var phone = $.urlParam('Phone');
                var academic_plain = $.urlParam('AcademicPlan');

                    if(email != null) {
                        $('.contact-adviser').each(function(){
                            var href =  $(this).attr("href");

                            var params = href.split('?')[1];
                            if(params){
                             var parameter_value = '&Email=';
                            }else{
                             var parameter_value = '?Email=';
                            }
                            var url = (href + parameter_value + email.replace('%40','@') + "&FirstName=" + encodeURIComponent(first_name) + "&LastName=" + encodeURIComponent(last_name) + "&Phone=" + encodeURIComponent(phone) + "&AcademicPlan=" +encodeURIComponent(academic_plain));

                            // //append email to existing href
                             var  newUrl = $(this).attr('href').replace(href,url);
                             $(this).attr('href', newUrl);
                        });

                    }

           }// end if (a.contact-adviser).exists

        } //end attach
    }// end Drupal.behaviors.tracking
})(jQuery);
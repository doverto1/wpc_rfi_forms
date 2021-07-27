(function ($) {
  Drupal.behaviors.wpc_program_forms = {
       attach: function (context, settings) {
        var path = window.location.pathname;
        switch (path) {
            case "/masters-programs/accounting-taxation/request-info":

                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Accountancy");
                break;
            case "/masters-programs/taxation/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Taxation");
                break;
            case "/masters-programs/business-analytics/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics");
                break;
            case "/masters-programs/online-business-analytics/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics-Online");
                break;
            case "/masters-programs/finance/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Finance");
                break;
            case "/masters-programs/global-logistics/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Global Logistics");
                break;
            case "/masters-programs/information-technology/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Systems Management");
                break;
            case "/masters-programs/online-information-management/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Systems Management - Online");
                break;
            case "/masters-programs/online-information-technology/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Management-Hybrid");
                break;
            case "/masters-programs/innovation-venture-development/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Innovation and Venture Develop");
                break;
            case "/masters-programs/management/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Management");
                break;
            case "/masters-programs/real-estate-development/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Real Estate Development");
                break;
            case "/mba-programs/part-time/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Prof Flex");
                break;
            case "/mba-programs/executive/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Executive");
                break;
            case "/mba-programs/egade-w-p-carey-executive-mba/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Custom");
                break;
            case "/fast-track-mba/request-information":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Fast-Track");
                break;
            case "/mba-programs/full-time/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Full Time");
                break;
            case "/mba-programs/online/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Online");
                break;
            case "/mba-programs/egade-w-p-carey-executive-mba/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("MBA - Executive EGADE");
                break;
            case "/masters-programs/management/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("M.S. Management");
                break;
            case "/tech-consulting/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Tech Consulting");
                break;
            case "/data-analytics/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Data Analytics");
                break;
            case "/masters-programs/business-analytics-los-angeles/request-info":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics-LA");
                break;
            case "/graduate-certificates/real-estate":
                $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Real Estate");
                break;
        }


        var referrer = document.referrer;
        var referrer_url = '';

        //referrer cookie functionality if the cookie is not set
        if(!Cookies.get('referring')){
            //if the referrer does not contain wpcarey set it to document.referrer
             if(referrer != '' && referrer.indexOf('wpcarey') == -1){
                 referrer_url = referrer;
             //else set it to blank
             }else{
                 referrer_url = '';
             }

                Cookies.set('referring', referrer_url,{ expires: 1, path: '/' });
        }

        if(!Cookies.get('landing_page')){
            Cookies.set('landing_page',document.location.href,{expires: 30, path: '/'});
        }
        function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });

            return vars;
        }

        var url_variables = getUrlVars();

        if(url_variables.utm_source){
            Cookies.set('utm_source',url_variables.utm_source,{ expires: 30, path: '/' });
        }
        if(url_variables.utm_medium){
            Cookies.set('utm_medium',url_variables.utm_medium,{ expires: 30, path: '/' });
        }
        if(url_variables.utm_campaign){
            Cookies.set('utm_campaign',url_variables.utm_campaign,{ expires: 30, path: '/' });
        }
        if(url_variables.utm_term){
            Cookies.set('utm_term',url_variables.utm_term,{ expires: 30, path: '/' });
        }

        //this is done to make sure the ga is on the page.
           $(window).bind("load", function() {

               var enterpriseclientid = ga.getAll()[0].get('clientId');

               if(enterpriseclientid){
                   Cookies.set('enterpriseclientid',enterpriseclientid,{expires: 1,path: '/'});
               }
           });

       }
  };
})(jQuery);
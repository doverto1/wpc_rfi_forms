(function ($) {
    Drupal.behaviors.wpc_program_forms = {
        attach: function (context, settings) {
            var path = window.location.pathname;
            switch (path) {
                case "/masters-programs/accountancy":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Accountancy");
                    break;
                case "/masters-programs/business-analytics":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics");
                    break;
                case "/masters-programs/finance":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Finance");
                    break;
                case "/masters-programs/global-logistics":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Global Logistics");
                    break;
                case "/masters-programs/information-technology":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Systems Management");
                    break;
                case "/masters-programs/online-information-management":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Systems Management - Online");
                    break;
                case "/masters-programs/management":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Management");
                    break;
                case "/management":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Management");
                    break;
                case "/masters-programs/taxation":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Taxation");
                    break;
                case "/masters-programs/real-estate-development":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Real Estate Development");
                    break;
                case "/mba-programs/part-time":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Prof Flex");
                    break;
                case "/mba-programs/executive-mba":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Executive");
                    break;
                case "/mba-programs/egade-w-p-carey-executive-mba":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Custom");
                    break;
                case "/mba-programs/fast-track":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Fast-Track");
                    break;
                case "/mba-programs/full-time":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Full Time");
                    break;
                case "/mba-programs/online":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Online");
                    break;

                case "/masters-programs/online-business-analytics":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics-Online");
                    $('[name="submitted[Campus]"]').val('Online');
                    break;

                case "/masters-programs/online-information-technology":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Management-Hybrid");
                    $('[name="submitted[Campus]"]').val('Online');
                    break;

                case "/masters-programs/online-management":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Management");
                    $('[name="submitted[Campus]"]').val('Online');
                    break;

                case "/undergraduate-degrees":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Undergraduate");
                    break;
                
                case "/undergraduate-degrees/global-agribusiness":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Undergraduate");
                    break;
                
                case "/undergraduate-degrees/food-industry":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Undergraduate");
                    break;

                case "/mba-programs/finance":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Finance");
                    break;

                case "/mba-programs/mba-jd":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Full Time");
                    break;

                case "/mba-programs/sustainability":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Full Time");
                    break;

                case "/mba-programs/sports":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Full Time");
                    break;

                case "/mba-programs/military":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Online");
                    break;

                case "/masters-programs":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Undecided");
                    break;

                case "/masters-programs/msim-linkedin":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Information Management");
                    break;

                case "/mba-programs/engineering":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Prof Flex");
                    break;

                case "/mba-programs/mba-march":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Full Time");
                    break;
                case "/go-masters-programs/business-analytics":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics");
                    break;
                case "/go-masters-programs/part-time":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Prof Flex");
                    break;
                case "/go-masters-programs/finance":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Finance");
                    break;
                case "/masters-programs/innovation-venture-development":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Innovation and Venture Develop");
                    break;
                case "/mba-programs/part_time":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("W. P. Carey MBA - Prof Flex");
                    break;
                case "/tech-consulting":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Tech Consulting");
                    break;

                case "/data-analytics":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Data Analytics");
                    break;

                case "/masters-programs/business-analytics-los-angeles":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Business Analytics-LA");
                    break;

                case "/graduate-certificates/real-estate":
                    $('[name="submitted[PS_Acad_Plan_Descr]"]').val("Real Estate");
                    break;
            }


            var referrer = document.referrer;
            var referrer_url = '';

            //referrer cookie functionality if the cookie is not set
            if (!Cookies.get('referring')) {
                //if the referrer does not contain wpcarey set it to document.referrer
                if (!referrer.includes('programs')) {
                    referrer_url = referrer;
                    //else set it to blank
                } else {
                    referrer_url = '';
                }

                Cookies.set('referring', referrer_url, { expires: 30, path: '/' });
            }

            if (!Cookies.get('landing_page')) {
                Cookies.set('landing_page', document.location.href, { expires: 30, path: '/' });
            }
            function getUrlVars() {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                    vars[key] = value;
                });

                return vars;
            }

            var url_variables = getUrlVars();

            if (url_variables.utm_source) {
                Cookies.set('utm_source', url_variables.utm_source, { expires: 30, path: '/' });
            }
            if (url_variables.utm_medium) {
                Cookies.set('utm_medium', url_variables.utm_medium, { expires: 30, path: '/' });
            }
            if (url_variables.utm_campaign) {
                Cookies.set('utm_campaign', url_variables.utm_campaign, { expires: 30, path: '/' });
            }
            if (url_variables.keyword) {
                Cookies.set('keyword', url_variables.keyword, { expires: 1, path: '/' });
            }

            //this is done to make sure the ga is on the page.
            $(window).bind("load", function () {

                var enterpriseclientid = ga.getAll()[0].get('clientId');

                if (enterpriseclientid) {
                    Cookies.set('enterpriseclientid', enterpriseclientid, { expires: 1, path: '/' });
                }
            });
        }
    };
})(jQuery);
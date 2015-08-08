mybuys.setClient("JOMASHOP");
mybuys.enableZones();

// List of email patterns to suppress (must be in all caps)?
mybuys.extremeEmails = [ "SERVICE@OHHORA.COM" ];

mybuys.base_initPage = mybuys.base_initPage || mybuys.initPage;
mybuys.initPage = function () {
    var doInitPage = true;
    var pt = this.params["pt"];
    if (pt === "purchase") {
        var email = this.params["email"];
        if (email) {
            email = email.toUpperCase();
            for (var i = 0; i < mybuys.extremeEmails.length && doInitPage; i++) {
                doInitPage = doInitPage && (email.indexOf(mybuys.extremeEmails[i]) == -1);
            }
        }
    }

    // doInitPage will be true when any of the following are true:
    // 1. page type is unset or not "purchase"
    // 2. email is unset
    // 3. page type is purchase, email is set, and email does NOT match any patterns in mybuys.extremeEmails
    if (doInitPage) {
        this.base_initPage();
    }
};

mybuys.setOneclkSignupAsImg("http://w.p.mybuys.com/clients/JOMASHOP/images/Joma_Signup-Button_Red_125x22.gif");
mybuys.setOneclkButtonAlt("Product Alerts");

mybuys.setStyle('.mbzone', 'border-style', 'solid', 'border-width', '1px', 'border-color', '#0029B9');
mybuys.setStyle('.mblegend', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'text-align', 'center', 'color', '#0029B9', 'font-size', '15px', 'font-weight', 'bold');
mybuys.setStyle('.mbitem', 'width', '150px');
mybuys.setStyle('.mbnamelink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbnamelink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbnamelink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricerowleft', 'float', '', 'text-align', '');
mybuys.setStyle('.mbpricerowright', 'float', '', 'text-align', '');
mybuys.setStyle('.mbpricelabellink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricelabellink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricelabellink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricelink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricelink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricelink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mbpricerowspan', 'text-align', 'center');
mybuys.setStyle('.mblistrowleft', 'float', '', 'text-align', '');
mybuys.setStyle('.mblistrowright', 'float', '', 'text-align', '');
mybuys.setStyle('.mblistlabellink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mblistlabellink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mblistlabellink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mblistlink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mblistlink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mblistlink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#000000', 'font-size', '10px', 'font-weight', 'normal', 'text-decoration', 'none');
mybuys.setStyle('.mblistrowspan', 'text-align', 'center');
mybuys.setStyle('.mbsalerowleft', 'float', '', 'text-align', '');
mybuys.setStyle('.mbsalerowright', 'float', '', 'text-align', '');
mybuys.setStyle('.mbsalelabellink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#CC0000', 'font-size', '10px', 'font-weight', 'bold', 'text-decoration', 'none');
mybuys.setStyle('.mbsalelabellink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#CC0000', 'font-size', '10px', 'font-weight', 'bold', 'text-decoration', 'none');
mybuys.setStyle('.mbsalelabellink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#CC0000', 'font-size', '10px', 'font-weight', 'bold', 'text-decoration', 'none');
mybuys.setStyle('.mbsalelink:link', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#CC0000', 'font-size', '10px', 'font-weight', 'bold', 'text-decoration', 'none');
mybuys.setStyle('.mbsalelink:visited', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#CC0000', 'font-size', '10px', 'font-weight', 'bold', 'text-decoration', 'none');
mybuys.setStyle('.mbsalelink:hover', 'font-family', 'Verdana,Arial,Helvetica,sans-serif', 'color', '#CC0000', 'font-size', '10px', 'font-weight', 'bold', 'text-decoration', 'none');
mybuys.setStyle('.mbsalerowspan', 'text-align', 'center');
mybuys.setStyleByPageType('HIGH_LEVEL_CATEGORY', '.mbzone', 'border-style', 'solid', 'border-width', '1px', 'border-color', '#FFFFFF');
mybuys.setStyleByPageType('CATEGORY', '.mbzone', 'border-style', 'solid', 'border-width', '1px', 'border-color', '#FFFFFF');
mybuys.setStyleByPageType('PRODUCT_DETAILS', '.mbzone', 'border-style', 'solid', 'border-width', '1px', 'border-color', '#FFFFFF');


mybuys.useOneclkForExistingSignup(true);

mybuys.applyStyles();
mybuys.setFailOverMsecs(5000);

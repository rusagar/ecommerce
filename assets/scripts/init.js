// JavaScript Document
$(function(){
    
    /*FUNCTIONS CHANGED BY PUSP NEW CHNAGES*/
    $("#slideDown").click(function(){
         $(document).unbind("click");
        if ($("#slideDiv:visible").length != 0){
                $('#slideDiv').hide('500');
            }else{
                $("#slideDiv").show("500");
                $("#slideDown").bind('mouseout',function(){
                    $(document).bind("click",function(){

                        $("#slideDiv").hide('500');

                        });
                    }); 
            }
    });
    
    //        $("input[type=checkbox], select, input[type=file]").uniform();
    
//    $("input[type='checkbox'], select, input[type='radio'], input:[type='file']").uniform();
    $("input[type='checkbox'], select, input[type='radio']").uniform();
    
    
    // Mozilla Hack
//    var ua = $.browser;
//    if(ua.mozilla){
//    $('#uniform-resume .action').unbind('click').click(function(){
//        $("input:file[name='resume']").trigger('click');
//    });
//    $('#uniform-cover_letter .action').unbind('click').click(function(){
//        $("input:file[name='cover_letter']").trigger('click');
//    });
//    $('#uniform-other .action').unbind('click').click(function(){
//        $("input:file[name='other']").trigger('click');
//    });
//    
//    $('#uniform-undefined .action').unbind('click').click(function(){
//        $("input:file[name='logo']").trigger('click');
//    });
//    
//    }
	jQuery("#menu ul li ul li:last-child a").addClass("brdBtmnull");
        

});
 


// Browser Detect
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

// For iMac

$(document).ready(function(){
<!--
if(BrowserDetect.browser + BrowserDetect.OS == "FirefoxMac"){
$(".buttons input, #searchJobs .mainsearchJobbox .sjcol-1-2 label input[type='text'], #searchJobs .searchJobsbox .sjcol-1-2 label input[type='text']").addClass("lessPadd");
$("#container .content .brdOuter").addClass("minusMargin");
$(".wrapper #signup").addClass("addHeight");
$(".box-signUp #signupForm .signUpform #registerSeeker .brdForm .confirm_password").addClass("incTop");
$(".buttonsRgt a").addClass("lessPaddrec");
}
if(BrowserDetect.browser + BrowserDetect.OS == "SafariMac" || BrowserDetect.browser + BrowserDetect.OS == "ChromeMac"){
$(".buttons input, #searchJobs .mainsearchJobbox .sjcol-1-2 label input[type='text'], #searchJobs .searchJobsbox .sjcol-1-2 label input[type='text']").addClass("lessPadds");
$("#searchJobs .buttons input").addClass("adjbtntxt");
}
// -->
});




$(function($){
    $('#advanceSearchButtons > a').click(function(){
        //$(this).parent().hide();
       $('#advanceSrchSection').hide();
       $('#advanceSrchSection :input').attr("disabled",'disabled');
       $('#basicSearchButton').fadeIn('500');
    });
    $('#basicSearchButton > a').click(function(){
       //$(this).parent().hide();
       $('#basicSearchButton').hide();
       $('#advanceSearchButtons').show();
       $('#advanceSrchSection :input').removeAttr("disabled",'disabled');
       $('#advanceSrchSection').fadeIn('500');
    });
    
    
        $('#advanceSrchSection :input').attr("disabled",'disabled');
        
        $('.job_type').hide();
        
        $('.worktype').hide();
        
        $('.locations').hide();
        
        var locVal = $("#location_id").val();
        
        var jtVal = $('#jobs_types_id').val();
         
        var prVal =  $('#practice_area').val(); 
        
        var checked = "";
        
        $('#listval , #chkVal').click(function(){
            $(document).unbind("click");
             if ($("div.job_type:visible").length != 0){
                
                $('.job_type').hide('500');
                
            }else{
                
            $('.job_type').show('500');
             $("#listval , #chkVal").bind('mouseout',function(){
                
                $(document).bind("click",function(){
                    
                    $(".job_type").hide('500');
                    
                    });
                }); 
            }
            $('.worktype').hide();
        
            $('.locations').hide();
        });
        
         $('.job_type').click(function(e) {
            e.stopPropagation();
        });
        
        $('#lisPractice , #chkPractice').click(function(){
           $(document).unbind("click");
           if ($("div.worktype:visible").length != 0){
                
                $('.worktype').hide('500');
                
            }else{
                
            $('.worktype').show('500');
            $("#lisPractice , #chkPractice").bind('mouseout',function(){
                
                $(document).bind("click",function(){
                    
                    $(".worktype").hide('500');
                    
                    });
                }); 
            }
            $('.job_type').hide();
        
            $('.locations').hide();
           
        });
        
        $('.worktype').click(function(e) {
            e.stopPropagation();
        });
        
        $("#lisLocation , #chkLocation").click(function(e){
                $(document).unbind("click");
                if ($("div.locations:visible").length != 0){
                
                $('.locations').hide('500');
                
                   
                }else{
                    $(".locations").show('500');
                    $("#lisLocation , #chkLocation").bind('mouseout',function(){
                
                $(document).bind("click",function(){
                    
                    $(".locations").hide('500');
                    
                    });
                });     
                }   
                $('.worktype').hide();
                $('.job_type').hide();
                
        });
        
        $('.locations').click(function(e) {
            e.stopPropagation();
        });
        var checked_ids=new Array();
        $('.job_type > ul > li').click(function(){
            
            var jobTypeName = "";
             checked_ids=[];
            var checked = $('input:checkbox[name="check[]"]:checked').map(function(i,n) {
                
                checked_ids.push($(n).val());
                
                if(checked_ids.length ==1)
                    jobTypeName += $('#jt_'+$(n).val()).html();
                else
                    jobTypeName += ", "+$('#jt_'+$(n).val()).html();
               
                return $(n).val();
                
            }).get();
            
            var is_pvt_s=false;
            for(var i=0; i<checked_ids.length ; i++)
             {
               if(checked_ids[i]==1)
                    is_pvt_s=true; 
             }
            
                  
            if(checked_ids.length == 0 ||  is_pvt_s )
            {
                //alert('here');
                $(".practiceLbl").css('display','block');
                $(".practiceView").css('display','block');
                $(".worktype").css('display','none');
                      
            }
            else
            {
                $(".practiceLbl").css('display','none');
                $(".practiceView").css('display','none');
                $(".worktype").css('display','none');
                //$("#practiceLbl").css('visibility','hidden'); 
                           
                        
            }
            
            $('#jobs_types_id').attr('value',checked);
            
            if(checked == ""){
                
                $('#chkVal').html('<span>All</span>');
                $('#jobs_types_id').attr('value',jtVal);
                
            }else{
                $('#chkVal').html('<span>'+jobTypeName+'</span>');
            }
            
        });
        var checked_practice_ids = new Array();
        $('.worktype > ul > li').click(function(){
        
            var practiceAreaName = "";
            checked_practice_ids =[];
            var checked = $('input:checkbox[name="checkPractice[]"]:checked').map(function(i,n) {
                
                checked_practice_ids.push($(n).val());
                
                if(checked_practice_ids.length == 1)
                    practiceAreaName += $('#pr_'+$(n).val()).html();
                else
                    practiceAreaName += ", "+$('#pr_'+$(n).val()).html();
                
                return $(n).val();
                
            }).get();
            
            $('#practice_area').attr('value',checked);
            
            if(checked == ""){
                
                $('#chkPractice').html('<span>All</span>');
                
                $('#practice_area').attr('value',prVal);
            }else{
                
                $('#chkPractice').html('<span>'+practiceAreaName+'</span>');
            }
            
        });
        var checked_location_ids = new Array();
        $('.locations > ul > li').click(function(){
            checked_location_ids = [];
            var LocationsName = "";
        
            var checked = $('input:checkbox[name="locations[]"]:checked').map(function(i,n) {
                
                checked_location_ids.push($(n).val());
                
                if(checked_location_ids.length ==1)
                    LocationsName += $("#loc_"+$(n).val()).html(); 
                else
                    LocationsName += ", "+$("#loc_"+$(n).val()).html(); 
                
                return $(n).val();
                
            }).get();
            
            $('#location_id').attr('value',checked);
            
            if(checked == ""){
                
                $('#chkLocation').html('<span>All</span>');
                
                $('#location_id').attr('value',locVal);
                
            }else{        
                
                $('#chkLocation').html('<span>'+LocationsName+'</span>');
            }
            
        });
        
    });

<!--

    // wrap as a jQuery plugin and pass jQuery in to our anoymous function
    (function ($) {
        $.fn.cross = function (options) {
            return this.each(function (i) { 
                // cache the copy of jQuery(this) - the start image
                var $$ = $(this);
                
                // get the target from the backgroundImage + regexp
                var target = $$.css('backgroundImage').replace(/^url|[\(\)'"]/g, '');

                // nice long chain: wrap img element in span
                $$.wrap('<span style="position: relative;"></span>')
                    // change selector to parent - i.e. newly created span
                    .parent()
                    // prepend a new image inside the span
                    .prepend('<img>')
                    // change the selector to the newly created image
                    .find(':first-child')
                    // set the image to the target
                    .attr('src', target);

                // the CSS styling of the start image needs to be handled
                // differently for different browsers
                if ($.browser.msie || $.browser.mozilla) {
                        
                    $$.css({
                        'position' : 'absolute', 
                        'left' : 0,
                        'background' : ''
                        
                    });
                } else if ($.browser.opera && $.browser.version < 9.5) {
                    // Browser sniffing is bad - however opera < 9.5 has a render bug 
                    // so this is required to get around it we can't apply the 'top' : 0 
                    // separately because Mozilla strips the style set originally somehow...                    
                    $$.css({
                        'position' : 'absolute', 
                        'left' : 0,
                        'background' : '',
                        'top' : "0"
                    });
                } else { // Safari
                    $$.css({
                        'position' : 'absolute', 
                        'left' : 0,
                        'background' : ''
                    });
                }

                // similar effect as single image technique, except using .animate 
                // which will handle the fading up from the right opacity for us
                $$.hover(function () {
                    $$.stop().animate({
                        opacity: 0
                    }, 250);
                }, function () {
                    $$.stop().animate({
                        opacity: 1
                    }, 250);
                });
            });
        };
        
    })(jQuery);
    
    // note that this uses the .bind('load') on the window object, rather than $(document).ready() 
    // because .ready() fires before the images have loaded, but we need to fire *after* because
    // our code relies on the dimensions of the images already in place.
    $(window).bind('load', function () {
        $('#bottomIco ul li.item a img.fade').cross();
    });
    
    //-->
    
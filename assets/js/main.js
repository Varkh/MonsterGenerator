jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

    /*how-to*/
    $('#step1').click(function(){$('.how-it-in').removeClass('how-it-in').addClass('step1');});
    $('#step2').click(function(){$('.how-it-in').removeClass('how-it-in').addClass('step2');});
    $('#step3').click(function(){$('.how-it-in').removeClass('how-it-in').addClass('step3');});
    $('#step4').click(function(){$('.how-it-in').removeClass('how-it-in').addClass('step4');});

});
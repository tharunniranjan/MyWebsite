$(document).ready(function() {
	
$('#logo').addClass('animated bounceInDown');
$('#tagline').addClass('animated lightSpeedIn');
$('#submit').hover(function() {
	$('#star1').addClass('animated rotateIn');
	$('#star2').addClass('animated rotateIn');
	$('#star3').addClass('animated rotateIn');
	$('#star4').addClass('animated rotateIn');
    
},
 function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
				//if(animation != "animated rotateIn"){
                element.removeClass('animated ' + animation);
				
            }, 2000);           
        });
animationHover('#star1', 'rotateIn');

animationHover('#star2', 'rotateIn');
animationHover('#star3', 'rotateIn');

animationHover('#star4', 'rotateIn');

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);          
        },
		
		
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
				if(animation != "animated rotateIn"){
                element.removeClass('animated ' + animation);
				}
            }, 2000);           
        });
		}


function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);          
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);           
 
        });
} 
});

$(function(){
  $("#slides").slidesjs({
	   width: 960,
    height: 280,
    play: {
      active: false,
       
      effect: "slide",
       
      interval: 5000,
        
      auto: true,
        
      swap: true,
       
      pauseOnHover: false,
       
      restartDelay: 2500
       
    },
	 navigation: {
          effect: "slide",
		  active:false
        },
        pagination: {
          effect: "fade",
		  active:false
        },
        effect: {
          fade: {
            speed: 400
          }
        }
  });
});
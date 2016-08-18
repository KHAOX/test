$(document).ready(function(){

	//select MAIN menu
	function clean(){
		$(".item").each(function(){       
	        $(this).removeClass("active");
	    })
	}
	$( ".item" ).click(function() {	
	  	clean();	
  		$(this).addClass("active");
	});

	//Show image
	

	$( ".img-gallery" ).click(function() {
	  var title = $(this).attr( "src" );	  
	  $("#show-img img").attr("src", ""+title );
	  $("#show-img").css("z-index","5");
	  $( "#show-img" ).animate({	  
	    opacity: 1	    
	  },1000, function() {});
	});

	function hideimage(){
		$( "#show-img" ).animate({
		  opacity: 0	    
		},1000, function() {
		  $("#show-img").css("z-index","-5");
		});
	}

	$( "#button-close" ).click(function() {
	  hideimage();
	});

	$(document).keyup(function(event){
	    if(event.which==27)
	    {
	       hideimage();
	    }	
	});

	//menu on Phone
	var state = true;
	
	$( ".buttom-menu" ).click(function() {
	 	if(state == false){
			$( "#menu-content" ).animate({
			  left:'-150px'   
			},500);
			state=true;
		}else{
			$( "#menu-content" ).animate({
			  left:'0px'   
			},500);
			state=false;
		}	
	});
})
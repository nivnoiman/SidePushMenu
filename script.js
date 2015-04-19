jQuery(document).ready(function(){
	//mobile menu
	jQuery(".mobile_menu_toggle").click(function(e){
		e.preventDefault();
		jQuery(this).toggleClass("activated");
		jQuery(".wrapper, .dark_overlay, .mobile_menu_container").toggleClass("opened");
	});
});

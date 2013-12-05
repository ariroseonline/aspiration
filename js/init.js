$(document).ready(function(){
	$('.cover-section').removeClass('shh');
});

//wait for background image to finish loading
$(window).load(function(){
		setTimeout(function(){$('.content-section').removeClass('shh')}, 500);
})
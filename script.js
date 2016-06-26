var main = function(){
	$('#logo a').fadeIn(600);

	$('.btn').click(function() {
		var post = $('.status-box').val();
		$('<li>').text(post).prependTo('.posts');
		$('.status-box').val('');
		$('.counter').text('0');
		$('.btn').addClass('disabled'); 
	});

	$('.status-box').keyup(function() {
		var postLength = $(this).val().length;
		$('.counter').text(postLength);

		if(postLength > 0) {
			$('.btn').removeClass('disabled'); 
		};
	});

	$('.btn').addClass('disabled');


	/* Push the body and the nav over by 285px over */
	$('.popout-btn').click(function() {
		$('.comments').animate({ 
			right: '0px' /* "0px" is the position on the site page */
		}, 600); /*time taken during which the icon menu push right */

		 
	});

	

	

}

$(document).ready(main);

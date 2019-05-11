
	$(window).on("load", function () {
		$('.ml3').each(function(){
			$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		  });
		  
		  anime.timeline({loop: false})
			.add({
			  targets: '.ml3 .letter',
			  opacity: [0,1],
			  easing: "easeInOutQuad",
			  duration: 100,
			  delay: function(el, i) {
				return 100 * (i+1)
			  }
			});
	});
$(function () {
	$('body').append('<div id="mdd_overlay"></div>');
	var $mdd_nav = $('#mdd_nav');
	var $mdd_nav_items = $mdd_nav.children('li');
	var $mdd_overlay = $('#mdd_overlay');
	$mdd_nav_items.bind('mouseenter', function () {
		var $this = $(this);
		$this.addClass('slided selected');
		$this.children('ul').css('z-index', '9999').stop(true, true).slideDown(0, function () {
			$mdd_nav_items.not('.slided').children('ul').hide();
			$this.removeClass('slided');
		});
	}).bind('mouseleave', function () {
		var $this = $(this);
		$this.removeClass('selected').children('ul').css('z-index', '1');
	});
	$mdd_nav.bind('mouseenter', function () {
		var $this = $(this);
		$mdd_overlay.stop(true, true).fadeTo(0, 0.6);
		$this.addClass('hovered');
	}).bind('mouseleave', function () {
		var $this = $(this);
		$this.removeClass('hovered');
		$mdd_overlay.stop(true, true).fadeTo(0, 0);
		$mdd_nav_items.children('ul').hide();
		$mdd_overlay.hide();
	})
});

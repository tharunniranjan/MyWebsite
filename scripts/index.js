var View = {};
View.positions = {};
View.windowHeight = 0;
View.page = '';
View.sliding = false;

View.set = function() {
	View.windowHeight = $(window).height();

	View.page = '#' + $('.page:first').attr('id');

	$('[data-fit-height="true"]').each(function() {
		var container = $(this).find('.main');

		if(container.height() < 500 || View.windowHeight > 800) {
			$(this).css('height', View.windowHeight + 'px');
			var h = container.height();

			container.css({
				'padding-top': (($(this).height() - h) / 2) - $('.navbar').height() + 'px'
			});
		} else {
			$(this).css('height', '').addClass('single');
			container.find('.hidden-desktop').removeClass('hidden-desktop');
		}
	});

	var navbarH = $('.navbar').height();

	$('[data-section]').each(function() {
		var $this = $(this);
		View.positions[$this.attr('id')] = $this.offset().top - navbarH;
	});
};

View.scrollByKey = function(up) {
	var t = up ? $(View.page).prev('.page') : $(View.page).next('.page');

	if(t.length) {
		View.scroll('#' + t.attr('id'));
	}
};

View.scroll = function(t) {
	var h = 0;

	if(!$(t).data('fit-height')) {
		h = $('.navbar').height();
	}

	$('html, body').animate({
		scrollTop: $(t).offset().top - h
	}, 1000, function() {
		$('.sub-nav [data-forward="' + t + '"]').addClass('active');
		View.sliding = false;
	});

	_gaq.push(['_trackPageview', location.pathname + t]);
};

$(document).ready(function() {

	$('.loader').show();

	$('[data-forward]').click(function(e) {
		e.preventDefault();

		View.sliding = true;

		var target = $(this).data('forward');
		$('.sub-nav [data-forward]').removeClass('active');
		View.page = target;

		View.scroll(target);
	});

	$('.page [data-forward]').hover(function() {
		$(this).parent().find('.animated-icon').addClass('animate');
	}, function() {
		$(this).parent().find('.animated-icon').removeClass('animate');
	});

	$('.tab-nav a').click(function() {
		var target = $(this).data('target');

		$('.tab-nav a').removeClass('active');
		$(this).addClass('active');

		$('.tab').removeClass('active');
		$(target).addClass('active');

		return false;
	});

	$(document).keydown(function(e){
		if (e.keyCode == 38) {
			View.scrollByKey(1);
		} else if (e.keyCode == 40) {
			View.scrollByKey(0);
		}
	});

	$(window).scroll(function () {
		if(!View.sliding) {

			var windowTop = $(window).scrollTop();

			for(var i in View.positions) {
				if(windowTop >= View.positions[i] && windowTop <= View.positions[i] + View.windowHeight) {
					$('.sub-nav [data-forward]').removeClass('active');
					$('.sub-nav [data-forward="#' + i + '"]').addClass('active');

					View.page = '#' + i;
					_gaq.push(['_trackPageview', location.pathname + View.page]);
				}
			}

			if(windowTop > View.windowHeight / 4) {
				$('#go-up').addClass('visible');
			} else {
				$('#go-up').removeClass('visible');
			}
		}
    });
});

$(window).load(function() {
	if($(window).width() > 640) {
		View.set();
	}

	$('.loader').hide();
});

$(window).resize(function() {
	if($(window).width() > 640) {
		View.set();
	}
});
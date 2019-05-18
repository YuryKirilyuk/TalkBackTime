jQuery(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        jQuery('body').addClass('ios');
	} else{
        jQuery('body').addClass('web');
	};


    if(jQuery('form').length) {
        jQuery('[data-required_mark]').each(function(){
            var dataText = jQuery(this).data('required_mark');
            jQuery(this).parent().addClass(dataText);
        });
    };


});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */

jQuery(window).scroll(function() {
	
		
	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */

jQuery(window).resize(function() {
		
		
	});




jQuery(function(){

    var $iframe = jQuery('#videoModal iframe', jQuery(this)),
        src = $iframe.attr('src');

    jQuery('#videoModal').on('shown.bs.modal', function () {
        $iframe.attr('src', src + '?autoplay=1');
    });
    jQuery("#videoModal").on('hidden.bs.modal', function (e) {
        $iframe.attr("src", src);
    });


    jQuery('.page-id-3 .entry-content a[href^="#"]').click(function(){
        var target = jQuery(this).attr('href');
        jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 400);
        return false;
    });




    if(jQuery('.section-hero > section').length) {

        jQuery(window).on('load resize',imageHeight);

        var initialHeight = 300,
            initialWidth = 1920,
            cropImage = 20, //на сколько обрезать картинку в % -> 30%
            breakPoint = initialWidth - (initialWidth / 100 * cropImage), //1536 -> 1920px - 20%
            ratio = breakPoint / initialHeight, //соотношение ширины и высоты
            crop = initialWidth - breakPoint, //на сколько пиксилей обрезало картинку
            cropPercent = 100 + crop / breakPoint * 100; // на сколько обрезало в % соотношении

        function imageHeight() {

            jQuery('.section-hero > section').each(function(){
                var self = jQuery(this),
                    width = self.width(),
                    height = width / ratio,
                    newHeight = width >= breakPoint ? initialHeight : height;

                if(newHeight >= 100) {
                    self.parent().css('height', newHeight + 'px');
                }

                //if(width <= 1024) self.css({'background-size' : cropPercent + '%' + newHeight + 'px'})
                //else self.css({'background-size' : 'cover'})
            });

        }//imageHeight()
    }

});

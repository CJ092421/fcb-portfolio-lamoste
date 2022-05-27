
// Set all carousel items to the same height
function carouselNormalization() {
    
    window.heights = [], //create empty array to store height values
    window.tallest; //create variable to make note of the tallest slide
    
    function normalizeHeights() {
        jQuery('.slider_area .box-area .row').each(function() { //add heights to array
            window.heights.push(jQuery(this).outerHeight());
        });
        window.tallest = Math.max.apply(null, window.heights); //cache largest value
        jQuery('.slider_area .box-area .row').each(function() {
            jQuery(this).css('min-height',tallest + 'px');
        });
    }
    normalizeHeights();

    jQuery(window).on('resize orientationchange', function () {
        
        window.tallest = 0, window.heights.length = 0; //reset vars
        jQuery('.slider_area .box-area .row').each(function() {
            jQuery(this).css('min-height','0'); //reset min-height
        }); 
        
        normalizeHeights(); //run it again 

    });
    
}

jQuery( document ).ready(function() {
    carouselNormalization();
});


$('.slider_area').owlCarousel({
	autoplay:false,
	slideSpeed:3000,
	items:2,
	nav:true,
	navText:['<i class="text-light fa fa-arrow-left"></i>','<i class="text-light fa fa-arrow-right"></i>'],
	margin:30,
	dots:false,
	responsive:{
		320:{
			items: 1
		},
		764:{
			items: 1
		},
		1000:{
			items: 2
		}
	}
});




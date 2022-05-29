
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

//Get the button
var mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Send Message

 var form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("contactForm-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
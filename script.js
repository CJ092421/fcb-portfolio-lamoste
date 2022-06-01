
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


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("_navmenu").style.padding = "5px 10px";
    document.getElementById("_logotext").style.fontSize = "30px";
    document.getElementById("backtotop").style.display = "block";
  } else {
    document.getElementById("_navmenu").style.padding = "15px 10px";
    document.getElementById("_logotext").style.fontSize = "35px";
    document.getElementById("backtotop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Send Message to email
var form = document.getElementById("contactForm");    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-status");
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
      $('#contactForm-status').show();
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


// Hide navbar when click menu
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarCollapse')

const bsCollapse = new bootstrap.Collapse(menuToggle, {
  toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {   
            bsCollapse.hide()    
    })
})

// Nav bar focus active change
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})


// Set active nav link when scrolling down
const li = document.querySelectorAll(".nav-link");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach(li => li.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
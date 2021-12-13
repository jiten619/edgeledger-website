// Initialize and add the map
function initMap() {
    //your location
    const loc = { lat: 22.353370, lng: 82.679210 }
    // centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 14,
        center: loc
    });
    // the marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map:
         map});
        }

// Sticky menu backgorund
window.addEventListener('scroll', functio(){
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});



// Smooth scrolling
$('#navbar a, .btn').on('click', function(Event){
    if (this.hash !== '') { 
        Event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrolltop: $(hash).offset().top - 100
            },
            800
        );
    }
});
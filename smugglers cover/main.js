//Initalize and add the map
function initMap() {
	//your location
	const loc = { lat: 43.494704, lng: -3.616678};
	//centered map on location
	const map = new google.maps.Map (document.querySelector('.map'),{
	zoom: 14,
	center: loc
});
//The marker, positioned at location
const marker = new google.maps.Marker({position: loc, map: map});
}

//Sticky menu opacity background
window.addEventListener('scroll', function(){
	if(window.scrollY > 150) {
		document.querySelector('#navbar').style.opacity = 0.9;
	} else {
		this.document.querySelector('#navbar').style.opacity =1;
	}
});

// Smooth Scrolling
$('#navbar a, #showcase a').on('click',function(event){
	if (this.hash !==''){
		event.preventDefault();
		
		const hash=this.hash;

		$('html,body').animate(
			{
				scrollTop: $(hash).offset().top -95 // -100 fixed the issue of not seeing titles
			},
			800
		);

	}
});
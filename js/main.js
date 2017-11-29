jQuery(document).ready(function($){
	// obsluga rozwijanego menu na mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});

    // gladkie przewijanie
    $('.cd-header a').on('click', function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
});

    // obsluga google maps api
    function initMap() {
        var zlomiarzTeam = {lat: 54.380737, lng: 18.595791};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: zlomiarzTeam
        });
        var marker = new google.maps.Marker({
          position: zlomiarzTeam,
          map: map
        });
      }  

      // podmiana opisu na imie w sekcji trenerow


    $(".trainer-img").click(function() {
        
        $(this).siblings().slideToggle(1000).toggleClass("name");
       
        
        });

        // email po wcisnieciu ikony

        $('#email').click(()=> {
            $('.visible').toggle(300);
        });
//var slider = document.getElementById('range-input');
//  noUiSlider.create(slider, {
//   start: [20, 50],
//   connect: true,
//   step: 1,
//   range: {
//     'min': 0,
//     'max': 100
//   },
//   format: wNumb({
//     decimals: 0
//   })
//  });

var bg = jQuery("#section1, #section5");
jQuery(window).resize("resizeBackground");
function resizeBackground() {
    bg.height(jQuery(window).height() + 60);
}
resizeBackground();



window.onscroll = function() {
    if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && (window.matchMedia('(max-width: 450px)').matches)) {
        $("#nav-icon4 span").css({'background': '#ffffff'}); 
        $(".btn-floating").css({'transform': 'scale(0)'});
    }
    else{
        $("#nav-icon4 span").css({'background': '#3e4c5e'});
        $(".btn-floating").css({'transform': 'scale(1)'});
    }
};

$('.button-collapse').sideNav({
    menuWidth: 300,
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
  $('.collapsible').collapsible();

$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200
    }
  );

     
    $('.slider').slider({
        Transition: 0,
        height: 350
    });





$(document).ready(function () {
if (window.matchMedia('(min-width: 602px)').matches)
{
    $("img").remove('.bis1');
    
}
else
    {
        $('div').remove('#canvas');  
        $("img").css({'opacity': '1'});
        
    }
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });

//HAMBUGER
$(document).ready(function () {
    $('#nav-icon4').click(function () {
		$('.main-logo').css({'transform': 'translateY(0px)'});
        $(this).toggleClass('open');
        
    });
});


//TYPED.JS SETTINGS

function showThis() {
    $('#typedid').each(function () {
        var classes = ['typetype', 'BLUEBLUE', 'greengreen'];
        this.className = classes[($.inArray(this.className, classes) + 1) % classes.length];
    });

    $('#typedid2').each(function () {
        var classes = ['typed-cursor', 'BLUEBLUE', 'greengreen'];
        this.className = classes[($.inArray(this.className, classes) + 1) % classes.length];
    });
    $('#what-u-need').each(function () {
        var classes = ['typed-cursor', 'BLUEBLUE', 'greengreen'];
        this.className = classes[($.inArray(this.className, classes) + 1) % classes.length];
    });
}

$(function () {
    $("index.html .typetype").typed({
        strings: ["прибыльные", "красивые", "адаптивные", "продуманные", "недорогие"],
        typeSpeed: 1,
        backSpeed: 5,
        startDelay: 0,
        backDelay: 2500,
        loop: true,
        showCursor: false,
        preStringTyped: function () {
            showThis();
        }
    });

});


$('div').each(function(){
    if($(this).hasClass('sidenav-overlay')) {
        $(this).toggleClass('open');
        $('#ham-stripe-1').css({'width': '17px'});
    } 
});






google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(55.616486,37.595049),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: false,
            draggable : false,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [ { "featureType": "landscape", "elementType": "labels", "stylers": [ { "visibility": "on" } ] },{ "featureType": "transit", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "water", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },{ "stylers": [ { "hue": "#eef5f9" }, { "saturation": 0 }, { "gamma": 3.15 }, { "lightness": 22 } ] },{ "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "lightness": 24 } ] },{ "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": 57 } ] } ],
        }
        var mapElement = document.getElementById('mapmap');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['0', 'чертановская 29 к1', '0', '0', '0', 55.61589799999999, 37.59486700000002, 'https://imgh.us/vectorizm-map-marker_4.png']
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}




var body = document.body,
    timer,
    hover_disabled = false;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if( ! hover_disabled && ! body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover');
    hover_disabled = true;
  }
  
  timer = setTimeout(function(){
    body.classList.remove('disable-hover');
    hover_disabled = false;
  }, 300);
}, false);
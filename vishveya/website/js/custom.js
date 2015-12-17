// JavaScript Document
 var mapbranch = {
    center:new google.maps.LatLng(12.930605,77.543374),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
 
function initialize() {
 
  
  var map=new google.maps.Map(document.getElementById("googleMap"), mapbranch);
   var marker = new google.maps.Marker({
    position: {lat: 42.346487, lng: -71.083204},
    map: map,
   
  });
  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
	$('.navbar ul li a').click(function(){
		var activeEle = $(this).attr('data-section');
		$('.navbar ul li a').removeClass('active');
		$(this).addClass('active');
		$('.innerContent').removeClass('pt-page-moveFromRightFade');
		$('.'+ activeEle+'').addClass('pt-page-moveFromRightFade');
		
	});	
	
	/*$('.viewMap').click(function(){
		var ele=$(this).attr('id');
		$('.viewMap').removeClass('active');
		$('#'+ele+'').addClass('active');
		if(ele == "corporate"){
			var map=new google.maps.Map(document.getElementById("googleMap"), mapCorp);
			   var marker = new google.maps.Marker({
				position: {lat: 42.346487, lng: -71.083204},
				map: map,
				
			  });
			  marker.setMap(map);
			}else{
				var map=new google.maps.Map(document.getElementById("googleMap"), mapbranch);
			   var marker = new google.maps.Marker({
				position: {lat: 12.930605, lng: 77.543374},
				map: map,
				
			  });
			  marker.setMap(map);
				}
	});*/
	
	
$('html').click(function(){
	if($('#navbar').hasClass('navbarOpen')){$('.qp-ui-mask-modal').removeClass('qp-ui-mask-visible');$('#navbar').toggleClass('navbarOpen');}
});
$('.navbar-toggle').on('click',function(e){
	$('#navbar').toggleClass('navbarOpen');
	if($('#navbar').hasClass('navbarOpen')){
		$('.qp-ui-mask-modal').addClass('qp-ui-mask-visible');
		e.stopPropagation();
	}else{$('.qp-ui-mask-modal').removeClass('qp-ui-mask-visible');}	
});
	
});
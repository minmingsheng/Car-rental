import {Page,NavController} from 'ionic-angular';
import {rentIt} from '../rentIt';
import {generalService} from '../../../services/general.service';
import {ApiService} from '../../../services/api';
import {Menu} from '../../menu/menu';

@Page({
    templateUrl: 'build/pages/rentIt/location/location.html',
    styles: [`
    	.discard{
    		color:#387ef5!important;
    	}
    	.card{
   			width:30%!important;
   			margin:0;
   			flex:1;
   			border-radius: 0;
   			height:5.9em!important;
   			line-height:3em;
   			font-family: "roboto"!importnat;
   			font-weight:light!important;
   			text-align:center!important;
   			background:#5a5a6b;
    	}
    	.tabs{
    		display: flex;
    		width:100%!important;
    		padding:0;
    	}
    	.search{
			height:4.4em;
			background:#171230!important;
    	}
    	.recent-card{
    		width:100%;
    		margin:0;
    		height:6.5em!important;
    		display:flex!important;
    		position: relative;
    		background:transparent;
    	}
    	.recent-card .card-info{
    		flex:4;
    		background:rgba(188, 189, 191, 0);
   
    	}
    	.recent-card:nth-child(2n) .card-info{
    		background:rgba(176, 177, 180, 0.4);
    	}

    	.recent-card .card-info .name{
    		margin-bottom:0!important;
    		padding-bottom:0!important;
    	}
    	.recent-card button{
    		flex:1;
			height:100%;
			background:#171230!important;
			margin:0!important;
			color:#43c3c5!important;
			border-radius:0!important;
    	}
    	.bg{
    		background:#171230!important;
    		color:#ffffff!important;
    	}
		.location-list{
			border-radius:0;
			width:100%;
			margin:0;
			height:3.7em;
			color:#43c3c5;
			background:#15132a;
			transition:all 400ms cubic-bezier(.17,.67,.87,1.14)!important;
			z-index:100;
		}
		.nearMeToMap{
			transform: translate(0,30.1em);
			z-index:100;
		}
		.tab-recent{
			position:relative;
		}
		.map-address{
			width:100%;
			height:3.7em;
			border-radius:0;
			background:#15132a;
			margin:0;
			color:#ffffff;
			line-height:3.7em;
			padding-left:1em;
			position:absolute;
			top:0;
		}
		.map{
			position:absolute;
			top:3.7em;
			width:100%;
			height:31em;
			margin:0;
		}

  `],
   providers: [generalService, ApiService]
})

export class Location {
	public google;
	public map;
	public search=false;
	public recent=true;
	public nearMe=false;
	public nearMeToMap=false;
	public showList=true;
	public nearMeAddress="1091 Speers Road, Oakville, ON";
	public nearMeResults = [{
		name: "East Oakville",
		address: "557 Trafagar road, Oakville, ON, L7S B3S",
		tel: "944-322-4563",
	},{
		name: "Automacs",
		address: "1091 Speers Road, Oakville, ON, L7L B3S",
		tel: "944-201-9345",
	},{
		name: "West Oakville",
		address: "463 Trafagar road Oakville, ON, B6H B3S",
		tel: "902-322-1234",
	}] 
	public recentResults = [{
		name: "East Oakville",
		address: "557 Trafagar road, Oakville, ON, L7S B3S",
		tel: "944-322-4563",
	},{
		name: "Automacs",
		address: "1091 Speers Road, Oakville, ON, L7L B3S",
		tel: "944-201-9345",
	},{
		name: "West Oakville",
		address: "463 Trafagar road Oakville, ON, B6H B3S",
		tel: "902-322-1234",
	}] 
    constructor(private _navController: NavController, private _generalService: generalService, private _apiService: ApiService) {
    	this.map = null;
    	
    };
    getLocation(location){
    	this._generalService.getLocation(location);
    	this._navController.push(rentIt, {pickUpLocaton: this._generalService.getLocation(location)});
    }
    onDiscard(){
    	this._navController.pop(Menu);
    };
    activeSearch(){
    	this.search = true;
    	this.recent = false;
    	this.nearMe=false;
    	setTimeout(()=>{
    		this.initAutocomplete();
    	}, 100)
    	
    };
    activeRecent(){
    	this.search = false;
    	this.recent = true;
    	this.nearMe =false;
    };
    activeNearMe(){
    	this.search = false;
    	this.recent = false;
    	this.nearMe=true;
    };
    listLocation(){
    	this._apiService.getLcboLocation()
  		// console.log(this._apiService.getLcboLocation());
  		// this._apiService.getLcboLocation().subscribe(
    //     data => { console.log(data);
    //     },
    //     err => console.error(err),
    //     () => console.log('done')
    //   );
    }
    onNearMeToMap(){
    	if(this.nearMeToMap){
    		/*top*/
    		this.nearMeToMap = false;
    		this.showList = true;
    	}else{
    		/*bottom*/
    		this.nearMeToMap = true;
    		this.showList = false;

    		setTimeout(()=>{
    			this.listLocation();
				let mapDom = document.querySelector(".map");
				let options = {timeout: 10000, enableHighAccuracy: true};
				
				navigator.geolocation.getCurrentPosition(
				
				    (position) => {
				        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				        let styleArray = [
						    {
						      featureType: "all",
						      stylers: [
						       { saturation: -80 }
						      ]
						    },{
						      featureType: "road.arterial",
						      elementType: "geometry",
						      stylers: [
						        { hue: "#00ffee" },
						        { saturation: 50 }
						      ]
						    },{
						      featureType: "poi.business",
						      elementType: "labels",
						      stylers: [
						        { visibility: "off" }
						      ]
						    }
						 ];
				
				        let mapOptions = {
				            center: latLng,
				            styles: styleArray,
				            zoom: 13
				            ,mapTypeId: google.maps.MapTypeId.ROADMAP,
				          	disableDefaultUI: true
				        }

				        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
				        let marker = new google.maps.Marker({
				        	scrollwheel: false,
				            map: this.map,
				            animation: google.maps.Animation.DROP,
				            position: latLng
				         });
				        let content = "<h4>Information!</h4>"; 
				        this.addInfoWindow(marker, content);
				    },
				
				    (error) => {
				        console.log(error);
				    }, options);
				}, 100);
    	}
    }
    addInfoWindow(marker, content){
     
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
     
      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.open(this.map, marker);
      });
     
    }
    back(){
    	this._navController.push(rentIt)
    }
    initAutocomplete() {
    	let latLng;
    	navigator.geolocation.getCurrentPosition(
			(position) => { 
						let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				    	let styleArray = [
										    {
										      featureType: "all",
										      stylers: [
										       { saturation: -80 }
										      ]
										    },{
										      featureType: "road.arterial",
										      elementType: "geometry",
										      stylers: [
										        { hue: "#00ffee" },
										        { saturation: 50 }
										      ]
										    },{
										      featureType: "poi.business",
										      elementType: "labels",
										      stylers: [
										        { visibility: "off" }
										      ]
										    }
										 ];
				        var map = new google.maps.Map(document.getElementById('maps'), {
				          center: latLng,
				          zoom: 13,
				          styles:styleArray,
				          mapTypeId: google.maps.MapTypeId.ROADMAP,
				          disableDefaultUI: true
				        });
				        
				        // Create the search box and link it to the UI element.
				        var input = document.getElementById('pac-input');
				        var searchBox = new google.maps.places.SearchBox(input);
				        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

				        // Bias the SearchBox results towards current map's viewport.
				        map.addListener('bounds_changed', function() {
				          searchBox.setBounds(map.getBounds());
				        });

				        var markers = [];
				        // Listen for the event fired when the user selects a prediction and retrieve
				        // more details for that place.
				        searchBox.addListener('places_changed', function() {
				          var places = searchBox.getPlaces();

				          if (places.length == 0) {
				            return;
				          }

				          // Clear out the old markers.
				          markers.forEach(function(marker) {
				            marker.setMap(null);
				          });
				          markers = [];

				          // For each place, get the icon, name and location.
				          var bounds = new google.maps.LatLngBounds();
				          places.forEach(function(place) {
				            var icon = {
				              url: place.icon,
				              size: new google.maps.Size(71, 71),
				              origin: new google.maps.Point(0, 0),
				              anchor: new google.maps.Point(17, 34),
				              scaledSize: new google.maps.Size(25, 25)
				            };

				            // Create a marker for each place.
				            markers.push(new google.maps.Marker({
				              map: map,
				              icon: icon,
				              title: place.name,
				              position: place.geometry.location
				            }));

				            // let marker = new google.maps.Marker({
				            // 	scrollwheel: false,
				            //     map: this.map,
				            //     animation: google.maps.Animation.DROP,
				            //     position: latLng
				            //  });
				            // let content = "<h4>Information!</h4>"; 
				            // this.addInfoWindow(marker, content);
				            if (place.geometry.viewport) {
				              // Only geocodes have viewport.
				              bounds.union(place.geometry.viewport);
				            } else {
				              bounds.extend(place.geometry.location);
				            }
				          });
				          map.fitBounds(bounds);
				        });
			}
		)
  

    }

}	


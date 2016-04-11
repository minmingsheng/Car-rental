import {Page, NavController,NavParams,Storage,LocalStorage} from 'ionic-angular';
import {Menu} from '../menu/menu';
import {Location} from './location/location';
import {Location2} from './location/location2';
import {Date1} from './date/date1';
import {Date2} from './date/date2';
import {Cars} from '../cars/cars';
import {generalService} from '../../services/general.service';

@Page({
    templateUrl: 'build/pages/rentIt/rentIt.html',
    styles: [`
		.content{
			width: 100%;
			height:100%;
			background:#5f97f7;
			
		}
		.mapr{
			position:absolute;
			top:0;
			width:100%;
			height:22.3em;
			background:#c5c6c5;
		}
		.btns{
			position: absolute;
			bottom:0;
			width:100%;
		}
		.btn,.continue-btn{
			border-radius:0;
			margin:0;
			position:relative;
			height:60px;
		}
		.btn{
			padding-top:0.8em;
		}
		.btn:first-child{
			background: #636170!important;
		}
		.btn:nth-child(2){
			background: #545265!important;
		}
		.btn:nth-child(3){
			background: #413f52!important;
		}
		.btn:nth-child(4){
			background: #2a283d!important;
		}
		.continue-btn{
			color:rgba(225,225,225,0.4);
			height:70px;
			background:#171230!important;
		}
		.continueC{
			color:rgba(68, 197, 200, 1);
			animation: showup 1s 1 ease;
		}
		@keyframes showup{
			from{
				color:rgba(68, 197, 200, 0);
				font-size: 0.4em;
			}
			70%{
				color:rgba(68, 197, 200, 0.4);
				font-size: 1.2em;
			}

		}
		.card{
			height:75%!important;
			width:90%!important;
			border-radius:0;
			background:#a8a5ae;
			margin:auto;
			margin-top:0;
			position:relative;
			overflow: visible!important;
			line-height:2.3em;
			text-align:left;
			padding-left:1.3em;
		}
		.cardbg{
			background:transparent;
		}
		.wordColor{
			color:rgba(250, 250, 250, 0.66)!important;

		}
		.card::before{
			position:absolute !important;
			content:"  ";
			height:100%;
			width:3px;
			left:-0.4em;
			border-left: 0.15em solid #44c5c8;
		}
		span{
			color:rgb(77, 77, 91)!important;
		}
		.b{
			color:#44c5c8;
			display:inline;
		}

  `],
  providers:[generalService]
})
export class rentIt{
	public google;
	public map;
	public days;
    public basicInfo;
    public local;
    public continue;
    constructor(private _navController: NavController, private _generalService: generalService,  private navParams: NavParams) {
    	this.local = new Storage(LocalStorage);
    	if(navParams.get('pickUpLocaton')){
    		this.local.set('pickUpLocaton', navParams.get('pickUpLocaton'));
    	}	
    	if(navParams.get('returnLocaton')){
    		this.local.set('returnLocaton', navParams.get('returnLocaton'));
    	}	
    	if(navParams.get('date1')){
    		this.local.set('pickUpDate', navParams.get('date1'));
    	}	
    	if(navParams.get('date2')){
    		this.local.set('returnDate', navParams.get('date2'));
    	}
    	this.basicInfo={
	    	pickUpLocaton : this.local.get("pickUpLocaton")._result,
	    	returnLocaton : this.local.get("returnLocaton")._result,
	    	pickUpDate : this.local.get("pickUpDate")._result,
	    	returnDate : this.local.get("returnDate")._result,
  	 	}
  	 	if(
  	 		this.basicInfo.pickUpLocaton &&
  	 		this.basicInfo.returnLocaton &&
  	 		this.basicInfo.pickUpDate &&
  	 		this.basicInfo.returnDate
  	 	){
  	 		this.continue  = true;
  	 	}else{
  	 		this.continue  = false;
  	 	}
		setTimeout(()=>{

			let mapDom = document.querySelector(".mapr");
			console.log(mapDom);
			let options = {timeout: 10000, enableHighAccuracy: true};
			navigator.geolocation.getCurrentPosition(
		    (position) => {
		        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		        /*red style*/
		        // let styleArray = [{"featureType":"landscape","stylers":[{"visibility":"simplified"},{"color":"#2b3f57"},{"weight":0.1}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"weight":0.4},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":1.3},{"color":"#FFFFFF"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":3}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":1.1}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f55f77"},{"weight":0.4}]},{},{"featureType":"road.highway","elementType":"labels","stylers":[{"weight":0.8},{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"color":"#ffffff"},{"weight":0.7}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"color":"#6c5b7b"}]},{"featureType":"water","stylers":[{"color":"#f3b191"}]},{"featureType":"transit.line","stylers":[{"visibility":"on"}]}];
		        // let styleArray = [
		        // {
		        // 	"featureType":"road",
		        // 	"elementType":"geometry.fill",
		        // 	"stylers":[{"color":"#011066"}]
		        // },
		        // {
		        // 	"featureType":"road",
		        // 	"elementType":"geometry.stroke",
		        // 	"stylers":[{"visibility":"off"}]
		        // },
		        // {
		        // 	"featureType":"poi",
		        // 	"elementType":"geometry.fill",
		        // 	"stylers":[{"color":"#5580aa"}]
		        // },
		        // {
		        // 	"featureType":"landscape",
		        // 	"elementType":"geometry.fill",
		        // 	"stylers":[{"color":"#405783"}]
		        // },{
		        // 	"elementType":"labels.text",
		        // 	"stylers":[
		        // 		{"color":"#ffffff"},
		        // 		{"weight":0.5}]
		        // },
		        // {
        		// 	"elementType":"labels.icon",
        		// 	"stylers":[{"visibility":"off"}]
		        // },
		        // {
        		// 	"featureType":"water",
        		// 	"elementType":"geometry",
        		// 	"stylers":[{"color":"#27abda"}]
		        // },
		        // {
        		// 	"featureType":"transit",
        		// 	"elementType":"geometry",
        		// 	"stylers":[{"color":"#272664"}]
        		// }] ;
		        			
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
		            zoom: 15,
		            mapTypeId: google.maps.MapTypeId.ROADMAP
		        }

		        this.map = new google.maps.Map(document.querySelector(".mapr"), mapOptions);
		        let marker = new google.maps.Marker({
		        	scrollwheel: false,
		            map: this.map,
		            animation: google.maps.Animation.DROP,
		            position: this.map.getCenter()
		         });
		        let content = "<h4>Information!</h4>"; 
		        this.addInfoWindow(marker, content);
		    },
			
			(error) => {
			        console.log(error);
			    }, options);
			}, 100);
			this.getTime();
    }
    getTime(){
    	// console.log(this.local.get("pickUpDate")._result);
    	// console.log(this.local.get("returnDate")._result);
    	let time1 = this.local.get("pickUpDate")._result+","+new Date().getFullYear()+" 00:00:00";
    	let time2 = this.local.get("returnDate")._result+","+new Date().getFullYear()+" 00:00:00";
    	let timePick = new Date(time1).getTime()
    	let timeReturn = new Date(time2).getTime()
    	if(timeReturn<timePick){
    		alert("Wrong date order");
    		this.continue = false;
    	}else{
    		this.days = (timeReturn-timePick)/1000/3600/24;
    		console.log(this.days);
    	}
    	console.log(timeReturn);
    }
    goToLocation(){
    	this._navController.push(Location)
    }
    goToLocation2(){
    	this._navController.push(Location2)
    }
    goDate1(){
    	this._navController.push(Date1)
    }

    goDate2(){
    	this._navController.push(Date2)
    }
    onContinue(){
    	if(
    		this.basicInfo.pickUpLocaton &&
    		this.basicInfo.returnLocaton &&
    		this.basicInfo.pickUpDate &&
    		this.basicInfo.returnDate && 
    		this.continue
    	){
    		this._navController.push(Cars, {days: this.days})
    	}else{
    		console.log("something need to do ");
    		
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
    	this._navController.pop();
    }

}	
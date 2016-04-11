import {Page, NavController, NavParams} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';
import {chooseResult} from '../chooseResult/chooseResult';

@Page({
    templateUrl: 'build/pages/cars/choose/choose.html',
    styles: [`
		.card{
			width:100;
			height:6.7em;
			border-radius:0;
			margin:0;
			padding:0!important;
			
		}
		.card:first-child{
			-webkit-animation-delay: 0.4s!important;
			animation-delay: 0.4s!important;
		}
		.card:nth-child(2){
			-webkit-animation-delay: 0.5s!important;
			animation-delay: 0.5s!important;
		}
		.card:nth-child(3){
			-webkit-animation-delay: 0.6s!important;
			animation-delay: 0.6s!important;
		}
		.card:nth-child(4){
			-webkit-animation-delay: 0.7s!important;
			animation-delay: 0.7s!important;
		}
		.card:nth-child(5){
			-webkit-animation-delay: 0.8s!important;
			animation-delay: 0.8s!important;
		}
		.title{
			line-height:4em!important;
			padding-left:2em;
			letter-spacing: 0.5px;
			color:rgba(250, 250, 250, 1);
			text-shadow: 1px 1px 5px black;
		}
		@keyframes slideIn{
			from{
				transform: translate(-390px, 0);
			}
		}
    `]
})
export class Choose {  
	public days;
	public imgUrls=[
		{url: "build/img/cars-47.jpg", name: "All Vehicles"},
		{url: "build/img/cars-48.jpg", name: "Small to Full Size"},
		{url: "build/img/cars-49.jpg", name: "Luxury & Convertibles"},
		{url: "build/img/cars-50.jpg", name: "SUVs & Wagons"},
		{url: "build/img/cars-51.jpg", name: "Trucks & Vans"}
	];
	public cars = [
		{
		id:1,
		url: "build/img/cars/1.png",
		name:"Audi A5",
		nick:"Cabiolet",
		price:114.00,
		service: "GPS",
		transmistion: "Automatic"
		},
		{
		id:2,
		url: "build/img/cars/2.png",
		name:"JAOSn A5",
		nick:"asdas",
		price:12.00,
		service: "afdafsa",
		transmistion: "Automatic"
		},
		{
		id:3,
		url: "build/img/cars/3.png",
		name:"BWM A5",
		nick:"eadadt",
		price:331.00,
		service: "GPS",
		transmistion: "asdada"
		},
		{
		id:4,
		url: "build/img/cars/4.png",
		name:"adadsa A5",
		nick:"adasdaa",
		price:54.00,
		service: "dfgd",
		transmistion: "232das"
		},
		{
		id:5,
		url: "build/img/cars/5.png",
		name:"adad1 A5",
		nick:"fsf",
		price:114.00,
		service: "GPdShd",
		transmistion: "adasd"
		},
		{
		id:7,
		url: "build/img/cars/6.png",
		name:"aaaa A5",
		nick:"ss",
		price:114.00,
		service: "GPS",
		transmistion: "ssss"
		},
		{
		id:8,
		url: "build/img/cars/7.png",
		name:"fghjkl A5",
		nick:"jjj",
		price:114.00,
		service: "GPS",
		transmistion: "ffff"
		}
	];
	public myIcon;
    constructor(private _NavController: NavController, private navParams : NavParams) {
    	 this.myIcon = "logo-apple";
    	 if(navParams.get("days")){
    	 	// alert(navParams.get("days"));
    	 	this.days = navParams.get("days");
    	 }
    }

    onFilter() {
    
    }
    back(){
    	this._NavController.pop();
    }
    goToChooseResult(t){
    	alert(t)
    	this._NavController.push(chooseResult, {days : this.days, id: t})
    }
}

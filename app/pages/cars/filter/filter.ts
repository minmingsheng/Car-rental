import {Page, NavController} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';

@Page({
    templateUrl: 'build/pages/cars/filter/filter.html',
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
export class Filter {  
	public imgUrls=[
		{url: "build/img/cars-47.jpg", name: "All Vehicles"},
		{url: "build/img/cars-48.jpg", name: "Small to Full Size"},
		{url: "build/img/cars-49.jpg", name: "Luxury & Convertibles"},
		{url: "build/img/cars-50.jpg", name: "SUVs & Wagons"},
		{url: "build/img/cars-51.jpg", name: "Trucks & Vans"}
	]
	public myIcon;
    constructor(private _NavController: NavController) {
    	 this.myIcon = "logo-apple";
    }

    onFilter() {
    
    }
    back(){
    	this._NavController.pop();
    }
    goToChooseCard(t){
    	console.log(t.name);
    	
    }
}

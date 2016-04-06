import {Page, NavController} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';

@Page({
    templateUrl: 'build/pages/cars/cars.html',
    styles: [`
		.card{
			width:100;
			height:6.7em;
			border-radius:0;
			margin:0;
			padding:0!important;
			
		}
		.title{
			line-height:4em!important;
			padding-left:2em;
			letter-spacing: 0.5px;
			color:rgba(250, 250, 250, 1);
			text-shadow: 1px 1px 5px black;
		}
    `]
})
export class Cars {  
	public imgUrls=[
		{url: "url(img/cars-47.jpg)", name: "All Vehicles"},
		{url: "url(img/cars-48.jpg)", name: "Small to Full Size"},
		{url: "url(img/cars-49.jpg)", name: "Luxury & Convertibles"},
		{url: "url(img/cars-50.jpg)", name: "SUVs & Wagons"},
		{url: "url(img/cars-51.jpg)", name: "Trucks & Vans"}
	]
	public myIcon;
    constructor(private _NavController: NavController) {
    	 this.myIcon = "logo-apple";
    }

    onFilter() {
    
    }
}

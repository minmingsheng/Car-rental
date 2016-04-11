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
		.item-inner{
			border:none;!important;
		}
		@keyframes slideIn{
			from{
				transform: translate(-390px, 0);
			}
		}
		.checkBg{
			background:#44c5c8;
		}
    `]
})
export class Filter { 
	 public Category;
	 public PriceMax;
	 public PriceMin;
	 public Brand;
	 public Transmission;
	 public YearMax;
	 public YearMin;
	 public check = false;
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
    	 
    	 setTimeout(()=>{
    		 let borders = document.querySelectorAll(".item-inner")
    		 console.log(borders);
    		 for (var i = 0; i < borders.length; i++) {
    		 	borders[i].style.border="none";
    		 }
    	 },100)
    }

    onFilter() {
    
    }
    back(){
    	this._NavController.pop();
    }
    goToChooseCard(t){
    	console.log(t.name);
    	
    }
    onPageDidEnter(){
    	let _this  =this;
    	console.log(document.querySelectorAll(".service"));
    	let services = document.querySelectorAll(".service");
    	for (var i = 0; i < services.length; i++) {
    		services[i].addEventListener("touchstart", function(){
    			console.log(this.children[1]);
    			if(_this.check){
    				this.children[1].style.background = ""
    				_this.check = false;
    			}else{
    				this.children[1].style.background = "#44c5c8"
    				_this.check = true;
    			}
    		})
    	}
    	
    }
}

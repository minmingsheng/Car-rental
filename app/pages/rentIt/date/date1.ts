import {Page,NavController} from 'ionic-angular';
import {rentIt} from '../rentIt';
import {generalService} from '../../../services/general.service';
import {Menu} from '../../menu/menu';
import {rentIt} from '../rentIt';

@Page({
    templateUrl: 'build/pages/rentIt/date/date1.html',
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
    	}
    	.tabs{
    		display: flex;
    		width:100%!important;
    		padding:0;
    	}
    	
    	.bg{
    		background:#171230!important;
    		color:#ffffff!important;
    		border-bottom: 2px solid #46c1c6;
    	}
    	.p{
			line-height:0;
    	}
    	.calender-title{
    		width:100%;
    		height:1.8em;
    		margin:0;
    		padding:0;
    		text-align:center;
    	}
    	.months{

    		background:#14102c;
    		line-height:1.8em;
    		color:#45bdc1;
    	}
    	.days{
    		height:1.8em;
    		margin:0;
    		padding:0;
    		text-align:center;
    		background:#97959f;
    		padding-left:1em;
    		padding-right:1.5em;
    	}
    	table{
    		width:100%;
    		margin:0;
    		text-align:center;
    	}
    	tr{
    		margin-top:1em;
    	}
    	.calendar{
    		width:100%;
    		height:38.5em;
    		overflow:scroll;
    	}
		
  `],
   providers: [generalService]
})

export class Date1 {
	public months = ["January","February","March","April","May","June","July","August","September","October","November","December"
	]
	public date1;
	public date2;
	public pick=true;
	public pickB=true;
	public pickPermision=true;
	public returnB=false;
	public returnD=false;
	public returnDPermision=false;

    constructor(private _navController: NavController, private _generalService: generalService) {

    	
    };

    onDiscard(){
    	this._navController.pop(Menu);
    };
    activePick(){
		this.pick = true;
		this.pickPermision=true;
		this.returnD = false;
		this.returnDPermision = false;
    };
    activeReturn(){
		this.returnD = true;
		this.returnDPermision=true;
		this.pick = false;
		this.pickPermision=false;
    }
    onPageDidEnter(){
    	console.log(document.querySelectorAll(".d td"));
    	let tds = document.querySelectorAll(".d td");
    	let that = this;
    	
    		for (var i = 0; i < tds.length; ++i) {
    			tds[i].addEventListener("click", function(){
    				console.log(that.pickPermision);
    				if(that.pick && that.pickPermision){
    					clearColor(that.returnB, that.pickB);
    					let day = this.textContent;
    					let months = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.months').textContent;
    					that.date1 = months + " "+ day;
    					this.style.background= '#171230';
    					this.style.color= '#45c0c4';
    					this.setAttribute("data-id", "pick");
    					that.pickB = true;
    				}
    				if(that.returnD && that.returnDPermision){
    					clearColor(that.returnB, that.pickB);
    					let day = this.textContent;
    					let months = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.months').textContent;
    					that.date2 = months + " "+ day;
    					this.style.background= '#171230';
    					this.style.color= '#45c0c4';
    					this.setAttribute("data-id", "return");
    					that.returnB = true;
    				}
    			})
    		}
    	
    	function clearColor(){
    		for (var i = 0; i < tds.length; ++i) {
    			tds[i].style.background = "transparent";
    			tds[i].style.color = "#040809";
    		}
    	}

    }
    backToRentIt(){
    	this._navController.push(rentIt, {date1: this.date1, date2:this.date2});
    	
    }


}	


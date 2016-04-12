import {Page, NavController,NavParams,Storage,LocalStorage} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';
import {Use} from '../use/use';

@Page({
    templateUrl: 'build/pages/menu/menu.html',
    styles: [`
		.btn{
			border-radius:0;
			margin:0;
			position:relative;
			flex:1;
			color:#41c3c6;
		}
		.toolbar{
			height:700px!important;
		}
		.btns{
			position: absolute;
			height:21.5em;
			bottom:0;
			width:100%;
			display:flex;
			flex-direction:column;
		}
		.img{
			width:100%;
			height:22.3em;
			background:#5f97f7;
		}
		.paybg{
			background:url(build/img/menubg3-63.jpg) !important;
		}
    `]
})
export class Menu {  
    public local;
	public pay = false;
    constructor(private _NavController: NavController, private _navParams : NavParams) {
    	this.local = new Storage(LocalStorage);
    	 this.pay = this.local.get("pay")._result

    	 if(_navParams.get('pay')==true){
    	 	this.pay = true;
    	 	this.local.set('pay', _navParams.get('pay'));
    	 	this.pay = this.local.get("pay")._result
    	 }	
    }

     goToRent() {
        this._NavController.push(rentIt);
    }
    goToUse(){
    	if(!this.pay) return

    	this._NavController.push(Use);
    }
    back(){
    	this._NavController.pop();
    }

}

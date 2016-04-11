import {Page, NavController} from 'ionic-angular';
import {Menu} from '../menu/menu';

@Page({
    templateUrl: 'build/pages/SignIn/signIn.html',
    styles: [`
		.padding{
			width:80%;
			margin: auto;
		}
		.logo{
	        margin:10em auto;
	        margin-bottom:0;
	        height:80px;
	        width:80px;
    	}
		.username{
			width:80%;
			margin:auto;
			letter-spacing: 1px;			
		}
		::-webkit-input-placeholder { /* Chrome/Opera/Safari */
		  color: #44c5c8;
		}
		::-moz-placeholder { /* Firefox 19+ */
		  color: #44c5c8;
		}
		:-ms-input-placeholder { /* IE 10+ */
		  color: #44c5c8;
		}
		:-moz-placeholder { /* Firefox 18- */
		  color: #44c5c8;
		}
		.password{
			width:80%;
			margin:auto;
			letter-spacing: 1px;
			
		}
  `]
})
export class SignIn {
    public foundRepos;
    public username;
    
    constructor(private _navController: NavController) {
    }
    goToMenu(){
    	 this._navController.push(Menu);
    }
}	
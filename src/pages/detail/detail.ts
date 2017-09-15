import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { SharepagePage } from '../sharepage/sharepage';


/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

	coachdetail : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpProvider:HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');

    this.httpProvider.getCoach().subscribe(
    	data =>{
    		console.log(data)

    		this.coachdetail = data;

    		console.log(this.coachdetail);
    	},
    	err => {
    		console.log(err)
    	},
    	()=> {
    		console.log('okay good then')
    	}



    	);
}

    itemTapped(coach){
    this.navCtrl.push(SharepagePage, {coach:coach});
  }

  }

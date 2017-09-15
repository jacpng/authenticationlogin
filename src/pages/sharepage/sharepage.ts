import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharepagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sharepage',
  templateUrl: 'sharepage.html',
})
export class SharepagePage {

	coachShare : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.coachShare = navParams.get('coach');
  	console.log(this.coachShare);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharepagePage');
  }

}

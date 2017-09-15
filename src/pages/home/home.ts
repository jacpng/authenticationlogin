import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DetailPage } from '../detail/detail';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	coaches : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
  /*	this.httpprovider.getCategory().subscribe(
  		data =>{
  		console.log(data)
  		this.coaches = data;
  		console.log(this.coaches)
		},	
		err =>{
			console.log(err);
		},
		()=>{
			console.log('everything is ok!')
		}	
		);
  	 }
  	 itemTapped(){
  	this.navCtrl.push(DetailPage) */
      this.httpprovider.getHired().then((data) => {
          this.coaches = data;
    }, (err) => {
        console.log("not allowed");
    });
 
  }


  

}

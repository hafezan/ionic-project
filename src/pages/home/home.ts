import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter : number = 0;
  //variable = counter
  message : string="";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  increment(){
    this.counter++;
    this.message="";
    console.log(this.counter);
  }

  decrement(){
    if (this.counter==0){
      let toast = this.toastCtrl.create({
        message: 'Number cannot be less than 0',
        duration: 3000
      });
      toast.present();
    }
     else{
        this.counter--;
        console.log(this.counter);
     }
    
  }
  reset(){
    let confirm = this.alertCtrl.create({
      title: 'Reset Counter',
      message: 'Are you sure to reset ?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.counter=0;
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  
    //this.counter=0;
    //this.message="";
    //console.log(this.counter);
  }
}

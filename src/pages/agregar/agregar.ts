import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

    closeModal() {
        this.viewCtrl.dismiss();
    }

}

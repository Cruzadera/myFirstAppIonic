import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs";
import {AngularFireDatabase} from '@angular/fire/database';

/**
 * Generated class for the ClasesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html',
})
export class ClasesPage {
  asignaturas: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.asignaturas = db.list("asignatura").valueChanges();
  }


}

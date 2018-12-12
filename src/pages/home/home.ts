import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {AngularFireDatabase, } from '@angular/fire/database';
import {Observable} from "rxjs";
import {AgregarPage} from "../agregar/agregar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  alumnos: Observable<any[]>;
  alumnosArray = [];
  constructor(public nav:NavController,
              private afDB: AngularFireDatabase, public alertCtrl: AlertController) {
     this.alumnos = this.afDB.list('alumno').valueChanges();
     this.alumnos.subscribe(data => this.alumnosArray = data);

    }
  borrarAlumno(id) {
    let alert = this.confirmacionBorrado();
    alert.present();
    alert.onDidDismiss(data => {
      if(data){
        this.afDB.list("alumno/".concat(String(id))).remove();
      }
    });
  }

  confirmacionBorrado() {
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      message: '¿Seguro que deseas borrar este alumn@ de la base de datos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            alert.dismiss(false);
            return false;
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            alert.dismiss(true);
            return false;
          }
        }
      ]
    });
    return alert;
  }

  irAgregarPage(id) {
    this.nav.push(AgregarPage, {'id':id});
  }
}


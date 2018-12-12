import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {AngularFireDatabase} from '@angular/fire/database';
import {Alumno} from "../../interfaces/Alumno";

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
  myForm: FormGroup;
  alumnos: Observable<any[]>;
  nombre: any;
  apellido: any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private afDB: AngularFireDatabase) {
    this.myForm = this.crearFormulario();
    this.alumnos = afDB.list<Alumno>('alumno').valueChanges();
    this.id = navParams.get('id');
  }

    cerrarPagina() {
      this.navCtrl.pop();
    }

  private crearFormulario() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  guardar(nom, ape) {
    this.afDB.list('alumno').set(String(this.id), {nombre: this.nombre, apellido: this.apellido});
    this.cerrarPagina();
  }
}

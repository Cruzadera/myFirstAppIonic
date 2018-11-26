import { Component } from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';

import {Alumno} from "../../interfaces/Alumno";
import {ALUMNOS} from "../../data/alumno.data";
import { ToastController } from 'ionic-angular';
import {AgregarPage} from "../agregar/agregar";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  alumnos: ALUMNOS;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private toastCtrl: ToastController, public modalCtrl:ModalController) {
    this.alumnos = new ALUMNOS();
  }

    borrarAlumno(index:number) {
        this.alumnos.alumnos.splice(index, 1);

    }

    ngOnChanges(){
      this.alumnos.alumnos.slice(0, this.alumnos.alumnos.length);
    }

    presentPrompt() {
        let alert = this.alertCtrl.create({
            title: 'Registro',
            inputs: [
                {
                    type:'input',
                    name: 'nombre',
                    placeholder: 'Nombre'
                },
                {
                    type:'input',
                    name: 'apellido',
                    placeholder: 'Apellido'
                },
                {
                    type:'input',
                    name: 'curso',
                    placeholder: 'Curso'
                },
            ],
            buttons : [
                {
                    text: "Cancelar",
                    role: "cancel",
                    handler: data => {
                        console.log("cancel clicked");
                    }
                },
                {
                    text: "Siguiente",
                    handler: data => {
                        if(isValid(data.nombre, data.apellido)){
                            this.seleccionarGenero();
                            let nuevo: Alumno = new Alumno(data.nombre, data.apellido, data.curso);
                            this.alumnos.alumnos.push(nuevo);
                            return true;
                        }else{
                            this.presentToast();
                            return false;
                        }
                    }
                }]
        });
        alert.present();
    }


    seleccionarGenero() {
        let alert = this.alertCtrl.create({
            title: 'Selecciona tu género',
            message: '¿Eres hombre o mujer?',
            buttons: [
                {
                    text: 'Hombre',
                    handler: () => {
                       this.alumnos.alumnos[this.alumnos.alumnos.length-1].setMasc();
                    }
                },
                {
                    text: 'Mujer',
                    handler: () => {
                        this.alumnos.alumnos[this.alumnos.alumnos.length-1].setFem();
                    }
                }
            ]
        });
        alert.present();
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Los campos no pueden estar vacíos',
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }

    abrirRegistro() {
        let myModal = this.modalCtrl.create(AgregarPage);
        myModal.present();
    }
}

function isValid(nombre: string, apellido:string) {
    if(nombre != "" && apellido != ""){
        return true;
    }else{
        return false;
    }
}


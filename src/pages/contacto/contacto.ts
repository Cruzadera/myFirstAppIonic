import { Component } from '@angular/core';
import {AlertController, IonicPage, ToastController} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  asunto: string;

  constructor(private emailComposer: EmailComposer, private toastCtrl: ToastController, private alertCtrl: AlertController) {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        this.enviarEmail();
      }
    }).catch(error=>{
      let toast = this.toastCtrl.create({
        message: 'Su dispositivo no dispone de una aplicación de correo electrónico',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
    });
  }


  enviarEmail() {
    let email = {
      to: '',
      cc: ' iessaladillo@juntadeandalucia.es',
      attachments: [

      ],
      subject: 'Ponerse en contacto',
      body: '',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  mostrarAlert() {
      let alert = this.alertCtrl.create({
        title: 'Error reportado satisfactoriamente',
        subTitle: 'Su error ha sido enviado a nuestro departamento de soporte. Muchas gracias.',
        buttons: ['Aceptar']
      });
      alert.present()
  }
}

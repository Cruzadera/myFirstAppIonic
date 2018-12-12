import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AgregarPage} from "../pages/agregar/agregar";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {ClasesPage} from "../pages/clases/clases";
import {TabsPage} from "../pages/tabs/tabs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContactoPage} from "../pages/contacto/contacto";
import {EmailComposer} from "@ionic-native/email-composer";
import { OpcionesProvider } from '../providers/opciones/opciones';
import { NavegadorProvider } from '../providers/navegador/navegador';
import {PipesModule} from "../pipes/pipes.module";

export const firebaseConfig = {
  apiKey: "AIzaSyA-rM5j8SFULLarBCixUfuEdBpfjOHV704",
  authDomain: "alumnos-96956.firebaseapp.com",
  databaseURL: "https://alumnos-96956.firebaseio.com",
  projectId: "alumnos-96956",
  storageBucket: "alumnos-96956.appspot.com",
  messagingSenderId: "1031184955043"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      AgregarPage,
      ClasesPage,
      TabsPage,
      ContactoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      AgregarPage,
      ClasesPage,
      TabsPage,
      ContactoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    EmailComposer,
    OpcionesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavegadorProvider,
  ]
})
export class AppModule {}

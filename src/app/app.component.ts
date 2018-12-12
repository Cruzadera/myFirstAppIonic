import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import{OpcionesProvider} from "../providers/opciones/opciones";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;
    temaSeleccionado: String;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private opciones: OpcionesProvider) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
      this.opciones.getActiveTheme().subscribe(val => this.temaSeleccionado = val);
    }

  toggleAppTheme() {
    if (this.temaSeleccionado === 'dark-theme') {
      this.opciones.setActiveTheme('light-theme');
    } else {
      this.opciones.setActiveTheme('dark-theme');
    }
  }
}


import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {AgregarPage} from "../pages/agregar/agregar";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    agregar = AgregarPage;
    principal = HomePage;
    rootPage: any = HomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    irAgregarAlumno(pagina: any) {
        this.rootPage = pagina;
    }

    irPrincipal(pagina:any) {

        this.rootPage = pagina;
    }

}


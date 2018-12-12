
import { Injectable } from '@angular/core';
import {Tipo} from "../../data/tipo.model";

@Injectable()
export class NavegadorProvider {
  private navegador: Tipo[] = [];

  constructor() {

  }

  lanzarNavegador(texto:string){
    let data = new Tipo(texto);

    this.navegador.unshift(data);
  }

}

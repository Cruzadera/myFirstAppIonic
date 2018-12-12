export class Tipo{
  info:string;
  tipo:string;

  constructor(tipo: string) {
    this.info = "no definido";
    this.tipo = tipo;

    if(tipo.startsWith("http")){
        this.tipo = "http";
    }
  }
}

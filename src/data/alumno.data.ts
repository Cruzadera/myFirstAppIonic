import {Alumno} from "../interfaces/Alumno";

export class ALUMNOS{
    alumnos:Alumno[];


    constructor() {
        this.ngOnInit();
    }

    ngOnInit() { //Método que inicializa los tres primeros avatares
        this.alumnos = [new Alumno("Mariana", "Jimenez", 3),
            new Alumno("Juanito", "Pérez", 1),
            new Alumno("Federico", "Gil", 2)];
        this.alumnos[0].setFem();
        this.alumnos[1].setMasc();
        this.alumnos[2].setMasc();
    }

    add(alumno:Alumno){
        this.alumnos.push(alumno);
    }
}


export class Alumno {
    public id: number;
    private _nombre: string;
    private _apellido: string;
    private _curso: number;
    private _imagen: string;
    private _genero:boolean;

    constructor(nombre: string, apellido: string, curso: number) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._curso = curso;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(value: string) {
        this._apellido = value;
    }

    get curso(): number {
        return this._curso;
    }

    set curso(value: number) {
        this._curso = value;
    }

    get imagen(): string {
        return this._imagen;
    }

    set imagen(value: string) {
        this._imagen = value;
    }

    get genero(): boolean {
        return this._genero;
    }

    set genero(value: boolean) {
        this._genero = value;
    }

    setFem(){
        this._imagen = "assets/png/girl-" + this.id.toString() + ".png";
    }

    setMasc(){
        this._imagen = "assets/png/boy-" + this.id.toString() + ".png";
    }
}


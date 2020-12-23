
export class Electrovalvula{
    private _nombre: string; 
    private _apertura: boolean;
    private _electrovalvulaId: number;

    constructor(nombre,apertura, electrovalvulaId){
        this._nombre=nombre;
        this._apertura=apertura;
        this._electrovalvulaId=electrovalvulaId;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    public get apertura(): boolean {
        return this._apertura;
    }
    public set apertura(state: boolean) {
        this._apertura = state;
    }
    
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value: number) {
        this._electrovalvulaId = value;
    }
}

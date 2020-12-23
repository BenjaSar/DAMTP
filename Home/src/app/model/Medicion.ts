export class Medicion{
    private _medicionId: number;
    private _fecha: Date = new Date("1900-01-01"); 
    private _valor: number;
    private _dispositivoId: number;

    constructor(medicion,fecha,valor,dispositivoId){
        this._medicionId=medicion;
        this.fecha=fecha;
        this._valor=valor;
        this._dispositivoId=dispositivoId;
    }

    public get medicionId(): number {
        return this._medicionId;
    }
    public set medicionId(value: number) {
        this._medicionId = value;
    }

    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get valor(): number {
        return this._valor;
    }
    public set valor(valor: number) {
        this._valor = valor;
    }
    
    public get dispositivoId(): number {
        return this._dispositivoId;
    }
    public set dispositivoId(dId: number) {
        this._dispositivoId = dId;
    }
}

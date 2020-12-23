
  export class Dispositivos{

    private _dispositivoId:number;
    private _nombre: string;
    private _ubicacion: string;
    private _electrovalvulaId: number;

    public constructor(dispostivoId:number, nombre:string, ubicacion:string, electrovalvulaId:number){
        this._dispositivoId = dispostivoId;
        this._nombre = nombre;
        this._ubicacion = ubicacion;
        this._electrovalvulaId= electrovalvulaId
    }

    public get dispositivoId():number{
    return this._dispositivoId;
        }

    public set dispositivoId(dId:number){
        if(dId <=0 || dId>=1000){
            throw new Error('The device number is invalid');
        }
        this._dispositivoId = dId;
    }    

    public get nombre():string{
        return this._nombre;
        }

    
    public set nombre(name:string){
        this._nombre = name;
        }      

    public get ubicacion():string{
        return this._ubicacion;
        }
    
    public set ubicacion(location:string){
        this._ubicacion = location;
        }      

    public get electrovalvulaId(): number{
            return this._electrovalvulaId;
        }
            
    public set electrovalvulaId(eValvulaId:number){
        this._electrovalvulaId = eValvulaId;
         } 

}



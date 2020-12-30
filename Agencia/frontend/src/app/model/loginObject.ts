export class LoginObject {

    public nombre: string;
    public password: string;
  
    constructor( object: any){
      this.nombre = (object.username) ? object.username : null;
      this.password = (object.password) ? object.password : null;
    }
}
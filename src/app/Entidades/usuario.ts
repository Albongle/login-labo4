import { stringify } from "@angular/compiler/src/util";

export class Usuario {
    public usuario:string;
    public password:string;
    private static listaUsuarios:Array<any> = new Array({usuario:"admin",password:"12345"},{usuario:"user",password:"12345"});

    constructor(){
        this.usuario="";
        this.password="";
    }
    public SingIn() : boolean {
        
        if(this.usuario!="" && this.password!=""){
            const userAux = Usuario.listaUsuarios.find(user=> user.usuario == this.usuario && user.password == this.password );
           if(userAux){
            console.log({status:"ok", message:`Bienvenido ${this.usuario}`});
            return true;    
           }
        }
        console.log({error:401, message:`Accedo denegado`});
        return false;
    }
}

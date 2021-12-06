import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  usuario = {
    email: "",
    password: "",
    
  }
  
  public email: string;
  public password: string;
  listaDeUsuarios = [];
  pass: any;
  dato: any;

  constructor(private database:DatabaseService, private router:Router) {}

    ngOnInit(){
      this.database.getAll('usuario').then(firebaseResponse =>{
        firebaseResponse.subscribe(listaDeUsuariosRef => {

          this.listaDeUsuarios = listaDeUsuariosRef.map(usuarioRef =>{
            let usuario=usuarioRef.payload.doc.data();
            usuario['id']=usuarioRef.payload.doc.id;
            return usuario;
          })
          console.log(this.listaDeUsuarios);
        })
      })
      }

      altausuario(){
      this.database.create('usuario',this.usuario).then(res=>{
      console.log(res);
      }).catch(err => {
      console.log("error en alta: ", err);
      });
  }
 eliminar(id){
  this.database.delete('usuario', id).then(res =>{
    alert("se elimino con exito")
  }).catch(err =>{
    console.log("error al eliminar",err);
  });
 }
 loginEmail() {
  console.log(this.email);
  this.database.loginUserEmail(this.email, this.password);
}
recuperar(){
  //declaro elemento navigationExtras
  let nav: NavigationExtras={
    state: { dato: this.dato, pass: this.pass }
  };

  this.router.navigate(['/recuperar'], nav )
}


}


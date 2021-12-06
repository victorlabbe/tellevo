import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFireObject } from '@angular/fire/compat/database';
import { ToastController } from '@ionic/angular';
import { ref, update } from 'firebase/database';
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(

      private firestore2: AngularFirestore,
      private Auth: AngularFireAuth,
      private router: Router,
      
      
   ) { }

   DBcon = this.firestore2.collection('conductores');
   DBvi = this.firestore2.collection('viajes');
   DBvCreado = this.firestore2.collection('viajeCreado'); 
   DBsede = this.firestore2.collection('sede');
   DBgen = this.firestore2.collection('generado')
   

   loginUserEmail(email: string, password: string) {
      this.Auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user.user.email);
          this.router.navigate(['/main']);
        })
        .catch((err) => console.log(err.message));
    }
  async create(collection, dato){
     try {
       return await this.firestore2.collection(collection).add(dato);
     }catch(error){
       console.log("error en: create", error)             
     }     
   
  }

  async getAll(colllection){
     try {
        return await this.firestore2.collection(colllection).snapshotChanges();
     } catch(error){
        console.log("error en: getAll ",error)      
     }
    
  }
  async getByID(colllection,id){
    try {
       return await this.firestore2.collection(colllection).doc(id).get();
    } catch(error){
       console.log("error en: gerById ",error)      
    }
   
 }
 async delete(colllection, id){
  try {
     return await this.firestore2.collection(colllection).doc(id).delete();
  } catch(error){
     console.log("error en: delete ",error)      
  }
 
}
async update(colllection, id, dato){
  try {
     return await this.firestore2.collection(colllection).doc(id).set(dato);
  } catch(error){
     console.log("error en: update ",error)      
  }
 
}
getAuth() {
  return this.Auth.authState;
}

logout(): Promise<any> {
   return this.Auth.signOut();
 }
 
 llamarConductore() {
   return this.DBcon.snapshotChanges().pipe(
     map((con) =>
       con.map((conductor) => {
         const conductores = conductor.payload.doc.data();
         return conductores;
       })
     )
   );
 }
 llamarSede() {
  return this.DBsede.snapshotChanges().pipe(
    map((ori) =>
      ori.map((creado) => {
        const sede = creado.payload.doc.data();
        return sede;
      })
    )
  );
}
llamarCreado(){
  return this.DBvCreado.snapshotChanges().pipe(
    map((cre)=>
    cre.map((creados)=>{
      const viajeCreado = creados.payload.doc.data();
      return viajeCreado;
    })
    )
  );
}

llamarGenerado() {
  return this.DBgen.snapshotChanges().pipe(
    map((gen) =>
      gen.map((generados) => {
        const generado = generados.payload.doc.data();
        return generado;
      })
    )
  );
}


 llamarViajes() {
   return this.DBvi.snapshotChanges().pipe(
     map((via) =>
       via.map((viaje) => {
         const viajes = viaje.payload.doc.data();
         return viajes;
       })
     )
   );
 }
 async getViaje (collection){
  try{
    return await this.firestore2.collection(collection).snapshotChanges();
   } catch (error) {
   console.log('error en', error);
   }
}

crearViaje(
  nombre: any, 
  rut: any, 
  edad: any, 
  vehiculo: any, 
  patente: any, 
  licencia: any, 
  direccion: any, 
  latitutud: any, 
  longitud:any, 
  nombreSede: any, 
  latSede: any,
  longSede: any,
  km: any,
  tiempo: any,
  costo: any
  ){
  this.DBvCreado.add({
  nombre: nombre,
  rut: rut, 
  edad: edad, 
  vehiculo: vehiculo, 
  patente: patente, 
  licencia: licencia, 
  direccion: direccion, 
  latitutud: latitutud, 
  longitud: longitud, 
  nombreSede: nombreSede, 
  latSede: latSede,
  longSede: longSede,
  km: km,
  tiempo: tiempo,
  costo: costo
  }).then(() => {
      console.log('viaje creado');
  }).catch((error) => 
  console.log(error));
  
}

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore, private Auth: AngularFireAuth,private router: Router
   ) { }

   


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
       return await this.firestore.collection(collection).add(dato);
     }catch(error){
       console.log("error en: create", error)             
     }     
   
  }

  async getAll(colllection){
     try {
        return await this.firestore.collection(colllection).snapshotChanges();
     } catch(error){
        console.log("error en: getAll ",error)      
     }
    
  }
  async getByID(colllection,id){
    try {
       return await this.firestore.collection(colllection).doc(id).get();
    } catch(error){
       console.log("error en: gerById ",error)      
    }
   
 }
 async delete(colllection, id){
  try {
     return await this.firestore.collection(colllection).doc(id).delete();
  } catch(error){
     console.log("error en: delete ",error)      
  }
 
}
async update(colllection, id, dato){
  try {
     return await this.firestore.collection(colllection).doc(id).set(dato);
  } catch(error){
     console.log("error en: update ",error)      
  }
 
}

logout(): Promise<any> {
   return this.Auth.signOut();
 }

}

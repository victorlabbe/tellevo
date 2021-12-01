import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { APIClientService } from 'src/app/services/apiclient.service'


@Component({
  selector: 'app-componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.scss'],
})
export class ComponenteTresComponent implements OnInit {

  user:any;
   users:any = [];
   posts:any;
   post:any={
    id:null, 
    nombre:"",
    rut:"",
    licencia:"",
    ruta: "",
    userId:""
   };

  constructor(
    private router:Router,
    private api: APIClientService
    ) { }
    
  ngOnInit() {
    this.getUsuarios();
  }
  ionViewWillEnter(){
    this.getUsuarios();
   }
   getUsuarios() {
    this.api.getUsuarios().subscribe((data) => {
      console.log(data);
      this.users = data;
    });

    
  }
  getMostrar(){}

}

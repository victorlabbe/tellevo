import { Component, OnInit } from '@angular/core';
import { APIClientService } from 'src/app/services/apiclient.service'
@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {
  user:any;
  users:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  posts:any;
  constructor(private router, Router, private api: APIClientService) { }

  ngOnInit() {}

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

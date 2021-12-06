import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIClientService } from 'src/app/services/apiclient.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-creado',
  templateUrl: './creado.page.html',
  styleUrls: ['./creado.page.scss'],
})
export class CreadoPage implements OnInit {

  constructor( private router:Router,
    private api: APIClientService,
    private database: DatabaseService) { }

  ngOnInit() {
    this.llamarCreado();

  }
  generados = [];

  llamarCreado(){
    this.database.llamarCreado().subscribe(cre=>{
      console.log(this.generados);
      this.generados = cre;
    });
  }
irMain(){
  this.router.navigate(['/main'] )
}


}

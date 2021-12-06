import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(
    private router: Router,
    private auth: DatabaseService
    ) {
      this.router.navigate(['conductor'])
     }

  ngOnInit() {
    this.llamarCreado();
  }
  generados = [];

  llamarCreado(){
    this.auth.llamarCreado().subscribe(cre=>{
      console.log(this.generados);
      this.generados = cre;
    });
  }
  segmentChanged(event: any){
    console.log(event)
    let direccion=event.detail.value
    this.router.navigate(['conductor/'+direccion])
  }

  volver(){
    this.router.navigate(['/main']);
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
  irTerminado(){
    this.router.navigate(['/terminado']);
  }
}

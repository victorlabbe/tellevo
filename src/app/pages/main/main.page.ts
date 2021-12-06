import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  usuarios: string;
  

  constructor(
    private router: Router,
    private auth: DatabaseService
    ) { 

    this.router.navigate(['main/dos'])
  }

  ngOnInit() {
    this.getUsuario();
  }
  getUsuario() {
    this.auth.getAuth().subscribe((usuario) => {
      this.usuarios = usuario.email;
    });
  }

  

  segmentChanged(event: any){
    console.log(event)
    let direccion=event.detail.value
    this.router.navigate(['main/'+direccion])
  }

  volver(){
    this.router.navigate(['/home'] )
  }
  logOut() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
  modoConductor(){
    this.router.navigate(['/conductor'] )
  }

  
}

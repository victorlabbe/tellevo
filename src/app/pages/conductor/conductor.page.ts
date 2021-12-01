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
    ) { }

  ngOnInit() {
  }
  volver(){
    this.router.navigate(['/main']);
  }

  logOut() {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}

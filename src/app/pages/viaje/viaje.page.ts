import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  generados = [];

  constructor(private router: Router, private auth: DatabaseService) {}

  ngOnInit() {
    this.llamarCreado();
  }

  llamarCreado() {
    this.auth.llamarCreado().subscribe((cre) => {
      console.log(this.generados);
      this.generados = cre;
    });
  }
  irTerminado() {
    this.router.navigate(['/terminado']);
  }
}

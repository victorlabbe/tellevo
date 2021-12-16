import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-componente-cuatro',
  templateUrl: './componente-cuatro.component.html',
  styleUrls: ['./componente-cuatro.component.scss'],
})
export class ComponenteCuatroComponent implements OnInit {
  generados = [];
  generado: any;
  tiempo: any;
  origen: any;
  destino: any;
  distancia: any;
  costo: any;

  constructor(private router: Router, private database: DatabaseService) {}

  ngOnInit() {
    this.llamarCreado();
    this.getCreado();
  }

  llamarCreado() {
    this.database.llamarCreado().subscribe((viCredo) => {
      this.generados = viCredo;
      console.log(this.generados);
    });
  }
  getCreado() {
    console.log(this.generados);
    this.tiempo = this.generado.tiempo;
    this.origen = this.generado.origen;
    this.destino = this.generado.destino;
    this.distancia = this.generado.distancia;
    this.costo = this.generado.costo;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.scss'],
})
export class ComponenteTresComponent implements OnInit {
  conductores = [];
  conductor: any;
  user: any;
  users: any = [];
  posts: any;
  post: any = {
    id: null,
    nombre: '',
    rut: '',
    licencia: '',
    ruta: '',
    userId: '',
  };
  nombre: any;
  rut: any;
  edad: any;
  vehiculo: any;
  patente: any;
  licencia: any;

  constructor(private router: Router, private database: DatabaseService) {}

  ngOnInit() {
    this.llamarConductor();
  }

  llamarConductor() {
    this.database.llamarConductore().subscribe((con) => {
      console.log(this.conductores);
      this.conductores = con;
    });
  }
  ionViewWillEnter() {}
  getMostrar() {}

  getConductor() {
    console.log(this.conductor);
    this.nombre = this.conductor.nombre;
    this.rut = this.conductor.rut;
    this.edad = this.conductor.edad;
    this.vehiculo = this.conductor.vehiculo;
    this.patente = this.conductor.patente;
    this.licencia = this.conductor.licencia;
  }
}

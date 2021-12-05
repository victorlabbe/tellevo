import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIClientService } from 'src/app/services/apiclient.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  generados = [];
  conductores = [];
  viajeCrear = [];
  sede =[];
  generado: any;
  sedes: any;
  conductor:any;  
  viajes =[];
  viaje: any;
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
  nombre: any;
  rut: any;
  edad: any;
  vehiculo: any;
  patente: any;
  licencia: any;
  latitud: any;
  longitud: any;
  direccion: any;
  nombreSede: any;
  latSede: any;
  longSede: any;
  km: number;
  tiempo: string;
  costo = 200;

  constructor(
    private router:Router,
    private api: APIClientService,
    private database: DatabaseService
  ) { }

  ngOnInit() {
    this.getUsuarios();
    this.llamarConductor();
    this.llamarViajes();
    this.llamarSede();
    

  }
  llamarViajes(){
    this.database.llamarViajes().subscribe(via=>{
      console.log(this.viajes);
      this.viajes = via;

    })
  }
  llamarSede(){
    this.database.llamarSede().subscribe(ori=>{
      console.log(this.sede);
      this.sede = ori;

    })
  }


  llamarConductor() {
    this.database.llamarConductore().subscribe(con=>{
      console.log(this.conductores);
      this.conductores = con;
    });
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

  getConductor() {
    console.log(this.conductor);
    this.nombre = this.conductor.nombre;
    this.rut = this.conductor.rut;
    this.edad = this.conductor.edad;
    this.vehiculo = this.conductor.vehiculo;
    this.patente = this.conductor.patente;
    this.licencia = this.conductor.licencia;
  }
  getViajes() {
    console.log(this.viaje);
    this.direccion = this.viaje.nombre;
    this.latitud = this.viaje.latitud;
    this.longitud = this.viaje.longitud;   
    }
    getSede(){
      console.log(this.sede);
      this.nombreSede = this.sedes.nombreSede;
      this.latSede = this.sedes.latitud;
      this.longSede = this.sedes.longitud;
    }
  
    getCrearViaje(){
      
      this.database.getViaje('viajeCreado').then(vC => {
      vC.subscribe(vCr => {
      this.viajeCrear = vCr.map(vCreado => {
          const viCreado =vCreado.payload.doc.data();
          viCreado['id']= vCreado.payload.doc.id;
          return viCreado;
      });
      });
      });
  }
  
  crearViaje(){
    
    this.calcularDistanciaTiempo();
    this.costoViaje();
    this.database.crearViaje(
        this.nombre,
        this.rut, 
        this.edad, 
        this.vehiculo, 
        this.patente, 
        this.licencia, 
        this.direccion, 
        this.latitud, 
        this.longitud, 
        this.nombreSede, 
        this.latSede,
        this.longSede,
        this.km,
        this.tiempo
    )
    

    this.router.navigate(['creado']);
}
eliminar(id) {
    this.database
      .delete('viajesCreado', id)
      .then((res) => {
        console.log('eliminado con exito');
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

calculateDistance(lon1, lon2, lat1, lat2) {
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a =0.5 - c((lat1 - lat2) * p) / 2 + (c(lat2 * p) * c(lat1 * p) * (1 - c((lon1 - lon2) * p))) / 2;
    let dis = 12742 * Math.asin(Math.sqrt(a));
    return Math.round(dis);
  }

 costoViaje(){
    this.costo = this.costo*this.km;
    console.log(this.costo);
   
 }
 

 calcularDistanciaTiempo() {
  
      this.km = this.calculateDistance(
      this.longSede,
      this.longitud,
      this.latSede,
      this.latitud
    );
    const minutos = (this.km / 50) * 100;
    this.tiempo = Math.round(minutos) + ' minutos aproximados';
    console.log(this.tiempo);
    console.log(this.km +'km');
  }
  
  



}

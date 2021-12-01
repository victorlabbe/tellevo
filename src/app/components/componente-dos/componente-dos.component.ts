import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss'],
})
export class ComponenteDosComponent implements OnInit {
  dato: any;
  pass: any;

  constructor(
     private map: MapService,
     public alert: AlertComponent,
     private router: Router
     
    ) { }

  ngOnInit() {
    this.map.initMap(43.738419,7.424616, 'map');
    
    }
    getCurrentPosition(){
      this.map.getCurrentPosition().then(position =>{
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.map.initMap(lat, lng, 'map');
        this.alert.newAlertlocation(lat, lng);
      });
    }
  
    crearViaje(){     
    
      this.router.navigate(['/viaje'])
    }
    misViajes(){     
    
      this.router.navigate(['/mis-viajes'])
    }
}

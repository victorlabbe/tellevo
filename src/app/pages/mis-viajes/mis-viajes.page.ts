import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage implements OnInit {
  locations = [];
  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.Keys().then(locations =>{
      this.locations = locations;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      window.location.reload();
      event.target.complete();
    }, 500);
  }

  deleteLocation(id){
    this.storage.removeLocation(id);
  }
  volver(){
    this.router.navigate(['/main']);
  }
  
}

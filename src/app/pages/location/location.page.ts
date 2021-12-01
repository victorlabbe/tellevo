import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  location= [];
  constructor(
    private router: ActivatedRoute,
    private storage: StorageService,
    private map: MapService
  ) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.storage.getLocation(id).then(location =>{
      console.log(location);
      this.location = location; 
      this.map.initMap(location.lat, location.lng, 'map')
    });
  }

}

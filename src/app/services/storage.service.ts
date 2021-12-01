import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Key } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  locations =[];
  constructor() { }

  async saveLocation(name: string, lat: number, lng: number) {
    const id = new Date().getTime();
    await Storage.set({
      key: `location/${id}`,
      value: JSON.stringify({
        id, name, lat, lng
      })
    });
    }  
    
    async Keys(){
      const keys = await Storage.keys();
      return this.getLocations(keys.keys);
    }
    async getLocations(keys){
      for (const key of keys){
        const itemsLS = await Storage.get({key});
        const item = JSON.parse(itemsLS.value);
        this.locations.push(item);
      }
      return this.locations;
    }
    async removeLocation(id){
      await Storage.remove({key: `location/${id}`});
      window.location.reload();
    }
    async getLocation(key){
      const itemsLS = await Storage.get({ key: `location/${key}`});
      const item = JSON.parse(itemsLS.value);
      return item;
    }
}

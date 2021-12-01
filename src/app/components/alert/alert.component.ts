import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  constructor(
    public alertController: AlertController,
    private storage: StorageService
  ) { }

  ngOnInit() {}

  async newAlertlocation(lat, lng,) {
    const alert = await this.alertController.create({
      
      header: 'New Location',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre del lugar'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (inputs) => {
            console.log('Confirm Ok');
            this.storage.saveLocation(inputs.name, lat, lng);
            
          }
        }
      ]
    });

    await alert.present();
  }

}

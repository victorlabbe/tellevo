import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  dato: any;
  newPass: any;

  constructor(
    private activateroute: ActivatedRoute, 
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  siguiente(){
    let nav: NavigationExtras={
      state: { dato: this.dato, pass: this.newPass }
    };

    this.router.navigate(['/home'])
  }
  async presentToast1(){
    const toast = await this.toastController.create({
      
      message: 'Se mando un Email a su cuenta.',
      duration: 3000,
      position: "bottom"
    });
    toast.present()

  }

}

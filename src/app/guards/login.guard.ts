import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: DatabaseService,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public Auth: AngularFireAuth,
    public nacCtrl: NavController
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.Auth.user.subscribe((user) => {
        if (user) {
          resolve(true);
        } else {
          this.nacCtrl.navigateRoot(['home']);
          resolve(false);
        }
      });
    });
  }
  
}

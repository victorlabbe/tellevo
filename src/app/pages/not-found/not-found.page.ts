import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
// Declarar un elemento que esta en el DOM yq ue quiero animar
@ViewChild('animar', { read: ElementRef, static: true }) animar: ElementRef;
  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

}

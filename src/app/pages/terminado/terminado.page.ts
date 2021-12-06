import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminado',
  templateUrl: './terminado.page.html',
  styleUrls: ['./terminado.page.scss'],
})
export class TerminadoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  irMain(){
    this.router.navigate(['/main'] )
  }
}

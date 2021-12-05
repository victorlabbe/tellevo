import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creado',
  templateUrl: './creado.page.html',
  styleUrls: ['./creado.page.scss'],
})
export class CreadoPage implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }
  generados = [];
}

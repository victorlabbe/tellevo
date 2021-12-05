import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-cuatro',
  templateUrl: './componente-cuatro.component.html',
  styleUrls: ['./componente-cuatro.component.scss'],
})
export class ComponenteCuatroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

}

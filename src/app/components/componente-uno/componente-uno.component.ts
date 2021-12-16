import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss'],
})
export class ComponenteUnoComponent implements OnInit {
  user: any;
  users: any;
  post: any = {
    id: null,
    title: '',
    body: '',
    userId: null,
  };
  posts: any;
  constructor() {}

  ngOnInit() {}

  ionViewWillEnter() {}
  getMostrar() {}
}

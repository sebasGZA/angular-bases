import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // agregar(event: Event) {
  //   event.preventDefault()
  //   console.log('Heyy!!!')
  // }
  agregar() {
    console.log('Esta es una prueba!!!')
  }
}

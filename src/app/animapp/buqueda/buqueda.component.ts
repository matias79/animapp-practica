import { Component, OnInit } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-buqueda',
  templateUrl: './buqueda.component.html',
  styleUrls: ['./buqueda.component.css']
})
export class BuquedaComponent implements OnInit {
  buscar: string = '';
  constructor(private animappService: AnimappService) { }

  ngOnInit(): void {
  }

  busqueda(){
    //console.log("informacion", this.buscar);
    this.animappService.buscarGifs(this.buscar);
    this.buscar = '';
  }

}

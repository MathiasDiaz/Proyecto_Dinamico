import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-personalidad',
  templateUrl: './personalidad.component.html',
  styleUrls: ['./personalidad.component.css']
})
export class PersonalidadComponent implements OnInit {
  perso:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data=>{
      this.perso=data.personalidades
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {
cancion:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
  this.datos.getDatos().subscribe(data=>{
    this.cancion=data.canciones
  })
  }
}

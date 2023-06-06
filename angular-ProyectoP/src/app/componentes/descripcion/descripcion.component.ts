import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
descripcion:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
this.datos.getDatos().subscribe(data=>{
this.descripcion=data.descripciones
})
}
}

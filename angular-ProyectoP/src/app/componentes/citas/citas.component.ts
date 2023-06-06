import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
cita:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data=>{
      this.cita=data.citas
    })
  }

}

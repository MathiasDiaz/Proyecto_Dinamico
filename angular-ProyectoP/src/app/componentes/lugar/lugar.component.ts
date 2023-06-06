import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {
lugar:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data=>{
    this.lugar=data.lugares
    })
    }
    }
    

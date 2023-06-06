import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-persos',
  templateUrl: './persos.component.html',
  styleUrls: ['./persos.component.css']
})
export class PersosComponent implements OnInit {
perso:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
  this.datos.getDatos().subscribe(data=>{
    this.perso=data.persos
  })
  }

}

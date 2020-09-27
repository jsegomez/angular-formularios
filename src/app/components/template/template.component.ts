import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { config } from 'process';
import { Cliente } from '../../models/usuarios';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  cliente: Cliente = new Cliente();
  paises: any[] = [];

  constructor(private service: PaisesService) { }

  ngOnInit(): void {
    this.getPaises();    
  }

  getPaises = () =>{
    this.service.getPaises().subscribe(
      paises => this.paises = paises
    );
  }

  guardar(formulario: NgForm){
    if(formulario.invalid){
      Object.values(formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    console.log(formulario.value);
  }

}





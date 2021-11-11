import { Component, OnInit } from '@angular/core';
import {CalculadoraApiService} from '../../services/calculadora-api.service';
import {numeros} from "../../interfaces/numeros";

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1=0;
  num2=0;

  constructor(private calculadoraServicio: CalculadoraApiService) { }

  ngOnInit(): void {
  }

  async sumar() {
    let numeros: numeros = {
      num1: this.num1,
      num2: this.num2
    }
    this.calculadoraServicio.sumar(numeros)
      .then( (response) => {
      alert('Resultado: '+response.data.result)
    })
      .catch( (error) => {
        console.log(error);
      })

  }
}

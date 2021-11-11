import { Component, OnInit } from '@angular/core';
import {CalculadoraApiService} from '../../services/calculadora-api.service';
import {numeros} from "../../interfaces/numeros";

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1="5";
  num2="6";

  constructor(private calculadoraServicio: CalculadoraApiService) { }

  ngOnInit(): void {
  }

  sumar(){
    let numeros:numeros={
      num1: this.num2,
      num2: this.num2
    }
    let resultado=this.calculadoraServicio.sumar(numeros);
    console.log("el resultado es "+resultado);
  }
}

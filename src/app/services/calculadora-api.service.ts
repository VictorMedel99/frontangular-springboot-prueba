import { Injectable } from '@angular/core';
import axios from 'axios';
import {numeros} from "../interfaces/numeros";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraApiService {
  api_url_base = "http://localhost:8080/api/";
  constructor() { }

  sumar(numeros:numeros){
    axios.post(this.api_url_base+'suma',numeros)
      .then(function (response) {
        console.log(response.data);
        let resultado=response.data;
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

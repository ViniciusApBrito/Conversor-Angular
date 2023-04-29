import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  ValorReal:    number = 0;
  valoreuro:    number = 0;
  valordolar:   number = 0;
  valorlibra:   number = 0;
  ResultDolar:  number = 0;
  ResultEuro:   number = 0;
  ResultLibra:  number = 0;
  operacao(): void {


    this.ResultDolar = this.ValorReal / this.valordolar;
    this.ResultLibra = this.ValorReal / this.valorlibra;
    this.ResultEuro = this.ValorReal / this.valoreuro;

  }

  removeZero(id: string) {
    const input = document.getElementById(id) as HTMLInputElement;
    if (input.value === '0') {
      input.value = '';
    }
  }

  
  
}
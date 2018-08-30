import { Component, Input } from '@angular/core';

@Component({
  selector: 'tarjeta-p-cuenta',
  templateUrl: 'tarjeta-p-cuenta.html'
})

export class TarjetaPCuentaComponent {

  @Input() productsNumber: string;
  @Input() titulo: string;
  @Input() subtitulo1: string;
  @Input() subtitulo1Value: string;
  @Input() subtitulo2: string;
  @Input() subtitulo2Value: string;

  constructor() { }
}

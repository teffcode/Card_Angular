import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productsNumber: string = '12';
  titulo: string = 'Cuentas de depósito';
  subtitulo1: string = 'Disponible';
  subtitulo1Value: string = '$1,344,059.23';
  subtitulo2: string = 'Saldo actual';
  subtitulo2Value: string = '$1,351,259.23';

  constructor(public navCtrl: NavController) { }

}

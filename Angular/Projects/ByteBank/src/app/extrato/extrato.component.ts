import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  transferencias: any[];
  constructor (private service: TransferenciaService){}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }
}

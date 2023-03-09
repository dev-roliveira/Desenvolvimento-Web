import { Router} from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino:number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    const valorEmitir: Transferencia = ({valor: this.valor, destino: this.destino});
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}

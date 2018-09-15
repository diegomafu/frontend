import { Component, OnInit } from '@angular/core';
import {ControleLancamentoRetorno} from '../model/lancamentoRetorno'
import {LancamentoService} from '../lancamento.service'

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  lancamentoRetorno = new ControleLancamentoRetorno();

  constructor(private lancamentoService:LancamentoService) { }

  ngOnInit() {
  }

  listarLancamentos(){
  	this.lancamentoService.listarLancamentos().then(
      (lancamentoRetorno:ControleLancamentoRetorno) => this.lancamentoRetorno = lancamentoRetorno).catch(
      () => { alert('Impossivel listar.'); });
  }

  limparLancamentos(){
  	this.lancamentoRetorno = new ControleLancamentoRetorno();
    this.lancamentoRetorno.listaControleLancamento = []; 
  }
}
 
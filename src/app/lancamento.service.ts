import { Injectable } from '@angular/core';
import { ControleLancamentoRetorno, TotalControleLancamento, ControleLancamento } from './model/lancamentoRetorno';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

	LANCAMENTO_URL = 'http://localhost:8080/lancamentoLista/';
  	
  constructor(private http:Http) {}

  listarLancamentos(){

      return new Promise((resolve, reject) => {

          this.http.get(this.LANCAMENTO_URL).subscribe((resultado:any) => {

              let resultadoObj = resultado.json();
              let lancamentoRetorno = new ControleLancamentoRetorno();
              
              //Default value
              lancamentoRetorno.indice=resultadoObj.indice;
              lancamentoRetorno.tamanhoPagina=resultadoObj.tamanhoPagina;
              lancamentoRetorno.totalElements=resultadoObj.totalElements;
              
              //Total Controle Lancamento
              lancamentoRetorno.totalControleLancamento = new TotalControleLancamento();
              lancamentoRetorno.totalControleLancamento.quantidadeLancamentos=resultadoObj.totalControleLancamento.quantidadeLancamentos;
              lancamentoRetorno.totalControleLancamento.quantidadeRemessas=resultadoObj.totalControleLancamento.quantidadeRemessas;
              lancamentoRetorno.totalControleLancamento.valorLancamentos=resultadoObj.totalControleLancamento.valorLancamentos;

              //ListaControleLancamento
              lancamentoRetorno.listaControleLancamento = [];
              for( let i = 0; i < resultadoObj.listaControleLancamento.length; i++){
                  let controleLancamento:ControleLancamento = new ControleLancamento();
                  controleLancamento.indice = i;
                  //Same object
                  controleLancamento.lancamentoContaCorrenteCliente=resultadoObj.listaControleLancamento[i].lancamentoContaCorrenteCliente;
                  controleLancamento.dataEfetivaLancamento=resultadoObj.listaControleLancamento[i].dataEfetivaLancamento;
                  controleLancamento.dataLancamentoContaCorrenteCliente=resultadoObj.listaControleLancamento[i].dataLancamentoContaCorrenteCliente;
                  controleLancamento.numeroEvento=resultadoObj.listaControleLancamento[i].numeroEvento;
                  controleLancamento.descricaoGrupoPagamento=resultadoObj.listaControleLancamento[i].descricaoGrupoPagamento;
                  controleLancamento.codigoIdentificadorUnico=resultadoObj.listaControleLancamento[i].codigoIdentificadorUnico;
                  controleLancamento.nomeBanco=resultadoObj.listaControleLancamento[i].nomeBanco;
                  controleLancamento.quantidadeLancamentoRemessa=resultadoObj.listaControleLancamento[i].quantidadeLancamentoRemessa;;
                  controleLancamento.numeroRaizCNPJ=resultadoObj.listaControleLancamento[i].numeroRaizCNPJ;
                  controleLancamento.numeroSufixoCNPJ=resultadoObj.listaControleLancamento[i].numeroSufixoCNPJ;
                  controleLancamento.valorLancamentoRemessa=resultadoObj.listaControleLancamento[i].valorLancamentoRemessa;
                  lancamentoRetorno.listaControleLancamento.push(controleLancamento);
              }
              resolve(lancamentoRetorno);
      		}), (error) => {
              console.log('listarLancamentos 4');
              reject(error.json());
          };
      });
  }

}

export class ControleLancamentoRetorno{
	indice:number;
	tamanhoPagina:number;
	totalElements:number;
	listaControleLancamento:Array<ControleLancamento> ;
	totalControleLancamento:TotalControleLancamento;
}

export class TotalControleLancamento{
	quantidadeLancamentos:number;
	quantidadeRemessas:number;
	valorLancamentos:number;
}

export class DadosDomicilioBancario{
	codigoBanco:number;
	numeroAgencia:number;
	numeroContaCorrente:string;
}

export class LancamentoContaCorrente{
	dadosDomicilioBancario:DadosDomicilioBancario;
	numeroRemessaBanco:number;
	nomeSituacaoRemessa:string;
	nomeTipoOperacao:string;
}

export class ControleLancamento{
	indice:number;
	lancamentoContaCorrenteCliente:LancamentoContaCorrente;
	dataEfetivaLancamento:string;
	dataLancamentoContaCorrenteCliente:string;
	numeroEvento:number;
	descricaoGrupoPagamento:string;
	codigoIdentificadorUnico:number;
	nomeBanco:string;
	quantidadeLancamentoRemessa:number;
	numeroRaizCNPJ:string;
	numeroSufixoCNPJ:string;
	valorLancamentoRemessa:number;
	dateLancamentoContaCorrenteCliente:number;
}

import { Pipe, PipeTransform } from '@angular/core';
import { TipoPessoa } from '../cliente/enum/tipo-pessoa-enum';

@Pipe({
  name: 'documento'
})
export class DocumentoPipe implements PipeTransform {
  transform(value: string, tipo?: string, showTipo?: boolean): any | null {
    if (!value) {
      return null;
    }
    return this.formatarDoc(value, tipo, showTipo);
  }

  private formatarDoc(
    aDocumento: string,
    aTipo?: string,
    showTipo?: boolean
  ): string {
    switch (aTipo) {
      case 'PF':
      case TipoPessoa.PF.toString():
        return this.formatarCPF(aDocumento, showTipo);
      case 'PJ':
      case TipoPessoa.PJ.toString():
        return this.formatarCNPJ(aDocumento, showTipo);
      default:
        return this.formatarPorTamanho(aDocumento, showTipo);
    }
  }

  private formatarCPF(aCPF: string, showTipo: boolean): string {
    let retorno = '';
    if (aCPF.length === 11) {
      retorno +=
        aCPF.substr(0, 3) +
        '.' +
        aCPF.substr(3, 3) +
        '.' +
        aCPF.substr(6, 3) +
        '-' +
        aCPF.substr(9, 2);
    } else if (aCPF.length === 15) {
      retorno +=
        aCPF.substr(4, 3) +
        '.' +
        aCPF.substr(7, 3) +
        '.' +
        aCPF.substr(10, 3) +
        '-' +
        aCPF.substr(13, 2);
    }
    if (showTipo) {
      retorno = 'CPF: ' + retorno;
    }
    return retorno;
  }

  private formatarCNPJ(aCNPJ: string, showTipo: boolean): string {
    let retorno = '';

    if (aCNPJ.length === 14) {
      retorno +=
        aCNPJ.substr(0, 2) +
        '.' +
        aCNPJ.substr(2, 3) +
        '.' +
        aCNPJ.substr(5, 3) +
        '/' +
        aCNPJ.substr(8, 4) +
        '-' +
        aCNPJ.substr(12, 2);
    } else {
      retorno +=
        aCNPJ.substr(0, 3) +
        '.' +
        aCNPJ.substr(3, 3) +
        '.' +
        aCNPJ.substr(6, 3) +
        '/' +
        aCNPJ.substr(9, 4) +
        '-' +
        aCNPJ.substr(13, 2);
    }

    if (showTipo) {
      retorno = 'CNPJ: ' + retorno;
    }
    return retorno;
  }

  private formatarPorTamanho(aDocumento: string, showTipo: boolean): string {
    switch (aDocumento.length) {
      case 11:
        return this.formatarCPF(aDocumento, showTipo);
      case 14:
      case 15: // Em alguns casos o CNPJ pode ter 15 caracteres
        return this.formatarCNPJ(aDocumento, showTipo);
    }
  }
}

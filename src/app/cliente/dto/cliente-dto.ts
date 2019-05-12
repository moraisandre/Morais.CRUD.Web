import { TipoPessoa } from '../enum/tipo-pessoa-enum';

export class ClienteDTO {
  Id: string;
  Documento: string;
  TipoPessoa: TipoPessoa;
  Nome: string;
  Endereco: string;
  Email: string;
}

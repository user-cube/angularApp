export class Produtos {
  data: Date;
  produtos: number;
  user: string;
  quantidade: number;
  preco: number;
  total: number;


  constructor(data: Date, produtos: number, user: string, quantidade: number, preco: number, total: number) {
    this.data = data;
    this.produtos = produtos;
    this.user = user;
    this.quantidade = quantidade;
    this.preco = preco;
    this.total = total;
  }
}

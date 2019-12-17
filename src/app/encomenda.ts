export class Encomenda {
  id: number;
  data: Date;
  produtos: string;
  prodid: number;
  user: string;
  quantidade: number;
  preco: number;
  total: number;

  constructor(data: Date, produtos: number, user: string, quantidade: number, preco: number, total: number) {
    this.data = data;
    this.prodid = produtos;
    this.user = user;
    this.quantidade = quantidade;
    this.preco = preco;
    this.total = total;
  }
}

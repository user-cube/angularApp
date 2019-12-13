import {Items} from './items';

export class Encomenda {
  data: Date;
  produtos: Items;
  user: string;
  quantidade: number;
  preco: number;
  total: number;
}

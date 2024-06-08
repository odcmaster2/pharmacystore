import { Drug } from "./Drug";

export class CartItem{
  constructor(public drug:Drug){ }
  quantity:number = 1 ;
  price: number = this.drug.price;
}
export class Item{
    public id: number;
    public name: string;
    public price: number;
    public created: Date;
    public updated: Date;
    public sellerName: string;
  constructor(id:number, name:string, price:number, created:Date,updated:Date,sellerName:string)
  {
    this.id=id;
    this.name=name;
    this.price=price;
    this.created = created;
    this.updated = updated;
    this.sellerName = sellerName;
  }
}

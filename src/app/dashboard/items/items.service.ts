import { Item } from "./item.model";
import { Subject } from "rxjs/Subject";

export class ItemsService{
    
    itemSubject = new Subject();


    items: Item[] = [
        new Item(
            1,
            'Alienware',
            500,
            new Date(),
            new Date('December 17, 1995'),
            'Rony'
        ),
        new Item(
            2,
            'underware',
            500,
            new Date(),
            new Date('December 17, 1995'),
            'Anwar'
        ),
        new Item(
            3,
            'Alienbass',
            500,
            new Date(),
            new Date('December 17, 1995'),
            'Anwar'
        ),
        new Item(
            4,
            'Cool Name',
            500,
            new Date(),
            new Date('December 17, 1995'),
            'Anwar'
        ),
        new Item(
            5,
            'GUC SUCKS',
            500,
            new Date(),
            new Date('December 17, 1995'),
            'Anwar'
        )
    ];


    findIndexById(item:Item){
        for(var i = 0; i<this.items.length;i++){
            if(item.id==this.items[i].id){
              return i;
            }
        }
    }

    deleteItem(item:Item){
        var index = this.findIndexById(item);
        this.items.splice(index,1);
        this.itemSubject.next(this.items.slice());
    }

    editItem(id:number,updatedItem:Item){
        var index = this.findIndexById(updatedItem);
        this.items[index] = updatedItem;
        this.itemSubject.next(this.items.slice());
    }



}
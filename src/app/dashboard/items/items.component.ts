import { Component } from '@angular/core';
import { Item } from "./item.model";
import { ItemsService } from './items.service';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {

  filteredStatus = '';
  items : Item[];
  constructor(private itemService: ItemsService){}
  

  ngOnInit(){
    this.items = this.itemService.items;
    this.itemService.itemSubject.subscribe(
      (items: Item[]) =>{
        this.items = items;
      }
    );
  }
}

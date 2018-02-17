import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ItemComponent } from './item/item.component';
import { ItemsService } from './items.service';

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule,FormsModule,HttpModule],
  declarations: [ItemsComponent,ItemComponent],
  providers: [ItemsService]
})
export class ItemsModule {}

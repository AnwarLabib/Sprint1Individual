import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsComponent } from './items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ItemComponent } from './item/item.component';
import { ItemsService } from './items.service';

@NgModule({
  imports: [ThemeModule, ItemsRoutingModule,FormsModule],
  declarations: [ItemsComponent,ItemComponent],
  providers: [ItemsService]
})
export class ItemsModule {}

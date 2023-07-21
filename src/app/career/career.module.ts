import { CareerPage } from './career.page';
import { CareerPageRoutingModule } from './career-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareerPageRoutingModule
  ],
  declarations: [CareerPage]
})
export class CareerPageModule {}

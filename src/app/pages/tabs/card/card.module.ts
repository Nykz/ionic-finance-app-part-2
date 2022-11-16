import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';

import { CardPage } from './card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    SwiperModule
  ],
  declarations: [CardPage]
})
export class CardPageModule {}

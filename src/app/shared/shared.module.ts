import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BadgesComponent } from './components/badges/badges.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent, BadgesComponent],
  exports: [CardComponent, BadgesComponent],
})
export class SharedModule {}

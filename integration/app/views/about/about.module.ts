import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutRouting } from './about.routes';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, aboutRouting]
})
export class AboutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


/**Angular Material.*/
import { AngularMaterialModule } from './angular-material/angular-material.module';

/**Third party modules.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**Modules.*/
// import { ButtonModule } from './button/button.module';

/**Components.*/

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from '../modules/home/carousel/carousel.component';

import { MatButtonToggleModule } from '@angular/material';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
// import { WcStories } from '@gugadev/wc-stories'

import {
  MatCarouselSlideComponent,
  MatCarouselSlide,
  MatCarouselComponent,
  MatCarouselModule
} from '@ngmodule/material-carousel';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    AlertDialogComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    NgxMaskModule,

    // MatCarouselSlideComponent,
    // MatCarouselComponent
    // ButtonModule
  ],
  exports: [
    // MatCarouselSlideComponent,
    // MatCarouselComponent,
    AngularMaterialModule,
    FlexLayoutModule,
    FooterComponent,
    HeaderComponent
  ],
  entryComponents: [
    AlertDialogComponent
  ],
})
export class SharedModule { }

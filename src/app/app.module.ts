import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LeftComponent } from './left/left.component';
import { MidComponent } from './mid/mid.component';
import { RightComponent } from './right/right.component';
import { TopSlotComponent } from './top-slot/top-slot.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ 
      path: '', component: ProductListComponent 
    }]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    LeftComponent,
    MidComponent,
    RightComponent,
    TopSlotComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

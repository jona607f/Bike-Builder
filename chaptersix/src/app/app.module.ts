import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UserFormComponent } from './user-form.component';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';
import { JumboTronComponent } from './jumbotron.component';

import { TruncatePipe } from './truncate.pipe';
import { LoginComponent } from './login.component';
@NgModule({
  declarations: [
    AppComponent, LoginComponent, UserFormComponent, ProductsComponent, RatingComponent, ProductComponent, TruncatePipe, JumboTronComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
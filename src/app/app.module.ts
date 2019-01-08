import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { BaseComponent } from './base/base.component';
import { Base2Component } from './base2/base2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EnderecoComponent,
    BaseComponent,
    Base2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

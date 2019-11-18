import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {CarComponent} from './CarComponent/car/carComponent'
import { APP_CONFIG, AppConfig } from './app.config';
import {CarService} from "./CarComponent/service/carService";
import {ApiService} from "./CarComponent/service/apiService";
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title, { provide: APP_CONFIG, useValue: AppConfig },
    CarService,ApiService
  ],
  bootstrap: [CarComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CrimedataService } from 'src/app/shared/crimedata.service';
import {ChartModule} from 'primeng/chart';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [
   HttpClient
  ]
})
export class HomeModule { }

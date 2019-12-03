import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CrimedataService } from 'src/app/shared/crimedata.service';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
  providers: [
    CrimedataService
  ]
})
export class HomeModule { }

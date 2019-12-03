import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SubmitComponent } from './submit.component';
import { RouterModule } from '@angular/router';
import { RoutingSubmitModule } from './routing-submit.module';
import { SubmitIssueComponent } from './submit-issue/submit-issue.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [SubmitComponent, SubmitIssueComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    RoutingSubmitModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  exports:[
    SubmitComponent,
    SubmitIssueComponent
  ]
})
export class SubmitModule { }

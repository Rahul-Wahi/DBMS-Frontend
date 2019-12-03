import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from './material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CrimedataService } from './crimedata.service';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    SideNavComponent,
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  providers: [
    CrimedataService
  ]
})
export class SharedModule { }

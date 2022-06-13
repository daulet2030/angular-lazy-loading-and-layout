import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { LeftModule } from '../left/left.module';
import { CenterModule } from '../center/center.module';
import { RightModule } from '../right/right.module';
import { FooterModule } from '../footer/footer.module';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    LeftModule,
    CenterModule,
    RightModule,
    FooterModule,
  ],
  exports: [HomeComponent, RouterModule],
})
export class HomeModule {}

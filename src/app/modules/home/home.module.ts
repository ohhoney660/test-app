import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent, MainMenuComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [MainMenuComponent, LandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [MainMenuComponent, LandingPageComponent]
})
export class HomeModule { }

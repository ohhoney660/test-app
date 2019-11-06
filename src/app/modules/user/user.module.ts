import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent, SignUpComponent, SignInComponent } from './components';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, UserProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

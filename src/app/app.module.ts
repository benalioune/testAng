import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DataComponent } from './data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from "@angular/common/http";
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from './auth/login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './header/header.component';







@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
   
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  

export class AppModule { }

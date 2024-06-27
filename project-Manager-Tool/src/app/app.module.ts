import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProjectService } from './services/project.service';

@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
   
  ],
  providers: [ProjectService],
  
})
export class AppModule { }

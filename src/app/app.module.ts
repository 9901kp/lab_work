import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this import
import { JobApplicationComponent } from './job-application/job-application.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, JobApplicationComponent],
  imports: [BrowserModule,ReactiveFormsModule,FormsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

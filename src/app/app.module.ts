import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocumentEditorContainerAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

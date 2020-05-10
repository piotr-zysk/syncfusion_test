import { Component, ViewChild, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToolbarService]
})
export class AppComponent implements OnInit{
  title = 'angular9-app';
  public serviceLink: string;
  ngOnInit() {
    this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';
  }
}

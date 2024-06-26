import { Component } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
}

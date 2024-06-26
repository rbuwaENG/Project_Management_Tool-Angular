import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'assets/projects.json'; 


  constructor(private http: HttpClient) {}

  getAll(): Observable<Project[]> {
    return this.http.get<any>(this.projectsUrl).pipe(
      map(response => response.projects as Project[])
    );
  }
  readJson(filePath: string): Observable<any> {
    return this.http.get<any>(this.projectsUrl + filePath);
  }
 
}

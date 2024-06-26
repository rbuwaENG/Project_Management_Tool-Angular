import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    { id: 1, name: "Project Breeze", revenue: 100000, status: "In Progress" },
    { id: 2, name: "Command Program", revenue: 150000, status: "Completed" },
    { id: 3, name: "Project Point", revenue: 200000, status: "On Hold" },
    { id: 4, name: "Project Mecha", revenue: 250000, status: "In Progress" },
    { id: 5, name: "Program Pad", revenue: 300000, status: "Completed" },
    { id: 6, name: "Project Synergy", revenue: 350000, status: "In Progress" },
    { id: 7, name: "Dynamic Program", revenue: 400000, status: "On Hold" },
    { id: 8, name: "Project Zen\\Sen", revenue: 450000, status: "In Progress" }
  ];
  

  getAll(): Project[] {
    return this.projects;
  }
}

import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { NgForOf } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [NgForOf, CardModule],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repositories: any[] = [];

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getRepositories().subscribe(data => {
      this.repositories = data;
    });
  }
}

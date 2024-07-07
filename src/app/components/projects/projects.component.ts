import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    CommonModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    FormsModule
  ],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repositories: any[] = [];
  sortOptions: any[];
  sortKey: string = '';
  sortField: string = '';
  sortOrder: number = 1;
  loading: boolean = true;

  constructor(private resumeService: ResumeService) {
    this.sortOptions = [
      { label: 'Stars High to Low', value: '!stargazers_count' },
      { label: 'Stars Low to High', value: 'stargazers_count' },
      { label: 'Name', value: 'name' }
    ];
  }

  ngOnInit(): void {
    this.loading = true;
    this.resumeService.getRepositories().subscribe(
      data => {
        this.repositories = data;
        this.loading = false;
        console.log('Repositories loaded:', this.repositories);
      },
      error => {
        console.error('Error fetching repositories:', error);
        this.loading = false;
      }
    );
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  navigateToRepo(url: string) {
    window.open(url, '_blank');
  }
}

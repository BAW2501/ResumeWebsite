import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [
    CarouselModule,
    CardModule,
    TagModule,
    ChipModule,
    NgForOf
  ],
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = this.resumeService.getResume().education;

  constructor(private resumeService: ResumeService) { }
}

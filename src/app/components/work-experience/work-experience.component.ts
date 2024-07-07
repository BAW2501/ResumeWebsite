import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    TimelineModule,
    CardModule,
    TagModule,
    ButtonModule
  ],
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  work = this.resumeService.getResume().work;

  constructor(private resumeService: ResumeService) { }

  navigateToUrl(url: string) {
    window.open(url, '_blank');
  }
}

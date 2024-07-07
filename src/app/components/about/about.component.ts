import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [CardModule, ButtonModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  resume = this.resumeService.getResume();

  constructor(private resumeService: ResumeService) {}
}

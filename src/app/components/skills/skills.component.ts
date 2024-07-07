import {Component} from '@angular/core';
import {ResumeService} from '../../services/resume.service';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ProgressBarModule} from 'primeng/progressbar';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  standalone: true,
  imports: [
    PanelModule,
    CardModule,
    ProgressBarModule,
    NgForOf
  ],
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = this.resumeService.getResume().skills;

  constructor(private resumeService: ResumeService) {
  }

  getRandomSkillLevel(): number {
    return Math.floor(Math.random() * (100 - 70 + 1) + 70);
    //return 50;
  }
}

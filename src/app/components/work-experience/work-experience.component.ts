import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent  {
  work = this.resumeService.getResume().work

  constructor(private resumeService: ResumeService) { }


}

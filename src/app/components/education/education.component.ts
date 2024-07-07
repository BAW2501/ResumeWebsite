import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./education.component.css']
})
export class EducationComponent  {
  education = this.resumeService.getResume().education;

  constructor(private resumeService: ResumeService) { }

}

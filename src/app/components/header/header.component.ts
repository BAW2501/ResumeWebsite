import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 resume = this.resumeService.getResume();

  constructor(private resumeService: ResumeService) { }


}

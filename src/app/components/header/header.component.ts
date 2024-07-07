import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    ToolbarModule,
    AvatarModule,
    ButtonModule,
    NgForOf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  resume = this.resumeService.getResume();

  constructor(private resumeService: ResumeService) { }

  navigateToProfile(url: string) {
    window.open(url, '_blank');
  }
}

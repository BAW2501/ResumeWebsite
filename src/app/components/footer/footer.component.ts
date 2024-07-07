import { Component } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  name = this.resumeService.getResume().basics.name;
  currentYear = new Date().getFullYear();
  constructor(private resumeService: ResumeService) { }
}

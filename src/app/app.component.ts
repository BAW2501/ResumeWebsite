import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WorkExperienceComponent } from "./components/work-experience/work-experience.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    TabViewModule,
    ToastModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}

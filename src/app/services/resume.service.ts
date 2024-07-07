import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as resume from '../../assets/Ahmed_Walid_Belhadj.resume.json';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private githubReposUrl = 'https://api.github.com/users/BAW2501/repos';

  constructor(private http: HttpClient) {}

  getResume() {
    return resume;
  }

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(this.githubReposUrl).pipe(
      map(repos => repos.filter(repo => [
        'LearningGANs', 'ARIMA-Timeseries', 'ChebyKAN-Keras',
        'CrossFrameworkComponents', 'Neural_HyperParam_MetaHeuristic_Optimization',
        'AirBnB_Clone_React', 'Monte_Carlo_Tree-Search_Tic_Tac_Toe',
        'Arabic-Handwritten-Characters-Dataset'
      ].includes(repo.name)))
    );
  }
}

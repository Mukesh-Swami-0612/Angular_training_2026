import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobs = [
    { id: 1, title: '.NET Developer', company: 'Infosys', exp: '2-4 years' },
    { id: 2, title: 'Java Developer', company: 'TCS', exp: '1-3 years' },
    { id: 3, title: 'C++ Developer', company: 'Wipro', exp: '3-5 years' },
    { id: 4, title: 'Angular Developer', company: 'Capgemini', exp: 'Fresher' }
  ];

  savedJobs: any[] = [];

  constructor() {}

  getJobs() {
    return this.jobs;
  }

  getJobById(id: number) {
    return this.jobs.find(j => j.id === id);
  }

  saveJob(job: any) {
    const exists = this.savedJobs.find(j => j.id === job.id);
    if (!exists) {
      this.savedJobs.push(job);
    }
  }

  getSavedJobs() {
    return this.savedJobs;
  }
}
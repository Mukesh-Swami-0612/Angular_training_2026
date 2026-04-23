import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit {

  job: any;

  constructor(
    private srv: JobServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.srv.getJobById(id);
  }

  saveJob() {
    if (this.job) {
      this.srv.saveJob(this.job);
      alert('Job saved successfully!');
    }
  }
}
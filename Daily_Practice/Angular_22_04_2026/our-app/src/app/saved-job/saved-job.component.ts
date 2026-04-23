import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-job',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './saved-job.component.html',
  styleUrl: './saved-job.component.css'
})
export class SavedJobComponent implements OnInit {
  savedJobs: any[] = [];
  constructor(private srv: JobServiceService) {}

  ngOnInit(): void {
    this.savedJobs = this.srv.getSavedJobs();
  }
}

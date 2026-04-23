import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  jobs: any[] = [];
  savedJobs: any[] = [];

  constructor(private srv: JobServiceService) {}

  ngOnInit(): void {
    this.jobs = this.srv.getJobs();
    this.savedJobs = this.srv.getSavedJobs();
  }
}

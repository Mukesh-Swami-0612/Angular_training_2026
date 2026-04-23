import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';   

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  jobs: any[] = [];

  constructor(private srv: JobServiceService) {}

  ngOnInit(): void {
    this.jobs = this.srv.getJobs();
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { JobServiceService } from '../job-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent implements OnInit {
  job: any;
  applicantName: string = '';
  applicantEmail: string = '';
  applicantPhone: string = '';
  coverLetter: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private srv: JobServiceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.srv.getJobById(id);
  }

  submitApplication() {
    if (this.applicantName && this.applicantEmail && this.applicantPhone) {
      alert(`Application submitted successfully for ${this.job.title}!`);
      this.router.navigate(['/']);
    } else {
      alert('Please fill in all required fields');
    }
  }
}

import { Component } from '@angular/core';
import { Mentor } from './mentor';
import { GeneralService } from '../services/general.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentors.component.html',
  styleUrl: './mentors.component.css'
})
export class MentorsComponent {

  mentors: Mentor[] = [];

  constructor(
    private service: GeneralService
  ){}


  ngOnInit(): void {
    this.getAllMentors();
  }
  


  getAllMentors(): void {
    this.service.getAllMentors().subscribe({
        next: (data) => {
            this.mentors = data;
            console.log(this.mentors);
        },
        error: (err) => {
            console.error(err);
        }
    });
  }
}

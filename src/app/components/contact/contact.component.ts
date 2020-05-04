import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  socials: Social[] = [];

  constructor(private dataService: DataService) {
    this.socials = this.dataService.getSocials();
  }

  get emailAddress() {
    return this.dataService.emailAddress;
  }

  get resumeUrl() {
    return this.dataService.resumeUrl;
  }

  get isAvailable() {
    return this.dataService.isAvailable;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/social';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  socials: Social[];

  constructor() {
    const baseUrl = `assets/images`;
    this.socials = [
      {
        name: 'LinkedIn',
        assetUrl: `${baseUrl}/linkedin.svg`,
        redirectUrl: 'https://www.linkedin.com/in/jonathan-jay-mayol-00a373141'
      },
      {
        name: 'GitHub',
        assetUrl: `${baseUrl}/github.svg`,
        redirectUrl: 'https://github.com/mayoljonathan'
      },
      {
        name: 'Facebook',
        assetUrl: `${baseUrl}/facebook.svg`,
        redirectUrl: 'https://www.facebook.com/mayoljonathan.ph'
      }
    ];
  }

  ngOnInit(): void {
  }

}

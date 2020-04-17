import { Component, OnInit } from '@angular/core';
import { FeaturedProject } from 'src/app/models/featured-project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  featuredProjects: Array<FeaturedProject>;

  constructor() {
    this.featuredProjects = [
      {
        name: 'P-Plus - A Lifestyle You Deserve',
        description: 'A similar app like Grab that currently includes services such as food delivery and online booking of doctors. Built the app using Flutter.',
        imageUrl: 'https://res.cloudinary.com/tsebvaan/image/upload/c_scale,w_500/v1584032005/pplus.png',
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.primary.pplus'
      },
      {
        name: 'P-Plus Driver',
        description: 'The food delivery driver app for P-Plus accredited merchants and it was also built using Flutter.',
        imageUrl: 'https://res.cloudinary.com/tsebvaan/image/upload/c_scale,w_500/v1584032771/pplus_food_driver_mxitg7.png'
      },
    ];
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FeaturedProject } from 'src/app/models/featured-project';
import { DataService } from 'src/app/services/data.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  featuredProjects: FeaturedProject[];
  otherProjects: Project[];

  showAll: boolean = false;

  constructor(private dataService: DataService) {
    this.featuredProjects = this.dataService.featuredProjects;
    this.otherProjects = this.dataService.otherProjects;
  }

  ngOnInit(): void {
  }

  trackBy(index, item: Project) {
    return item.name;
  }

  toggleProjects() : void {
    this.showAll = !this.showAll;
  }

}

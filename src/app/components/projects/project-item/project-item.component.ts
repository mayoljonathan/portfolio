import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Images } from 'src/app/shared';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  
  images = Images;

  constructor() { }

  ngOnInit(): void {
  }

}

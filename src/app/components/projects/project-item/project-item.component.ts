import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Images } from 'src/app/shared';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;

  images = Images;

  constructor() { }

  ngOnInit(): void {
  }

}

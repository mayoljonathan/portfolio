import { Component, OnInit, Input } from '@angular/core';
import { FeaturedProject } from 'src/app/models/featured-project';

@Component({
  selector: 'featured-project',
  templateUrl: './featured-project.component.html',
  styleUrls: ['./featured-project.component.scss']
})
export class FeaturedProjectComponent implements OnInit {

  @Input() project: FeaturedProject;

  
  // #larger screen - image first(left) then text(right)
  // #mobile - always text(top) and image(bottom)
  @Input() isInverted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

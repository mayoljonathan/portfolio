import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeaturedProjectComponent } from './projects/featured-project/featured-project.component';

const components = [
  HeaderComponent,
  HeroComponent,
  AboutComponent,
  ProjectsComponent,
  FeaturedProjectComponent,
  ContactComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...components  
  ],
  exports: [ 
    ...components 
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

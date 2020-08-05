import { Injectable } from '@angular/core';
import { FeaturedProject } from '../models/featured-project';
import { Project } from '../models/project';
import { Social } from '../models/social';
import { Constants, Images } from '../shared';

@Injectable()
export class DataService {
  featuredProjects: FeaturedProject[] = [];
  otherProjects: Project[] = [];

  socials: Social[] = [];

  isAvailable: boolean = Constants.IS_AVAILABLE;
  emailAddress: string = Constants.EMAIL_ADDRESS;
  resumeUrl: string = Constants.RESUME_URL;

  constructor() {
    this.featuredProjects = this.getFeaturedProjects();
    this.otherProjects = this.getOtherProjects();
  }

  getFeaturedProjects(): FeaturedProject[] {
    return [
      new FeaturedProject({
        name: 'P-Plus - A Lifestyle You Deserve',
        description: 'A similar app like Grab that currently includes services such as food delivery and online booking of doctors.',
        imageUrl: 'https://res.cloudinary.com/tsebvaan/image/upload/c_scale,w_1000/v1591072738/portfolio/pplus.png',
        techStack: ['Flutter', 'ScopedModel', 'Provider', 'MVVM'],
        googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.primary.pplus'
      }),
      new FeaturedProject({
        name: 'P-Plus Driver',
        description: 'The food delivery driver app for P-Plus accredited merchants.',
        imageUrl: 'https://res.cloudinary.com/tsebvaan/image/upload/c_scale,w_1000/v1591072738/portfolio/pplus_driver.png',
        techStack: ['Flutter', 'ScopedModel', 'MVVM'],
      }),
      new FeaturedProject({
        name: 'P-Plus Merchant Cashier',
        description: 'A merchant app that will be used by the cashier to verify vouchers and add loyalty points to customers.',
        imageUrl: 'https://res.cloudinary.com/tsebvaan/image/upload/c_scale,w_1000/v1591072737/portfolio/pplus_merchant.png',
        techStack: ['Flutter', 'ScopedModel', 'MVVM'],
      })
    ];
  }

  getOtherProjects(): Project[] {
    return [
      new Project({
        name: 'Portfolio v2',
        description: 'The website that you are currently viewing 😀',
        techStack: ['Angular 9', 'TailwindCSS'],
        repositoryUrl: 'https://github.com/mayoljonathan/portfolio'
      }),
      new Project({
        name: 'Flutter Fast Food',
        description: 'A fast food app made with Flutter!',
        techStack: ['Flutter', 'Provider', 'Lottie'],
        website: 'https://mayoljonathan.github.io/flutter_fast_food_landing',
        repositoryUrl: 'https://github.com/mayoljonathan/flutter_fast_food'
      }),
      new Project({
        name: 'Flutter Gameboy',
        description: 'An app that simulates the look for Gameboy Advance SP. This is my entry for <a href="https://flutterhackathon.com" target="_blank" rel="noreferrer noopener">Flutter Hackathon 2020</a>.',
        techStack: ['Flutter', 'Provider'],
        website: 'https://mayoljonathan.github.io/flutter_gameboy_advance_sp',
        repositoryUrl: 'https://github.com/mayoljonathan/flutter_gameboy_advance_sp'
      }),
      new Project({
        name: 'Jollibee Kiosk',
        description: 'A kiosk app for Jollibee (POC).',
        techStack: ['Flutter', 'Cloud Firestore'],
        repositoryUrl: 'https://github.com/mayoljonathan/jollibee_kiosk'
      }),
      new Project({
        name: 'ShowcaseIT',
        description: 'A place where developers can showcase and distribute their web and mobile apps to other users.',
        techStack: ['Ionic 2', 'Angular 4', 'Firebase', 'Algolia'],
        website: 'https://showcase-it.firebaseapp.com',
        repositoryUrl: 'https://github.com/mayoljonathan/ShowcaseIT'
      }),
      new Project({
        name: 'ShowcaseIT - Admin Panel',
        description: 'An administrator panel for ShowcaseIT.',
        techStack: ['Ionic 2', 'Angular 4', 'Firebase'],
        website: 'https://mayoljonathan.github.io/showcase-it-apanel',
        repositoryUrl: 'https://github.com/mayoljonathan/showcase-it-apanel'
      }),
      // new Project({
      //   name: 'ShowcaseIT - Report Generator',
      //   description: 'A report generator for ShowcaseIT.',
      //   techStack: ['Angular 5', 'Firebase'],
      //   website: 'https://mayoljonathan.github.io/ShowcaseIT-Report-Generator',
      //   repositoryUrl: 'https://github.com/mayoljonathan/ShowcaseIT-Report-Generator'
      // }),
      new Project({
        name: 'ACLC Group Portal',
        description: 'A social media mobile app inspired on Facebook Groups.',
        techStack: ['NativeScript', 'Angular 4', 'Firebase', 'SQLite'],
        website: 'https://aclc-group-portal.firebaseapp.com'
      }),
      new Project({
        name: 'ACLC Group Portal Admin',
        description: 'The administrator panel mobile app for ACLC Group Portal.',
        techStack: ['NativeScript', 'Angular 4', 'Firebase'],
        website: 'https://mayoljonathan.github.io/portfolio_2018/project/aclc-group-portal-admin'
      }),
      new Project({
        name: 'ACLC Mobile Class Record',
        description: 'A class record in a mobile app.',
        techStack: ['Ionic 1', 'AngularJS', 'PouchDB'],
        website: 'https://mayoljonathan.github.io/portfolio_2018/project/aclc-mobile-class-record',
        repositoryUrl: 'https://github.com/mayoljonathan/ACLC-Mobile-Class-Record'
      }),
      new Project({
        name: 'ACLC Scheduling System',
        description: 'A web-based scheduling system for ACLC College of Mandaue.',
        techStack: ['PHP', 'JQuery', 'MySQL', 'Bootstrap'],
        website: 'https://mayoljonathan.github.io/portfolio_2018/project/aclc-scheduling-system',
        repositoryUrl: 'https://github.com/mayoljonathan/aclc_scheduling'
      }),
      new Project({
        name: 'News PH',
        description: 'A simple website for getting daily news in the Philippines from different sources.',
        techStack: ['Angular 5', 'News API'],
        website: 'https://mayoljonathan.github.io/NewsPH',
        repositoryUrl: 'https://github.com/mayoljonathan/NewsPH'
      }),
      new Project({
        name: 'Portfolio v1',
        description: 'My portfolio for year 2018 after I graduated from college.',
        techStack: ['Angular 5'],
        website: 'https://mayoljonathan.github.io/portfolio_2018',
        repositoryUrl: 'https://github.com/mayoljonathan/portfolio_2018'
      }),
    ];
  }

  getSocials(): Social[] {
    return [
      new Social({
        name: 'LinkedIn',
        assetUrl: Images.LINKEDIN_IMG,
        redirectUrl: 'https://www.linkedin.com/in/jonathan-jay-mayol-00a373141'
      }),
      new Social({
        name: 'GitHub',
        assetUrl: Images.GITHUB_IMG,
        redirectUrl: 'https://github.com/mayoljonathan'
      }),
      new Social({
        name: 'Facebook',
        assetUrl: Images.FACEBOOK_IMG,
        redirectUrl: 'https://www.facebook.com/mayoljonathan.ph'
      })
    ];
  }

}
import { Project } from './project';

export class FeaturedProject extends Project {
  googlePlayUrl?: string;

  constructor(data: FeaturedProject) {
    super(data);
    Object.assign(this, data);
  }
}
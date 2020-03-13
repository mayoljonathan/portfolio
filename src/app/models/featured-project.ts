export class FeaturedProject {
  name: string;
  description: string;
  imageUrl: string;
  googlePlayUrl?: string;

  constructor(data: FeaturedProject) {
    Object.assign(this, data);
  }
}
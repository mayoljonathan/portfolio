export class Project {
  name: string;
  description: string;
  website?: string;
  techStack?: string[];
  imageUrl?: string;
  repositoryUrl?: string;

  constructor(data: Project) {
    Object.assign(this, data);
  }
}
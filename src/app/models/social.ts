export class Social {
  name: string;
  assetUrl: string;
  redirectUrl: string;

  constructor(data: Social) {
    Object.assign(this, data);
  }
}
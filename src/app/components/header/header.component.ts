import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('mainNav') mainNav: ElementRef;
  navLinks: Array<string> = ['about', 'projects', 'contact'];

  constructor(
    private scrollToService: ScrollToService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  get isAvailable() {
    return this.dataService.isAvailable;
  }

  get isMenuOpen(): boolean {
    return this.mainNav.nativeElement.classList.contains('hidden');
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.mainNav.nativeElement.classList.remove('hidden');
    } else {
      this.mainNav.nativeElement.classList.add('hidden');
    }
  }

  scrollTo(target: string) {
    if (!this.isMenuOpen) this.toggleMenu();

    const config: ScrollToConfigOptions = { target };
    this.scrollToService.scrollTo(config);
  }

}

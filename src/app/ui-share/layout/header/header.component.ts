import { Component, Inject, OnDestroy, OnInit, Renderer2  } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
navbarCollapsed = true;

constructor(private router: Router, private activatedRoute: ActivatedRoute, 
  private renderer: Renderer2,
  @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
  }
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
}


}

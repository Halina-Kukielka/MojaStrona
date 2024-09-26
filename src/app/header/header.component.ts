import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  hideNavbar(navbar: any) {
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }

  ngOnInit(): void {
  }

}

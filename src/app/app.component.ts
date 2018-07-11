import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLoader = true;
  exemptedHeaderRoutes = ['login'];
  loginRegex = new RegExp(this.exemptedHeaderRoutes.join('|'));

  constructor(private router: Router) {

    router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      this.showLoader = !this.loginRegex.test(evt['url']);
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // always scroll to top when changing route
      window.scrollTo(0, 0);
    });
  }
}

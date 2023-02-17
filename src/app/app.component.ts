import { Component, OnInit } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { onAuthStateChanged } from '@firebase/auth';
import { AuthService } from './services/auth.service';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HttpClient';

  constructor(
    private auth: Auth,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.currentUser = user;
        this.router.navigateByUrl('/home');
      } else {
        console.log('No user!');
        this.authService.currentUser = null;
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
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

  constructor(private auth: Auth, private authService: AuthService) {}
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.currentUser = user;
      } else {
        console.log('No user!');
        this.authService.currentUser = null;
      }
    });
  }
}

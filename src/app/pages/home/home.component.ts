import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news.model';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  news$: Observable<News[]>;
  constructor(
    private newsService: NewsService,
    public authService: AuthService
  ) {
    this.news$ = this.newsService.get();
    console.log(this.news$);
  }

  logOut() {}
}

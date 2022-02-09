import { Component, VERSION } from '@angular/core';
import {MovieListService} from './movie-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Movie-List';
  movies=[];

  constructor(private MovieListService: MovieListService) {}

  ngOnInit() {
    this.movies = this.MovieListService.getMovies();
    console.log(this.movies);
  }

  
}

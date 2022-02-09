import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
  })
export class MovieListService {

  constructor() { }

  movieList = [
    {od: 1, title: 'The Godfather', year: '1972', director: 'Francis Ford Coppola'},
    {id: 2, title: 'Millers Crossing', year: '1990', director:'The Coen Brothers'},
    {id: 3, title: 'Millers Crossing', year:'1954', director: 'Alfred Hitchcock'},
    {id: 4, title: 'Whiplash', year: '2014', director: 'Damien Chazelle'} 
   ];

   getMovies(){
     return this.movieList;
   }
}
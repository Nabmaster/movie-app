import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs";
import { IMovie } from "../../interface/IMovie";

@Injectable()
export class MovieApiProvider {
  private baseUrl: string = "../../assets/api/movies.json";

  movies: IMovie[];

    constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello MovieApiProvider Provider");
  }

  getMovies(): Observable {
    return this.http.get(`${this.baseUrl}`);
  }
}

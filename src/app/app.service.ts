import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = environment.Url;
  constructor(private http: HttpClient) { }

  findOne(url: string): Observable<any> {
    return this.get(url);
  }

  findAll(url: string): Observable<any[]> {
    return this.get(url);
  }

  private get(url: string): any {
    return this.http.get<any>(this.baseUrl + url);
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BandaDetail } from './bandaDetail';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private apiUrl = environment.baseUrl

constructor(private http: HttpClient) { }

getBandas(): Observable<BandaDetail[]>{
  return this.http.get<BandaDetail[]>(this.apiUrl);
}

}

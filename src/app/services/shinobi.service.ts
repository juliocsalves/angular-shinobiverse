import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Shinobi {
	nome: string;
	aldeia: string;
	equipe: string;
	cla: string;
	rank: string;
	img: string;
	jutsus: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ShinobiService {
  private jsonUrl = '/assets/shinobis.json';

  constructor(private http: HttpClient) {}

  getShinobis(): Observable<Shinobi[]> {
    return this.http.get<Shinobi[]>(this.jsonUrl);
  }
}

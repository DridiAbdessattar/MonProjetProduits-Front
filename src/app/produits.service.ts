import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProduitsService {
url = 'http://localhost:3000/Produit/';
  constructor(private http: HttpClient) { }
getAll(): Observable <Produit[]> {
  return this.http.get<Produit[]> (this.url);

}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  url: string = 'https://restcountries.eu/rest/v2/lang/es';

  getPaises(){
    return this.http.get(this.url).pipe(
      map( (resp:any[]) => {
        return resp.map( pais => {
          return {
            nombre: pais.name,
            codigo: pais.alpha3Code
          }
        });
      } )
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  // Constructor de la clase.
  constructor(private http: HttpClient) {
    console.log('Spotify servicio listo');
  }

  // Obtiene la consulta en función al query.
  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBNAF-exE_W8-BX0WCtvj66tey4cDrRWddKy3JGOdPdKin0QvU14LEN4a5j8o0d35w2JuFZMaLl3BaUVYg'
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers });
  }

  // Obtiene a lista de actualizaciones.
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => data['albums'].items));
  }

  // Obtiene la lista de artistas buscados.
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }
}

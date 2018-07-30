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
  private getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDP7cb8K_RN-gvVhUWLdyAvdv3t4bj35KosMASZ3eDOiVzbcaGAJnO-py4ZxbY9uF0-PhaIof-zrRe0BiE'
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
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  // Obtiene la lista de artistas buscados.
  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }
}

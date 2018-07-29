import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify servicio listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDC3I7xj0WmrMf4fXTb6CXakqF_-cUU4uSPVr8kMZWbrYRZX7zWC8NxQ3xz_-JE0UM08DYvUnxehm9z9dU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}

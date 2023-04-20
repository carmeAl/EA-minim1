import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ID, Amigos } from '../interfaces/amigo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AmigosService {
  
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;

    
  }

  getListAmigos(): Observable<Amigos[]> {
    const myApiUrl: string = 'amigo/'
    return this.http.get<Amigos[]>(`${this.myAppUrl}${myApiUrl}`)
  }

  deleteAmigo(id: ID): Observable<void> {
    const myApiUrl: string = 'amigo/'
    return this.http.delete<void>(`${this.myAppUrl}${myApiUrl}${id}`)

  }

  crateAmigo(amigo: Amigos): Observable<Amigos> {
    const myApiUrl: string = 'amigo/'
    return this.http.post<Amigos>(`${this.myAppUrl}${myApiUrl}`, amigo);
  }

  getAmigo(id: string): Observable<Amigos> {
    const myApiUrl: string = 'amigo/';
    return this.http.get<Amigos>(`${this.myAppUrl}${myApiUrl}${id}`);
  }

  updateAmigo(id: string, amigo: Amigos): Observable<Amigos> {
    const myApiUrl: string = 'amigo/';
    return this.http.put<Amigos>(`${this.myAppUrl}${myApiUrl}${id}`, amigo);
  }

  postAmigosOfUser(idUser:string,idAmigo:string):Observable<Amigos>{
    const myApiUrl: string = 'amigo/'
    return this.http.put<Amigos>(`${this.myAppUrl}${myApiUrl}${idUser}/${idAmigo}`,{
      "idUser":`${idUser}`,
      "idAmigo":`${idAmigo}`
  });
  }


}
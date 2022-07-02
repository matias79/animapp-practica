import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datos, Ianimapp } from './interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {

  apikey: string = "wNa1kJTsbhQ26aLwtQx3OZLjJdq2eNkj";
  resultados: datos[] = [];

  constructor(private http: HttpClient) { }

  buscarGifs(query:string){
    this.http.get<Ianimapp>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apikey}&q=${query}&limit=10`)
      .subscribe(resp =>{
        this.resultados = resp.data;
      })
  }
//en el metodo  al poner .data se genera error para eliminar en el verbo get se pone any

}

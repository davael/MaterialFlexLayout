import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const url = environment.APIUrl;
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    return this.httpClient.get<any>(url + 'Usuarios');
  }
  getByIdUser(id: number){
    return this.httpClient.get<any>(url + 'Usuarios/' + id);
  }
  updateUser(id: number, value: any){
    return this.httpClient.put(url + 'Usuarios/'+id,value);
  }
  addUser(user:any){
    return this.httpClient.post(url + 'Usuarios',user);
  }
}

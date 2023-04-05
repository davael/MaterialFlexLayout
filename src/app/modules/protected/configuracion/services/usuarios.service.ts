import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment.prod';
import {IUserGet} from '../interfaces/user-get';
import { IUserPut } from '../interfaces/user-put';
import { IUserPost } from '../interfaces/user-post';

const url = environment.APIUrl;
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get<IUserGet[]>(url + 'Usuarios');
  }
  getByIdUser(id: number) {
    return this.httpClient.get<IUserGet>(url + 'Usuarios/' + id);
  }
  updateUser(id: number, value: IUserPut) {
    return this.httpClient.put(url + 'Usuarios/' + id, value);
  }
  addUser(user: IUserPost) {
    return this.httpClient.post(url + 'Usuarios', user);
  }
}

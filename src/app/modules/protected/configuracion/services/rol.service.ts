import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { RolGet } from '../interfaces/rol-get';

const url = environment.APIUrl;
@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpClient: HttpClient) { }



  getAllRoles(){
    return this.httpClient.get<RolGet[]>(url + 'Roles')
  }
  getSelectedRoles(){
    return this.httpClient.get<RolGet[]>(url + 'Roles/Select')
  }
  updateRol(id: number, value: any){
    return this.httpClient.put(url + 'Roles/'+id,value)
  }

  addRol(rol:any){
    return this.httpClient.post(url + 'Roles',rol);
  }

  deleteRol(id: number){
    return this.httpClient.delete(url + 'Roles/'+ id);
  }
}

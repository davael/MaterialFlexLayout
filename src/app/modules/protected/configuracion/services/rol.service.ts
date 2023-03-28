import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const url = environment.APIUrl;
@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpClient: HttpClient) { }



  getAllRoles(){
    return this.httpClient.get<any>(url + 'Roles')
  }
}

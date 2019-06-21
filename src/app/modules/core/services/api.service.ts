import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from '../../../../interfaces/user.interface';
import {UserListInterface} from '../../../../interfaces/user-list.interface';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<UserListInterface> {
    return this.http.get<UserListInterface>('https://reqres.in/api/users?page=' + page);
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get(`https://reqres.in/api/users/${id}`)
      .pipe(map((response: any) => response.data));
  }

}

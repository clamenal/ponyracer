import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserModel } from './models/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authenticationApiUrl = 'https://ponyracer.ninja-squad.com/api/users/authentication';

  private http = inject(HttpClient);

  authenticate(login: string, password: string): Observable<UserModel> {
    return this.http.post<UserModel>(this.authenticationApiUrl, { login, password });
  }
}

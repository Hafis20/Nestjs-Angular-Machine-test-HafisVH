import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserObj } from 'src/app/schemas/user.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(): Observable<UserObj[]> {
    return this.http.get<UserObj[]>(`${environment.apiUrl}/getUsers`);
  }

  // For adding the user
  addUser(data: UserObj): Observable<{}> {
    console.log(data,'from add');
    return this.http.post('', data);
  }

  // For Editing the user
  editUser(data: UserObj): Observable<{}> {
    return this.http.put('', data);
  }

  // For deleting the user
  deleteUser(userId: object) {
    return this.http.delete('', userId);
  }

}

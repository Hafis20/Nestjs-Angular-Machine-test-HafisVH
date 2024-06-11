import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserObj } from 'src/app/schemas/user.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserOperationsService {

  constructor(private http: HttpClient) { }

  // This is for any action occur we have to update the table
  private isAnyChangeOccurSubject = new BehaviorSubject<boolean>(false);
  isAnyChangeOccur$: Observable<boolean> = this.isAnyChangeOccurSubject.asObservable();

  // Set if any change occur
  setAnyChangeOccur(value: boolean): void {
    this.isAnyChangeOccurSubject.next(value);
  }


  // Get all users
  getAllUsers(): Observable<UserObj[]> {
    return this.http.get<UserObj[]>(`${environment.apiUrl}/getUsers`);
  }

  // For adding the user
  addUser(data: UserObj): Observable<{}> {
    return this.http.post(`${environment.apiUrl}/addUser`, data);
  }

  // For Editing the user
  editUser(data: UserObj): Observable<{}> {
    return this.http.put(`${environment.apiUrl}/updateUser`, data);
  }

  // For deleting the user
  deleteUser(userId: object) {
    return this.http.post(`${environment.apiUrl}/deleteUser`, userId);
  }

}

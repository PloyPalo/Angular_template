import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { reqLogin, resLogin } from "../../@core/data/user-login";

@Injectable({
  providedIn: "root",
})
export class ApiLoginService {
  constructor(private http: HttpClient) {}
  usersLogin(body: reqLogin): Observable<resLogin> {
    return this.http.post<resLogin>(`${environment.Url}/users/login`, body);
  }
}

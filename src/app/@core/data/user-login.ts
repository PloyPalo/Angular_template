import { Observable } from "rxjs";

export class reqLogin {
  username: string;
  password: string;
}

export class resLogin {
  resCode: string;
  msg: string;
  resData: resLoginData;
}

export class resLoginData {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  status: boolean;
  image: any;
  gender: string;
  phoneNumber: string;
  isDelete: boolean;
  accessToken: string;
  refreshToken: string;
  expire: string;
}

export abstract class UserLoginData {
  abstract reqLogin(): Observable<reqLogin[]>;
  abstract resLogin(): Observable<resLogin[]>;
  abstract resLoginData(): Observable<resLoginData[]>;
}

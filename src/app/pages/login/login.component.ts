import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { reqLogin } from "../../@core/data/user-login";
import { LocalService } from "../../local.service";
import { ApiLoginService } from "./api-login.service";



@Component({
  selector: "ngx-login",
  template: `<router-outlet></router-outlet>`,
})
export class LoginComponent implements OnInit, OnDestroy {
  @HostBinding("class") class = "login-box";
  valCheck: string[] = ["remember"];
  subscription: Subscription;
  public isAuthLoading = false;
  public isusername = true;
  public reqLogin: reqLogin = {
    // username: '',
    // password: ''
    username: "admin",
    password: "admin",
  };

  constructor(
    private renderer: Renderer2,
    private apiLogin: ApiLoginService,
    private router: Router,
    private localService: LocalService
  ) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  OnInit() {
    this.renderer.addClass(document.querySelector("app-root"), "login-page");
    this.localService.clearToken();
  }
  OnDestroy() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
  login() {
    this.isAuthLoading = true;
    const body = {
        username: this.reqLogin.username,
        password: this.reqLogin.password
    };

    console.log('body->', body);

    this.apiLogin.usersLogin(body).subscribe(
        async (res) => {
            if (res.resCode === '0000') {
                this.localService.setToken(res.resData.accessToken);
                this.localService.setRefreshToken(res.resData.refreshToken);
                this.localService.setTokenExpire(res.resData.expire);

                this.localService.setProfile(res.resData);

                await Swal.fire({
                    icon: 'success',
                    title: 'เข้าสู่ระบบสำเร็จ',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.isAuthLoading = false;

                await this.router.navigate(['/app/pages/dashboard']);
            } else {
                console.log('no pass');
            }
        },
        (err) => {
            console.log('err->', err);
            Swal.fire({
                icon: 'error',
                title: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
                showConfirmButton: false,
                timer: 2000
            });
            this.isAuthLoading = false;
            this.reqLogin.password = '';
        }
    );
}
}

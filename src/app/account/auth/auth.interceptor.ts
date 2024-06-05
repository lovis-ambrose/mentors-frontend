import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(
    private authService: AuthenticationService
  ){}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if(token){
      const authReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ${token}'
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
};

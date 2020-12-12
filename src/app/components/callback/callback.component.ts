import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public jwtHelper: JwtHelperService,
    private router:Router
  ) {

  }
  ngOnInit(): void {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    const tokenHash = window.location.hash;
    const token = tokenHash && tokenHash.split('=')[1]
    const tokenObj = token && this.jwtHelper.decodeToken(token);
    
    localStorage.setItem('token', token);
    
    if (tokenObj.emails.filter((email:any) => {
      return email === 'm.cisneros@distillery.com';
    }).length ) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['account']);
    }

  }

}

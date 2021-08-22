import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 messageError: string | undefined 
  constructor(private fa:AuthService ,private route:Router) { }

  ngOnInit(): void {
  }

  login(f: { value: any; }){
    // console.log(f.value)
    let data=f.value
    this.fa.signIn(data.email,data.password).then(()=>{
   //console.log("login !")
   this.route.navigate(['/'])
    }).catch(()=>{
   
      this.messageError='incorrect email and password'
    })
   }
  
}

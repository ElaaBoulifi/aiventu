import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sa:AuthService) { }

  ngOnInit(): void {
  }
  register(f: { value: any; }){
   // console.log(f.value)
   let data=f.value
   this.sa.singUp(data.email,data.password).then(()=>{
  console.log("done !")
   }).catch(()=>{
    console.log("error !")
   })
  }

}

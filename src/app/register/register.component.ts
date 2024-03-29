import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sa:AuthService ,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
  }
  register(f: { value: any; }){
   // console.log(f.value)
   let data=f.value
   this.sa.singUp(data.email,data.password).then((user)=>{
  //console.log("done !")
  this.fs.collection("users").doc(user.user?.uid).set({
   flName:data.flName,
   email:data.email,
   bio:data.bio,
   uid:user.user?.uid

  }).then(()=>{
this.route.navigate(['/'])
  })
   }).catch(()=>{
    console.log("error !")
   })
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private af:AngularFireAuth ,private route:Router) { }

  ngOnInit(): void {
  }
  logout(){
   this.af.signOut().then(()=>{
    //console.log("logout done!")
    this.route.navigate(['login'])
     }).catch(()=>{
      console.log("error !")
     })
  }
}

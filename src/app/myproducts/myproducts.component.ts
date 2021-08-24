import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
Uid: string | undefined

  successMessage: string | undefined;
  constructor(private fs:AngularFirestore,private as:AuthService) {
    this.as.user.subscribe((user: { uid: string | undefined; })=>{
      this.Uid=user.uid
    })
   }

  ngOnInit(): void {
  }
  addproduct(f: { value: any; }){
    let data=f.value
    this.fs.collection("products").add({
title:data.title,
description:data.description,
image:data.image,
uid:this.Uid

    }).then(()=>{
this.successMessage='added !'
    })
  }

}

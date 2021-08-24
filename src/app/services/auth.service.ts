import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private fa: AngularFireAuth) {
    this.user=this.fa.user
   }



singUp(email: string,password: string){
return this.fa.createUserWithEmailAndPassword(email,password)

}

signIn(email: string,password: string){
  return this.fa.signInWithEmailAndPassword(email,password)
}

}

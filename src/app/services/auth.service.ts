import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fa: AngularFireAuth) { }



singUp(email: string,password: string){
return this.fa.createUserWithEmailAndPassword(email,password)

}

signIn(email: string,password: string){
  return this.fa.signInWithEmailAndPassword(email,password)
}

}

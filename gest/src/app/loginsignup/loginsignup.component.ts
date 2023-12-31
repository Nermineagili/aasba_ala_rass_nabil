import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrl: './loginsignup.component.css'
})
export class LoginsignupComponent implements OnInit {
  signupUsers: any[] =[];
  signupObj: any = {
    username :'' ,
    email: '' ,
    password: '' 
  }
  loginObj: any = {
    email: '' ,
    password: '' 
  }
  constructor(){

  }
  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers')
    if(localData !=null){
      this.signupUsers = JSON.parse(localData)
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      username :'' ,
      email: '' ,
      password: ''
  }}
  onLogin(){
    debugger
    const isUserExit = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExit != undefined){
      alert('User login successfully')
    }else {
      alert('Wrong credentials ')
    }
  }
 

}

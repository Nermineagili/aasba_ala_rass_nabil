import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.component.html',
  styleUrls: ['./loginsignup.component.css']
})
export class LoginsignupComponent {
  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  }
  loginObj: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      username: '',
      email: '',
      password: ''
    };
    this.onSuccessLoginOrSignUp(); // Appel de la fonction de navigation ici après l'inscription réussie
  }

  onLogin() {
    const isUserExit = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if (isUserExit != undefined) {
      alert('User login successfully');
      this.onSuccessLoginOrSignUp(); // Appeler la fonction de navigation ici
    } else {
      alert('Wrong credentials');
    }
  }

  onSuccessLoginOrSignUp() {
    this.router.navigate(['/fromtache']); // Naviguer vers la page des tâches
  }
}


import { Component } from '@angular/core';
import { RegistrationRequest } from '../models/registration-request.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  model:RegistrationRequest;

  constructor(private authService:AuthService,
    private router:Router){
    this.model={
      email:'',
      password:''
    };
  }

  onFormSubmit():void{
    this.authService.register(this.model)
    .subscribe({
      next:(response)=>{

        alert("User Registered");
        console.log(response);

        //redirect back to homepage
        this.router.navigateByUrl('/login');
      }
    });
  }
}

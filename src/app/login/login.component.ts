import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { SanityChecks } from '@angular/material/core';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userName: string;
   password: string;
   formData: FormGroup;

   constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl("admin"),
         password: new FormControl(""),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

     if(this.password!="admin"){
       alert("please enter correct password");
       console.error("wrong password");
     }

      console.log("Login userName: " + this.userName);
      console.log("Login password: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/students']);
      });
   }
}
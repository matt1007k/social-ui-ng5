import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'register',
   templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit{
   public title:string;

   constructor(){
      this.title = "Crear cuenta";
   }

   ngOnInit(){
      console.log("Componente Registro listo...");
   }
}
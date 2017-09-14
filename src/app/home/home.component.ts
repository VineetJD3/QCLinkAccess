import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName : String = "";
  password : String = "";

  onSubmit(formData : any){
    console.log(formData);
  }
  constructor() { }

  ngOnInit() {
  }

}

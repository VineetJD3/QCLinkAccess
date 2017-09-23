import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ DataServiceService ]
})
export class HomeComponent implements OnInit {

  userName : String = "";
  password : String = "";
  ninjas : any;

  onSubmit(formData : any){
    console.log(formData);
    this.dataService.validateLogin(formData).subscribe(
      (data) => this.ninjas = data
    );
  }
  constructor(private dataService : DataServiceService) { }

  ngOnInit() {
  }
  

}

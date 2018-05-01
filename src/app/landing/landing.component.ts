import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  activeTab=0;
  form: FormGroup; 
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }


  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      surname: ['', Validators.required ],
      secondSurname: ['', Validators.required ],
      DNI: ['', Validators.required ],
      DOB: ['', Validators.required ],
      gender: ['', Validators.required ],
      email: ['', Validators.required ],
      mobile: ['', Validators.required ],
      telephone: ['', Validators.required ],
      // <--- the FormControl called "name"
    });
  }

  changeTab(tab){
    this.activeTab=(this.activeTab + 1)%2;
    tab.select(this.activeTab.toString());
  }
  back(tab){
    if(this.activeTab==0)
    this.activeTab=1;
    else{
    this.activeTab=this.activeTab - 1;
    }
    tab.select(this.activeTab.toString());
  }

}

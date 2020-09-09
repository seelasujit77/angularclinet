import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drive-POC';

  profileForm = this.fb.group({
    fname: ['', Validators.required],
    lname: ['']
  });


  constructor(private fb: FormBuilder, private apiService: ApiService) { }



  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    debugger;
    this.apiService.postData(this.profileForm.value).subscribe((data)=>{
      console.log(data);
    });
  }
}




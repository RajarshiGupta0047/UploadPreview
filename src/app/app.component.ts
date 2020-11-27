import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupForm:FormGroup;
  ar:Model[]=[];
  url:any = '';
  file:any;
  name1='';
  url1:any='';
  
status=false;
ngOnInit(){
  this.signupForm=new FormGroup({
    'name':new FormControl(null,Validators.required),
    'url':new FormControl(null,Validators.required)
  })
}


  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      this.file=event.target.files[0];

      reader.onload = (event) => { 
        this.url = event.target.result;
      }
    }
  }
  
  onSubmit(){
  this.ar.push({
    name:this.signupForm.value.name,
    url:this.url
   
  }

  
  
);
this.status=true;
console.log(this.signupForm);
this.name1=this.signupForm.value.name;
this.url1=this.url;
this.signupForm.reset();

this.url='';
  }


onClear(){
  this.signupForm.reset();
  this.status=false;
}

 
}

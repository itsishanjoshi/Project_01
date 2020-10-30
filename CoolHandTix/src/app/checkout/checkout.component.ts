import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
form;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      username: ['',[
        Validators.required,
        Validators.minLength(5),   //Minimum Length
        Validators.maxLength(30),   //Max Length
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      address: ['',[Validators.required]],
      pincode: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{6}$')
      ]],
      contact: ['',[
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]]
    })
  }

  ngOnInit(): void {
    
  }
  get username(){
    return this.form.get('username');
  }
  get address(){
    return this.form.get('address');
  }
  get pincode(){
    return this.form.get('pincode');
  }
  get contact(){
    return this.form.get('contact');
  }

}

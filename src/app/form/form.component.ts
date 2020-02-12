import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  rfContact: FormGroup;

  onSubmit(form) {
    console.log(form);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {this.rfContact = this.fb.group({
    contactName: ['', [Validators.required, Validators.minLength(6)]],
    email:  ['', [Validators.required, Validators.minLength(6), Validators.email]],
    age: ['', [Validators.required, Validators.min(18)]],
    social: this.fb.group({
      facebook: ['', [Validators.required, Validators.minLength(6)]],
      twitter: '',
      website: ''
    }),
    tel:   ['', [Validators.required, Validators.pattern(/((09)+([0-9]{8})\b)/g)]]
  });
  }

}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  rfContact: FormGroup;

  onSubmit(rfContact) {
    console.log(rfContact);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rfContact = this.fb.group({
      contactName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
      facebook: '',
      twitter: '',
      website: '',
      tel: ['', [Validators.required, Validators.pattern(/((09|03|07|08|05)+([0-9]{8}))/g)]]
    });
  }

}

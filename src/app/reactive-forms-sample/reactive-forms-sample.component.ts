import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-sample',
  templateUrl: './reactive-forms-sample.component.html',
  styleUrls: ['./reactive-forms-sample.component.scss']
})
export class ReactiveFormsSampleComponent implements OnInit {
  reactiveForm!: FormGroup;
  experiences = ['junior', 'mid','senior']
  submitted: boolean = false;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    })
  }

  action(): void {
    console.log('Submitting!');
    this.submitted=true;
  }

  get name() { return this.reactiveForm.get('name'); }
  get surname() { return this.reactiveForm.get('surname'); }
  get experience() { return this.reactiveForm.get('experience'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }

}

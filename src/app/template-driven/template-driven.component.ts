import { Component, OnInit } from '@angular/core';
import { FormSenderService } from '../form-sender.service';
import { FormDataModel } from './form-data';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  experiences = ["junior", "mid", "senior"];
  model = new FormDataModel('', '', '', '', '');
  submitted: boolean = false;

  constructor(private formSenderSvc: FormSenderService) { }

  ngOnInit(): void {
  }

  action(): void {
    console.log('Submitting!');
    this.formSenderSvc.sendForm(this.model)
    this.submitted=true;
  }

}

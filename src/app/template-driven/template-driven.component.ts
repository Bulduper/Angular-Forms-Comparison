import { Component, OnInit } from '@angular/core';
import { FormData } from './form-data';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  experiences = ["junior", "mid", "senior"];
  model = new FormData('', '', '', '', '');
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  action(): void {
    console.log('Submitting!');
    this.submitted=true;
  }
}

import { Component, OnInit } from '@angular/core';
import { Formularz } from './formularz';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {
  experiences = ["junior", "mid", "senior"];
  model = new Formularz('', '', '', '', '');
  submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  action(): void {
    console.log('Submitting!');
    this.submitted=true;
  }
}

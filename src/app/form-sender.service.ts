import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormDataModel } from './template-driven/form-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormSenderService {
  url = environment.mockServerUrl;
  constructor(private readonly http: HttpClient) { }

  sendForm(form: FormDataModel): void {
    this.http.post(this.url, form).subscribe({
      next: (response) =>{
        console.log(response);
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }
}

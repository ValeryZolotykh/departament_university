import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
  constructor(private titleService: Title, private http: HttpClient) {}
  valueControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(13),
    Validators.pattern(/^[0-9+]*$/),
  ]);

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.FEEDBACK);
  }

  sendQuestions() {
    const telephone = document.getElementById('telephone') as HTMLInputElement;
    const question = document.getElementById(
      'questions'
    ) as HTMLTextAreaElement;

    const phoneValue = telephone!.value;
    const questionValue = question!.value;

    const url = 'http://lera.diploma/api/sendMail';
    const body = {
      phone: phoneValue,
      question: questionValue,
    };

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    this.http.post(url, body, { headers: headers }).subscribe(
      (success) => {
        console.log('Email sent successfully.', success);
        telephone.value = '';
        question.value = '';
      },
      (error) => {
        console.error('Failed to send email.', error);
        telephone.value = '';
        question.value = '';
      }
    );
  }
}

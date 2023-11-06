import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl  } from '@angular/forms';
import { UserNameValidator } from './user-name.validator';
import { PasswordValidator } from './password.validator';


@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'] 
})  

export class JobApplicationComponent {
  jobApplicationForm: FormGroup;
registrationForm: FormGroup<any> | undefined;
isFirstNameInvalid: any;

  constructor(private fb: FormBuilder) {
    this.jobApplicationForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: this.fb.group({
        street: [''],
      }),
      phoneNumber: [''],
      birthdate: [''],
      position: [''],
      subscribeToNewsletter: [false],
      email: [''],
      additionalEmails: this.fb.array([]), // Initialize an empty array for additional emails
      password: ['', [Validators.required, PasswordValidator]],
    });
  }

  addEmail() {
    const additionalEmails = this.jobApplicationForm.get('additionalEmails') as FormArray;
    additionalEmails.push(this.fb.group({ email: '' }));
  }

  removeEmail(index: number) {
    const additionalEmails = this.jobApplicationForm.get('additionalEmails') as FormArray;
    additionalEmails.removeAt(index);
  }

  submitApplication() {
    if (this.jobApplicationForm.valid) {
      console.log(this.jobApplicationForm.value);
    }
  }
}

import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private formBuilder = inject(NonNullableFormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  readonly authenticationFailed = signal(false);

  form = this.formBuilder.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  authenticate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { login, password } = this.form.getRawValue();

    this.userService.authenticate(login, password).subscribe({
      next: () => {
        this.authenticationFailed.set(false);
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.authenticationFailed.set(true);
      }
    });
  }
}

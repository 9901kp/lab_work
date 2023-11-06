import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.value;

  if (password && password.length >= 8) {
    const letterPattern = /[a-zA-Z]/;
    const digitPattern = /\d/; // Добавлен закрывающий слеш

    if (letterPattern.test(password) && digitPattern.test(password)) {
      return null; // Пароль валиден
    }
  }

  return { 'invalidPassword': true }; // Пароль не соответствует требованиям
}

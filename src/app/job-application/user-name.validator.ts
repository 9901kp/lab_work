import { AbstractControl } from '@angular/forms';

export function UserNameValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const forbiddenName = 'Администратор';
  if (control.value && control.value.toLowerCase() === forbiddenName.toLowerCase()) {
    return { 'forbiddenName': true };
  }
  return null;
}

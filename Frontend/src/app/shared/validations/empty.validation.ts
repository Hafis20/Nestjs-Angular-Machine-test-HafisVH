import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emptyValidation(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value: string = control.value;

        if (value.trim() !== '') {
            return null;
        }
        return { empty: true };
    }
}
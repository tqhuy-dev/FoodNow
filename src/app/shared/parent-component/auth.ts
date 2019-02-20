import { ConstantValue } from '../constant/constant';
import { FormControl, Validators } from '@angular/forms';

export class AuthComponent {
    labelUsername: String = ConstantValue.LABEL_USERNAME;
    labelPassword: String = ConstantValue.LABEL_PASSWORD;
    errorMessageUsername: String = ConstantValue.ERROR_INVALID_USERNAME;
    errorMessagePassword: String = ConstantValue.ERROR_INVALID_PASSWORD;
    placeholderUsername: String = ConstantValue.PLACEHOLDER_USERNAME;
    placeholderPassword: String = ConstantValue.PLACEHOLDER_PASSWORD;

    username = new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z0-9]*')
      ]);
      password = new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(10),
        Validators.pattern('[a-zA-Z0-9]*')
      ]);

}

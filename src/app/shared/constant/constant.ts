export class ConstantValue {
    static readonly LABEL_USERNAME: String = 'Username';
    static readonly LABEL_PASSWORD: String = 'Password';
    static readonly LABEL_CONFIRM_PASSWORD: String = 'Confirm Password';
    static readonly PLACEHOLDER_USERNAME: String = 'Enter your username here';
    static readonly PLACEHOLDER_PASSWORD: String = 'Enter your password here';
    static readonly PLACEHOLDER_CONFIRM_PASSWORD: String = 'Confirm ypur password';
    static readonly ERROR_INVALID_USERNAME: String = 'Email is invalid';
    static readonly ERROR_USERNAME_MINLENGTH: String = 'username must have more than 3 character';
    static readonly ERROR_USERNAME_MAXLENGTH: String = 'username must have fewer 20 character';
    static readonly ERROR_INVALID_PASSWORD: String = 'Password is invalid';
    static readonly STATUS_OPEN = {
        CODE: 1,
        STATUS : 'Open',
        COLOR : 'green'
    };
    static readonly STATUS_CLOSED = {
        CODE: 0,
        STATUS : 'Closed',
        COLOR : 'red'
    };
    static readonly STATUS_OVER_STOCK = {
        CODE: 2,
        STATUS : 'Active in 5 minutes',
        COLOR : 'red'
    };
}

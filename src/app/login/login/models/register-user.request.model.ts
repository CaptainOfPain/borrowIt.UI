export class RegisterUserRequestModel {
    public userName: string;
    public email: string;
    public password: string;
    public confirmPassword: string;
    public birthDate: Date;
    public firstName: string;
    public secondName: string;
    public city: string;
    public street: string;
    public postalCode: string;

    constructor(
        userName: string, 
        email: string, 
        password: string, 
        confirmPassword: string, 
        birthDate: Date, 
        firstName: string, 
        secondName: string, 
        city: string, 
        street: string, 
        postalCode: string) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.birthDate = birthDate;
        this.firstName = firstName;
        this.secondName = secondName;
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
    }
}
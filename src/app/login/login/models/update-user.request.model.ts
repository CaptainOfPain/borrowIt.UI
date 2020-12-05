export class UpdateUserRequestModel {
    public email: string;
    public birthDate: Date;
    public firstName: string;
    public secondName: string;
    public city: string;
    public street: string;
    public postalCode: string;

    constructor( 
        email: string, 
        birthDate: Date, 
        firstName: string, 
        secondName: string, 
        city: string, 
        street: string, 
        postalCode: string) {
        this.email = email;
        this.birthDate = birthDate;
        this.firstName = firstName;
        this.secondName = secondName;
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
    }
}
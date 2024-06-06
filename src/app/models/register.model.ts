interface Geolocation {
    lat: string;
    long: string;
}

interface Address {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: Geolocation;
}

interface Name {
    firstname: string;
    lastname: string;
}

class User {
    email: string;
    username: string;
    password: string;
    name: Name;
    address: Address;
    phone: string;

    constructor(
        email: string,
        username: string,
        password: string,
        name: Name,
        address: Address,
        phone: string
    ) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}
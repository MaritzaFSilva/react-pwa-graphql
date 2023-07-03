interface PersonParts {
    _id: string;
    index: number;
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    company: string;
    email: string;
    phone: string;
}

export interface Friend extends PersonParts {}

export interface Person extends PersonParts {
    friends: Friend[];
    greeting: string;
}

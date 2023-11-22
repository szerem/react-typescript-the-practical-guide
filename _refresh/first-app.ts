let userName: string | number = "Krzysztof";

userName += " Szerem";



let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

user = {
    name: 'Krzysztof',
    age: 77,
    isAdmin: true,
    id: 123
}

let hubbies1: Array<string>;
let hubbies2: string[];
hubbies1 = ['Sport', 'Cooking', 'Reading']

const API_KEY = 'abc';



function add(a: number, b: number) {
    const result = a + b;
    return result;
}

function calculation(
    a: number,
    b: number,
    calcFn: (a: number, b: number) => number
) {
    calcFn(a, b);
}

calculation(2, 5, add);


type AddFn = (a: number, b: number) => number;

function calculation2(
    a: number,
    b: number,
    calcFn: AddFn
) {
    calcFn(a, b);
}



type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

let user2: User = {
    name: 'Krzysztof',
    age: 77,
    isAdmin: true,
    id: 123
}

interface Credentials {
    password: string;
    email: string;
    name: string | number
}

interface Credentials {
    userName: string
}


let cred: Credentials
cred = {
    password: 'abc',
    email: 'test@test.pl',
    name: 'test',
    userName: 'test'
}


class AuthCredentials implements Credentials {
    userName: string;
    password: string;
    email: string;
    name: string | number;
}

function login(credentials: Credentials) {

}

login(new AuthCredentials());

//merging type
type AppUser = {
    userName: string
};
type Admin = {
    permissions: string[]
};
type AppAdmin = Admin & AppUser;


//Being Specific With Literal Types

type Role = 'admin' | 'user' | 'editor';
let role: Role;
role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';

function performAction(action: string, role: Role) {
    if (role === "admin") {
        // ...
    }
}

//Making Sense Of Generic Types

let roles: Array<Role>
roles = ['admin', 'editor']

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    },
}

const userStorage: DataStorage<User> = {
    storage: [],
    add: function (data: User): void {
        throw new Error("Function not implemented.");
    }
}


function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b,
    }
}

const newUser = merge<{ name: string }, { age: number }>({ name: "Mela" }, { age: 77 });
// newUser.
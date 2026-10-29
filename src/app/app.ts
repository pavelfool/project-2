
import { Component } from '@angular/core';

class User {
    constructor(
        public login: string,
        public password: string,
        public email: string
    ) {}
}

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    public arrUser1: User[] = [];

    public login: string = "";
    public password: string = "";
    public email: string = "";

    public getLogin(): void {
        const log = document.getElementById("login1-input") as HTMLInputElement;
        this.login = log.value;
    }

    public getPassword(): void {
        const pass = document.getElementById("password1-input") as HTMLInputElement;
        this.password = pass.value;
    }

    public getEmail(): void {
        const em = document.getElementById("email1-input") as HTMLInputElement;
        this.email = em.value;
    }

    public addUser(): void {
        this.getLogin();
        this.getPassword();
        this.getEmail();

        if (this.login.trim() === "" || this.password.trim() === "" || this.email.trim() === "") {
            alert("Fill in all fields!");
            return;
        }

        if (!this.email.includes("@")) {
            alert("Email must contain @!");
            return;
        }

        for (let i = 0; i < this.arrUser1.length; i++) {
            if (this.arrUser1[i].login.toLowerCase() === this.login.trim().toLowerCase()) {
                alert("This login already exists!");
                return;
            }

            if (this.arrUser1[i].email.toLowerCase() === this.email.trim().toLowerCase()) {
                alert("This email already exists!");
                return;
            }
        }

        const newUser = new User(
            this.login.trim(),
            this.password,
            this.email.trim()
        );

        this.arrUser1.push(newUser);
    }

    public deleteUser(index: number): void {
        this.arrUser1.splice(index, 1);
    }

    public editUser(index: number): void {
        const user = this.arrUser1[index];

        const login = prompt("Edit login", user.login);
        if (login === null) return;

        const password = prompt("Edit password", user.password);
        if (password === null) return;

        const email = prompt("Edit email", user.email);
        if (email === null) return;

        if (login.trim() === "" || password.trim() === "" || email.trim() === "") {
            alert("Fill in all fields!");
            return;
        }

        if (!email.includes("@")) {
            alert("Email must contain @!");
            return;
        }

        for (let i = 0; i < this.arrUser1.length; i++) {
            if (i !== index) {
                if (this.arrUser1[i].login.toLowerCase() === login.trim().toLowerCase()) {
                    alert("This login already exists!");
                    return;
                }

                if (this.arrUser1[i].email.toLowerCase() === email.trim().toLowerCase()) {
                    alert("This email already exists!");
                    return;
                }
            }
        }

        user.login = login.trim();
        user.password = password;
        user.email = email.trim();
    }
}

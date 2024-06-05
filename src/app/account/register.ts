export class Register {
    SERVICE: string = "Auth";
    ACTION: string = "signup";
    firstName: string;
    lastName: string
    userName: string;
    email: string;
    password: string;
    password_repeat: string;

  constructor(){
    this.userName = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.password_repeat = "";
  }
}

export class Login {
    SERVICE: string = "Auth";
    ACTION: string = "login";
    username: string;
    password: string;

    constructor(){
      this.username = "";
      this.password = "";
    }
}

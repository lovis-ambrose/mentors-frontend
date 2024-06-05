export class CreateSession {
    SERVICE: string = "Mentees";
    ACTION: string = "createSession";
    mentorId: number = 1;
    menteeId: number =1;
    question: string;

    constructor(){
        this.question = "";
    }
}

export class Mentor {
    SERVICE: string = "Mentors";
    ACTION: string = "myMentors";
    firstName: string;
    lastName: string;
    email: string;
    categoryId: string;
    skillId: string;

    constructor(){
        this.skillId = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.categoryId = "";
    }
}

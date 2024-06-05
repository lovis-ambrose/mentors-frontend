export class AddCategory {
    SERVICE: string = "Category";
    ACTION: string = "createCategory";
    // id: number;
    name: string;
    description: string;

    constructor(){
        // this.id = 0;
        this.name = "";
        this.description = "";
    }
}

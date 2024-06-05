import { Component } from '@angular/core';
import { MenteeService } from '../mentee.service';
import { CreateSession } from './create-session';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-send-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './send-request.component.html',
  styleUrl: './send-request.component.css'
})
export class SendRequestComponent {

  isSuccessfull = false;
  isLoginFailed = false;
  errorMessage = "";
  requestObj: CreateSession;

  constructor(
    private service: MenteeService
  ){
    this.requestObj = new CreateSession();
  }

  onSendRequest(){
    this.service.sendRequest(this.requestObj).subscribe(
      (response) =>{
        if(response.returnCode === 0){
          this.isLoginFailed = false;
          this.isSuccessfull = true;
          console.log("reqest sent");
          this.requestObj.question = "";
          this.errorMessage = "";
        }
        else{
          this.isLoginFailed = true;
          this.isSuccessfull = false;
          this.errorMessage = response.message || "an error occurred";
        }
      }
    );
  }

}

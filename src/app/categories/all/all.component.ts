import { Component, OnInit } from '@angular/core';
import { DashboardNavComponent } from "../dashboard-nav/dashboard-nav.component";
import { MenteeProfileComponent } from "../../mentee/mentee-profile/mentee-profile.component";
import { SendRequestComponent } from "../../mentee/send-request/send-request.component";
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "./side-bar/side-bar.component";
import { MainComponent } from "./main/main.component";
import { AddCategoryComponent } from "../mycategories/add-category/add-category.component";
import { UserComponent } from "../../account/user/user.component";
import { AddSkillComponent } from "../skills/add-skill/add-skill.component";

@Component({
    selector: 'app-all',
    standalone: true,
    templateUrl: './all.component.html',
    styleUrl: './all.component.css',
    imports: [DashboardNavComponent, MenteeProfileComponent, SendRequestComponent, CommonModule, SideBarComponent, MainComponent, AddCategoryComponent, UserComponent, AddSkillComponent]
})
export class AllComponent{

}
import { Component } from '@angular/core';
import { UserComponent } from "../../account/user/user.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dashboard-nav',
    standalone: true,
    templateUrl: './dashboard-nav.component.html',
    styleUrl: './dashboard-nav.component.css',
    imports: [UserComponent, RouterLink]
})
export class DashboardNavComponent {

}

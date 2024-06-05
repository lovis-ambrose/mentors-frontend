import { CommonModule } from '@angular/common';
import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';
import { CategoryComponent } from "../../mycategories/category/category.component";
import { MentorsComponent } from '../../../mentors/mentors.component';
import { SkillComponent } from '../../skills/skill/skill.component';
import { HireComponent } from '../../hire/hire.component';
import { PaginationComponent } from "../../pagination/pagination.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, CategoryComponent, MentorsComponent, PaginationComponent]
})

// Fetch Data Based on Selected Item:
// and use Angular's component factory resolver to dynamically load components at runtime.
export class MainComponent implements OnInit{

  selectedItem: any;

  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer!: ViewContainerRef;
  componentRef!: ComponentRef<any>; // To hold reference to the dynamically created component


  constructor(
    private selectionService: SelectionService,
  ){

  }

  ngOnInit(): void {
    this.selectionService.selectedItem$.subscribe(item => {
      this.selectedItem = item;
      this.loadComponent(item);
  });
  }


  loadComponent(item: string) {
    this.componentContainer.clear(); // Clear previous component
    let component: any;
    switch (item) {
        case 'Categories':
            component = CategoryComponent;
            break;
        case 'Skills':
            component = SkillComponent;
            break;
        case 'Hire':
          component = HireComponent;
          break;
        case 'Mentors':
            component = MentorsComponent;
            break;
        default:
            console.error('Unknown component');
            return;
    }
    this.componentRef = this.componentContainer.createComponent(component);
  }

}

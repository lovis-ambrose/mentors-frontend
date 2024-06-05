import { Component } from '@angular/core';
import { SelectionService } from '../../../services/selection.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(
    private selectionService: SelectionService
  ){}

  updateSelectedItem(item: string) {
    this.selectionService.setSelectedItem(item);
  }

}

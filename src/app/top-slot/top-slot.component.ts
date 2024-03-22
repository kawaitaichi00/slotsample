import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-slot',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './top-slot.component.html',
  styleUrl: './top-slot.component.css'
})
export class TopSlotComponent {
  @Input() between:number|undefined;
  @Input() game:number|undefined;

}

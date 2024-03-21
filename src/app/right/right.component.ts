import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './right.component.html',
  styleUrl: './right.component.css',
})
export class RightComponent {
  @Input() rightnum: number | undefined;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css',
})
export class LeftComponent {
  @Input() leftnum: number | undefined;
}

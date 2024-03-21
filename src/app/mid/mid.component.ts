import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mid',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './mid.component.html',
  styleUrl: './mid.component.css',
})
export class MidComponent {
  @Input() midnum: number | undefined;
}

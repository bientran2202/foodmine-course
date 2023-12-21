import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  imports: [CommonModule]
})
export class StarRatingComponent implements OnInit {
  ngOnInit(): void {
    if(this.selectedValue){
      this.isMouseover = false;
    }
  }
  stars: number[] = [1, 2, 3, 4, 5];
  @Input() selectedValue: number = 0;
  isMouseover = true;
  
  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
  }
  
   addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
    }
   }
  
   removeClass() {
     if (this.isMouseover) {
        this.selectedValue = 0;
     }
   }
}

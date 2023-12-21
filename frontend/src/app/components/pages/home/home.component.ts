import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CommonModule, RouterLink, StarRatingComponent]
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private fooddService:FoodService){
    this.foods = fooddService.getAll();
  }
  ngOnInit(): void {
  }
}

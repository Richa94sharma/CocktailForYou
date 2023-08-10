import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  drink: any;
  ingredientArray: any[] = [];
  measureArray: any[] = [];

  constructor(private service:RestAPIService, private router:Router) { }

  ngOnInit(): void {
    this.drinksDetailsWithImage();
  }

  drinksDetailsWithImage(): void {
    const drinkId = this.router.url.split('/').pop();
    if (drinkId) {
      this.service.getDrinkById(drinkId).subscribe((response) => {
        if (!response) return;
        this.drink = response.drinks[0];
        for(let i = 1; i <= 15; i++) {
          if (this.drink['strIngredient'+i]) {
            this.ingredientArray.push(this.drink['strIngredient'+i]);
          }
          if (this.drink['strMeasure'+i]) {
            this.measureArray.push(this.drink['strMeasure'+i]);
          }
        }
      });
    } else {
      this.router.navigate(['']);
    }
  }

}

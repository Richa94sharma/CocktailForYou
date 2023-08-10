import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  drinkList:any;
  filteredDrinkList:any[] = [];
  filteredValue = "all";
  
  constructor(private router:Router, private service:RestAPIService) { }

  ngOnInit(): void {
    let drink = this.router.url.split('/').pop();
    if (drink) {
      drink = drink.replace(/\$/g,"/");
      this.service.getDrinkList(drink).subscribe((response)=> {
        if (!response) return;
        this.drinkList = response.drinks;
        this.filteredDrinkList = response.drinks;
      })
    } else {
      this.router.navigate(['']);
    }
  }

  updateList(): void {
    if (this.filteredValue === "all") {
      this.showAll();
      return;
    }
    this.filteredDrinkList = this.drinkList.filter((list:any) => {
      const currentDrink = String(list.strAlcoholic).trim().toLowerCase().replace(' ', '_');
      if (this.filteredValue === currentDrink) {
        return true;
      }
      return false;
    });
  }

  showAll(): void {
    this.filteredDrinkList = [...this.drinkList];
  }

  showDetails(id: any): void {
    this.router.navigate(['/ingredient/'+ id]);
  }

}

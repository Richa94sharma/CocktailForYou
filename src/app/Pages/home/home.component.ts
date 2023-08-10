import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit  {

  cocktailList:any[] = [];

  constructor(private router:Router,private service:RestAPIService) { }

  ngOnInit(): void{
    this.cardCocktailList();
  }

  drinksDetails(drink: string): void{ 
    this.router.navigate(['/cocktail/'+ drink])
  }

  cardCocktailList(): void {
    this.service.getCocktailList().subscribe((data:any) => {
      for(const val of data.drinks){
        this.cocktailList.push({
          ...val,
          name: String(val.strDrink).replace(/ /g,"_").replace(/\//g,"$"), // replaced slash with doller sign
        });
      }
    });
  }

}

import { Injectable } from '@angular/core';
import { Cocktails } from './ICocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  getCocktails(): Cocktails[] {
    // retourne l'ensemble des cocktails
    return [
      {
        name: 'Mojito',
        price: 6.5,
        image:
          'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      },
      {
        name: 'Cosmopolitan',
        price: 8,
        image:
          'https://assets.afcdn.com/recipe/20180705/80274_w1024h1024c1cx2378cy1278.webp',
      },
      {
        name: 'Sex on the Beach',
        price: 7.5,
        image:
          'https://assets.afcdn.com/recipe/20221102/137001_w1024h1024c1cx1060cy707.webp',
      },
      {
        name: 'Daiquiri',
        price: 7,
        image:
          'https://assets.afcdn.com/recipe/20180705/80342_w1024h1024c1cx3308cy1508.jpg',
      },
    ];
  }
}

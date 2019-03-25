import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  //getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  //}

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(
          (heroes: Hero[]) => this.heroes = heroes);
          //function(heroes: Hero[]) { 
          //this.heroes = heroes; });
         
          //this.recepcionHeroes);
  }

  //recepcionHeroes(heroes: Hero[])  {
  //  this.heroes = heroes;
  //}

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}

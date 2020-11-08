import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes : Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros()
        .subscribe(heroes => this.heroes = heroes);
  }
}

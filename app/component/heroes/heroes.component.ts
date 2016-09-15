import { Component, OnInit } from '@angular/core';

import { Hero } from '../../class/hero';
import { HeroService } from '../../service/hero.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.html',
    styleUrls: ['heroes.css']
})

export class HeroesComponent implements OnInit {
    class = 'relative';
    path = 'heroes.html';

    heroes: Hero[];  
    selectedHero: Hero;
    
    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes
        );
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(): void {
        this.router.navigate(['/heroes', this.selectedHero.id]);
    }

    add(name: string): void {
        alert(name);
        name = name.trim();
        if(! name) return;

        this.heroService.create(name)
                        .then(hero => {
                            this.heroes.push(hero);
                            this.selectedHero = null;
                        })
    }

    delete(hero: Hero): void {
        alert('delete');
        this.heroService.delete(hero.id)
                        .then(() => {
                            this.heroes = this.heroes.filter(h => h !== hero)
                            if(this.selectedHero === hero) this.selectedHero = null; 
                        });

    }
}
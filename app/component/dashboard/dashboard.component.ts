import { Component, OnInit } from '@angular/core';

import { Hero } from '../../class/hero';
import { HeroService } from '../../service/hero.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    class = 'relative';
    path = 'dashboard.component.html';

    heroes: Hero[] = [];
    
    constructor(
        private heroService: HeroService,
        private router: Router
    ){

    }

    ngOnInit(): void {
        this.heroService.getHeroes()
                        .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/heroes', hero.id];
        this.router.navigate(link);
    }
    
}
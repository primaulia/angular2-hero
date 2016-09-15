import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../../class/hero';
import { HeroService } from '../../service/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-details.component.css']
})

export class HeroDetailComponent implements OnInit {
    class = 'relative';
    path = 'hero-detail.component.html';

    @Input()
    hero: Hero;


    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        this.route.params.forEach( (params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                            .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.heroService.update(this.hero)
                        .then(this.goBack);
    }
}
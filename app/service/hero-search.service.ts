import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../class/hero';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {

    }

    search(keyword: string): Observable<Hero[]> {
        return this.http
                    .get(`app/heroes/?name=${keyword}`)
                    .map((r: Response) => r.json().data as Hero[]);
    }
} 
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { Post } from './post.model';
import { ShoppingCart } from './shoppingcart.model';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    getAllProductForUser(userId: number) {
        return this.http.get(
            'http://127.0.0.1:5000/shoppingcart/' + Number + '/',
            {
                observe: 'response',
            },
        );

        // do a pipe and return a observable
    }
}

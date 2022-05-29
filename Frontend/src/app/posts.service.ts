import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string): void {
        const postData: Post = { title: title, content: content };
        this.http
            .post<{ name: string }>(
                'https://shopping-cart-mock-backend-default-rtdb.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response',
                },
            )
            .subscribe({
                next: (responseData) => {
                    console.log(responseData.body);
                },
                error: (error) => {
                    this.error.next(error.message);
                },
            });
    }

    fetchPosts(): Observable<Post[]> {
        return this.http
            .get<{ [key: string]: Post }>(
                'https://shopping-cart-mock-backend-default-rtdb.firebaseio.com/posts.json',
            )
            .pipe(
                map((responseData) => {
                    const postsArray: Post[] = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            postsArray.push({
                                ...responseData[key],
                                id: key,
                            });
                        }
                    }
                    return postsArray;
                }),
                catchError((errorRes: HttpErrorResponse) => {
                    return throwError(() => errorRes);
                }),
            );
    }

    deleteAllPosts(): Observable<String> {
        return this.http.delete<String>(
            'https://shopping-cart-mock-backend-default-rtdb.firebaseio.com/posts.json',
        );
    }
}

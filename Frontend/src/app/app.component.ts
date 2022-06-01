import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { PostService } from './posts.service';
import { ShoppingCart } from './shoppingcart.model';
import { ShoppingCartService } from './shoppingcart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    loadedPosts: Post[];
    isFetching: boolean;
    error: string;

    userId: number;
    ShoppingCartList: ShoppingCart[];

    private errorSub!: Subscription;

    constructor(private postsService: PostService) {
        this.loadedPosts = [];
        this.isFetching = false;
        this.error = '';
        this.userId = 123;
        this.ShoppingCartList = [];
    }

    ngOnInit() {
        this.errorSub = this.postsService.error.subscribe((errorMessage) => {
            this.error = errorMessage;
        });

        this.onFetchPosts();
    }

    onCreatePost(postData: Post) {
        // Send Http request
        this.postsService.createAndStorePost(postData.content, postData.title);
    }

    onFetchPosts() {
        // Send Http request
        this.isFetching = true;

        this.postsService.fetchPosts().subscribe({
            next: (posts: Post[]) => {
                this.loadedPosts = posts;
                this.isFetching = false;
            },
            error: (error: HttpErrorResponse) => {
                this.error = error.message;
            },
        });
    }

    onClearPosts() {
        // Send Http request
        this.postsService.deleteAllPosts().subscribe(() => {
            this.loadedPosts = [];
        });
    }

    onCloseAlert() {
        this.error = '';
        this.isFetching = false;
    }

    ngOnDestroy(): void {
        this.errorSub.unsubscribe;
    }
}

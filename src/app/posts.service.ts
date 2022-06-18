import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  constructor( private http: HttpClient ) {

  }

  createAndSavePost( title: string, content: string ) {
    let postData: Post = { title: title, content: content }
    this.http
      .post<{ name: string }>( 
        'https://ng-complete-guide-d7956-default-rtdb.firebaseio.com/posts.json', 
        postData)
          .subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              this.error.next(error)
            });
  }

  fetchPosts() {
    return this.http.get( 'https://ng-complete-guide-d7956-default-rtdb.firebaseio.com/posts.json' )
      .pipe(
        map(
          ( posts: { [id: string]: Post } ) => {
            const postsArry: Post[] = [];
            for( const key in posts ) {
              if( posts.hasOwnProperty( key ) ) {
                postsArry.push(
                  { ...posts[key], id: key }
                )
              }
            }
            return postsArry;
          }
        )
      )
  }

  deletePosts() {
    return this.http.delete( 'https://ng-complete-guide-d7956-default-rtdb.firebaseio.com/posts.json' )
  }
}

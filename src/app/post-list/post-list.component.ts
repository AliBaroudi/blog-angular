import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts: any[]
  postSubscription: Subscription

  ngOnInit() {
    this.postService = this.postService.postSubject.subscribe(
      (posts: Array<object>) => {
        this.posts = posts.reverse()
      }
    )
    this.postService.emmitPostSubject()
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe()
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

interface PostInterface {
  id: number;
  title: string;
  body: string;
}


@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
  postData: PostInterface;
  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) {
    this.postData = {} as PostInterface;
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      const url = `/posts/${this.route.snapshot.params['id']}`
      this.appService.findOne(url).subscribe(res => this.postData = res, err => {
        this.router.navigate(['404',]);
      })
    }
  }

  back(): void {
    this.router.navigate(['/',]);
  }
}

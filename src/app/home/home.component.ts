import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id: string | any;
  constructor(private router: Router) {
    this.id = '';
  }

  ngOnInit(): void {
  }

  onClickPost(): void {
    if (!isNaN(this.id) && this.id) {
      this.router.navigate(['post-details', this.id]);
    }

  }

}

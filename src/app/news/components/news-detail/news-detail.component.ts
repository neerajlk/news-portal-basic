import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  constructor() {}
  newsDetailObject;

  ngOnInit(): void {
    this.newsDetailObject = JSON.parse(localStorage.getItem('news'));
  }

  ngOnDestroy() {
    localStorage.clear()
  }
}

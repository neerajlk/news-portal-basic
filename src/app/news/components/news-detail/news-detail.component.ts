import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../core/http/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  constructor() {}
  news;

  ngOnInit(): void {
    this.news = JSON.parse(localStorage.getItem('news'));
  }
}

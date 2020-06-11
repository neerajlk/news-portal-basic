import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { NewsService } from '../../http/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  constructor(
    private newsService: NewsService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  newsList = [];
  newsForm = this.fb.group({
    country: ['in'],
    q: [''],
  });
  previousPage: number = 1;
  total: number = 0;
  pageSize: number = 10;
  pageNumber: number = 1;

  ngOnInit(): void {
    this.getNewsList();
    this.newsForm.valueChanges.pipe(debounceTime(1000)).subscribe((val) => {
      this.getNewsList();
    });
  }

  getNewsList() {
    let payload = this.newsForm.value;
    payload.page = this.pageNumber;
    payload.pageSize = this.pageSize;
    this.newsService.getNews(payload).subscribe((res) => {
      if (res) {
        this.total = res['totalResults'];
        this.newsList = res['articles'];
      }
    });
  }

  viewNewsDetails(index) {
    localStorage.setItem('news', JSON.stringify(this.newsList[index]));
    this.router.navigate(['detail'], { relativeTo: this.route });
  }

  getDataByPage(page) {
    this.pageNumber = page;
    this.getNewsList();
    return page;
  }
}

import { Injectable } from '@angular/core';

import { BaseService } from '../http/base.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private BaseService: BaseService) {}

  getNews(params) {
    return this.BaseService.GET(params);
  }
}

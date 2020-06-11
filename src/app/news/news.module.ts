import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

import { NewsService } from './http/news.service';

@NgModule({
  declarations: [NewsListComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
  ],
  exports: [NewsListComponent, NewsDetailComponent],
  providers: [NewsService],
})
export class NewsModule {}

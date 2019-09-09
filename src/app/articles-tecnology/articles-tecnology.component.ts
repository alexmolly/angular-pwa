import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-tecnology',
  templateUrl: './articles-tecnology.component.html',
  styleUrls: ['./articles-tecnology.component.css']
})
export class ArticlesTecnologyComponent implements OnInit {

  articles$: Observable<any>;
  
  constructor(private newsapi: NewsapiService) { }

  ngOnInit() {
    this.articles$ = this.newsapi.getArticlesTecnology();
  }

}

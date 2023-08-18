import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../interfaces/news.interface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsitemComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  isPhoto = false;
  title = 'News Title';
  date = '2023-06-15';
  img_url = '../../../../assets/img/departament.jpg';
  text = 'News text...';
  paragraphs: string[] = this.text.split('\n');

  newsId: string | null = '';
  newsItem$: Observable<News> = new Observable<News>();

  ngOnInit() {
    this.newsId = this.route.snapshot.paramMap.get('id');
    console.log('http://lera.diploma/api/news' + this.newsId);

    this.newsItem$ = this.http
      .get<any>('http://lera.diploma/api/oneNews/' + this.newsId)
      .pipe(map((response) => response.list));

    if (this.img_url != '') {
      this.isPhoto = true;
      console.log('fota est');
    }
  }
}

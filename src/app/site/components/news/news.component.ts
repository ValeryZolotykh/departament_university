import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';
import { map, Observable } from 'rxjs';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {
  constructor(private titleService: Title, private http: HttpClient) {}
  // newsList$: Observable<News[]> = new Observable<News[]>();

  newsList = [
    {
      title: 'Заразок новини',
      date: '01.01.2023',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatum nihil vel beatae nemo placeat exercitationem non, quam quas aperiam quae officia quibusdam facilis! Excepturi quos hic maxime repellat reiciendis!',
      img: 'assets/img/news/news1.jpg',
    },
    {
      title: 'Заразок новини',
      date: '01.01.2023',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatum nihil vel beatae nemo placeat exercitationem non, quam quas aperiam quae officia quibusdam facilis! Excepturi quos hic maxime repellat reiciendis!',
      img: 'assets/img/news/news1.jpg',
    },
    {
      title: 'Заразок новини',
      date: '01.01.2023',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatum nihil vel beatae nemo placeat exercitationem non, quam quas aperiam quae officia quibusdam facilis! Excepturi quos hic maxime repellat reiciendis!',
      img: 'assets/img/news/news1.jpg',
    },
    {
      title: 'Заразок новини',
      date: '01.01.2023',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatum nihil vel beatae nemo placeat exercitationem non, quam quas aperiam quae officia quibusdam facilis! Excepturi quos hic maxime repellat reiciendis!',
      img: 'assets/img/news/news1.jpg',
    },
  ];

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.NEWS);

    // this.newsList$ = this.http
    // .get<any>('http://lera.diploma/api/news')
    // .pipe(map((response) => response.list));

    let newsTitles = document.getElementsByClassName('news__item--link');
    for (let i = 0; i < newsTitles.length; i++) {
      var text = newsTitles[i].textContent;
      if (text!.length > 30) {
        var shortenedText = text!.substring(0, 30);
        (newsTitles[i] as HTMLElement).textContent = shortenedText + '...';
      }
    }

    let newsText = document.getElementsByClassName('news__item--text');
    for (let i = 0; i < newsText.length; i++) {
      var text = newsText[i].textContent;
      if (text!.length > 280) {
        var shortenedText = text!.substring(0, 280);
        (newsText[i] as HTMLElement).textContent = shortenedText + '...';
      }
    }
  }
}

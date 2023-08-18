import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';
import { HttpClient } from '@angular/common/http';
import { Magistr } from 'src/app/site/interfaces/magistr.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-magistr',
  templateUrl: './magistr.component.html',
  styleUrls: ['./magistr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagistrComponent {
  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle(PAGE_TITLES.MAGISTR);
  }

  disciplines = [
    { title: 'Інтелектуальні технології в управлінні' },
    { title: 'Комп\'ютеризоване проектування цифрових електронних схем' },
    { title: 'Мікропроцесорні системи управління технічними засобами суден' },
    { title: 'Основи наукових досліджень' },
    { title: 'Педагогіка вищої школи' },
    { title: 'Робототехнічні системи в морських технологіях' },
    { title: 'Теорія і проектування цифрових систем управління' },
    { title: 'Комп\'ютеризоване проектування цифрових електронних схем' },
    { title: 'Моделювання оптимальних і адаптивних систем управління' },
    { title: 'Робототехнічні системи в морських технологіях' },
    { title: 'Теорія і проектування цифрових систем управління' },
  ];

  // magistrs$: Observable<Magistr[]> = new Observable<Magistr[]>();

  ngOnInit() {
    // this.magistrs$ = this.http
    //   .get<any>('http://lera.diploma/api/magistr')
    //   .pipe(map((response) => response.list));
  }
}

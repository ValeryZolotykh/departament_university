import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';
import { map, Observable } from 'rxjs';
import { Vidguki } from '../../interfaces/vidguki.interface';

@Component({
  selector: 'app-vidguki',
  templateUrl: './vidguki.component.html',
  styleUrls: ['./vidguki.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VidgukiComponent {
  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle(PAGE_TITLES.REVIEWS);
  }

  vidguki = [
    {
      name: 'Махнов Андрій',
      text: 'Я пишаюсь тим, що здобув свою першу вищу освіту на кафедрі КСУ, завдяки отриманим за роки навчання знанням я зміг працевлаштуватися в міжнародну французьку електротехнічну компанію Schneider Electric та займатися цікавими проектами в промисловості та енергетиці',
      work: 'Відділ промислової автоматизації, Schneider Electric Україна',
      img: 'assets/img/vidguki/2.jpg',
    },
    {
      name: 'Махнова (Крутякова) Олеся',
      text: 'Завдяки високому професійному рівню викладачів кафедри КСУ я здобула якісну освіту та широкий спектр знань в галузі комп’ютеризованих систем управління. Одразу після закінчення університету отримала посаду інженера-конструктора у відділі електрообладнання на Державному підприємстві Науково-промисловому комплексі газотурбобудування «Зоря»-«Машпроект». Усі проекти, в рамках яких я виконую свою роботу направлені на іноземних замовників, це є цікавий та різноманітний досвід.',
      work: 'Відділ електрообладнання в конструкторському відділенні Державного підприємства Науково-промислового комплексу газотурбобудування «Зоря»-«Машпроект»',
      img: 'assets/img/vidguki/1.jpg',
    },    
    {
      name: 'Левченко Олександр',
      text: 'Я дякую педагогічному колективу Університету за отримані знання та професіоналізм.Завдяки цьому, мною засновано одне з найпотужніших підприємств міста, в якому реалізовані здобуті навички і знання.',
      work: 'З повагою,засновник і керівник ТОВ “Лайт-Сервіс”',
      img: 'assets/img/vidguki/3.jpg',
    },
  ];

  // vidguki$: Observable<Vidguki[]> = new Observable<Vidguki[]>();

  ngOnInit() {
    //   this.vidguki$ = this.http.get<any>('http://lera.diploma/api/comments')
    //     .pipe(map((response) => response.list));
  }
}

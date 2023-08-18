import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaboratoriesComponent {
  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    config: CarouselConfig
  ) {
    config.showIndicators = false;
  }

  slides = [
    { image: 'assets/img/laboratories/408_1.jpg', text: '' },
    { image: 'assets/img/laboratories/408_2.jpg', text: '' },
    { image: 'assets/img/laboratories/408.jpg', text: '' },
    { image: 'assets/img/laboratories/415_1.jpg', text: '' },
    { image: 'assets/img/laboratories/415_2.jpg', text: '' },
    { image: 'assets/img/laboratories/415_3.jpg', text: '' },
    { image: 'assets/img/laboratories/415_4.jpg', text: '' },
    { image: 'assets/img/laboratories/415.jpg', text: '' },
    { image: 'assets/img/laboratories/416a.jpg', text: '' },
  ];

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.LABORATORIES);
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView();
        }
      }
    });
  }
}

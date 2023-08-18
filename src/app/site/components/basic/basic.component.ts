import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComponent {
  constructor(private titleService: Title, config: CarouselConfig) {
    config.showIndicators = false;
  }

  slides = [
    { image: 'assets/img/main_slides/slide-1.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-2.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-3.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-4.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-6.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-7.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-8.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-9.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-10.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-11.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-12.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-13.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-14.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-15.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-16.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-17.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-18.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-19.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-20.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-21.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-22.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-23.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-24.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-25.jpg', text: '' },
    { image: 'assets/img/main_slides/slide-26.jpg', text: '' },
  ];

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.HOME);
  }
}

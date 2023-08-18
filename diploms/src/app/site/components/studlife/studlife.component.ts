import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-studlife',
  templateUrl: './studlife.component.html',
  styleUrls: ['./studlife.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudlifeComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.STUDLIFE);
  }
}

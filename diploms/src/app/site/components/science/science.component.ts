import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScienceComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.SCIENCE);
  }
}

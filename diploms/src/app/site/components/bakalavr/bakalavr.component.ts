import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-bakalavr',
  templateUrl: './bakalavr.component.html',
  styleUrls: ['./bakalavr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BakalavrComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.BAKALAVR);
  }
}

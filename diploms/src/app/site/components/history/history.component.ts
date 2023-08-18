import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.HISTORY);
  }
}

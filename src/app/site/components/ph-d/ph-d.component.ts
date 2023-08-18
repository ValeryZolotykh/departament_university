import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-ph-d',
  templateUrl: './ph-d.component.html',
  styleUrls: ['./ph-d.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhDComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.PHD);
  }
}

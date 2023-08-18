import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-abiturient',
  templateUrl: './abiturient.component.html',
  styleUrls: ['./abiturient.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbiturientComponent {
  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.ABITURIENT);
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

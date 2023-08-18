import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PAGE_TITLES } from 'src/app/constants/constants';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(PAGE_TITLES.CONTACTS);
  }
}

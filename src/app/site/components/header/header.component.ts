import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  showMenu = false;

  changeShowMenu() {
    this.showMenu = true;
    document.getElementById('header__small')!.style.marginBottom = '400px';
    if (window.innerWidth < 322) {
      document.getElementById('header__small')!.style.marginBottom = '640px';
    }
  }

  closeMenu() {
    this.showMenu = false;
    document.getElementById('header__small')!.style.marginBottom = '0';
  }
}

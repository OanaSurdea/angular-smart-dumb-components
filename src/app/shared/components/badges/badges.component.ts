import { Component, Input, OnInit } from '@angular/core';
import { IBadge } from '../../interfaces/badge.interface';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss'],
})
export class BadgesComponent implements OnInit {
  @Input() isPill: boolean;
  @Input() badges: IBadge[];

  constructor() {}

  ngOnInit() {}

  isTextDark(badgeColor: string): boolean {
    switch (badgeColor) {
      case 'warning':
      case 'info':
      case 'light':
        return true;
      default:
        return false;
    }
  }
}

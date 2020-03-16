import { Component } from '@angular/core';
import { ThemeServiceService } from 'src/services/theme-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: Array<number>;
  constructor(public themeService: ThemeServiceService) {
    this.items = this.themeService.font;
  }

  onHandleFontSize(size) {
    this.themeService.setFontBySize(size);
  }
}

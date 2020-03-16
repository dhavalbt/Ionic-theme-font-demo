import { Component } from '@angular/core';
import { ThemeServiceService } from 'src/services/theme-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: Array<{code: string, name: string}>;
  constructor(public themeService: ThemeServiceService) {
    this.items = this.themeService.color;
  }

  onHandleColor(color) {
    this.themeService.setDynamicColor(color);
  }
}

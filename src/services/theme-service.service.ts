import { Injectable, Inject, RendererFactory2, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  public renderer: Renderer2;

  color: Array<{ code: string, name: string }> = [
    {
      code: '#FF0000',
      name: 'red'
    },
    {
      code: '#000000',
      name: 'black'
    },
    {
      code: '#3880ff',
      name: 'default'
    }
  ];
  font: Array<number> = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27];
  constructor(@Inject(DOCUMENT) public document: Document,
              public rendererFactory2: RendererFactory2) {
    this.renderer = this.rendererFactory2.createRenderer(null, null);
  }

  setFontBySize(fontSize) {
    this.font.forEach(font => {
      this.renderer.removeClass(this.document.body, `font-size-${font}`);
    });
    this.renderer.addClass(this.document.body, `font-size-${fontSize}`);
  }
  setDynamicColor(color) {
    this.color.forEach(cl => {
      this.renderer.removeClass(this.document.body, cl.name);
    });
    if (color.name !== 'default') {
      this.renderer.addClass(this.document.body, color.name);
    }
  }
}

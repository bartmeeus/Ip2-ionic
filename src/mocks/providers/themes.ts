import { Injectable } from '@angular/core';
import { Theme } from '../../models/theme';


@Injectable()
export class Themes {
  themes: Theme[] = [];

  defaultTheme: any = {
    "name": "Reiskoffer",
    "description": "We gaan op reis en we nemen mee",
    "tags": "REIS",
    "themePic":"assets/imgs/logo.png"
  };

  constructor() {
    let themes = [
      {
        "name": "Reis",
        "description": "We gaan op reis en we nemen mee",
        "tags": "REIS",
        "themePic":"assets/imgs/logo.png"
      },
      {
        "name": "Winkelen",
        "description": "Waar gaan we winkelen",
        "tags": "WINKEL",
        "themePic":"assets/imgs/logo.png"
      },
      {
        "name": "Café",
        "description": "Waar gaan we op café",
        "tags": "BAR",
        "themePic":"assets/imgs/logo.png"
      }
    ];

    for (let theme of themes) {
      this.themes.push(new Theme(theme));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.themes;
    }

    return this.themes.filter((theme) => {
      for (let key in params) {
        let field = theme[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return theme;
        } else if (field == params[key]) {
          return theme;
        }
      }
      return null;
    });
  }

  add(item: Theme) {
    this.themes.push(item);
  }

  delete(item: Theme) {
    this.themes.splice(this.themes.indexOf(item), 1);
  }
}

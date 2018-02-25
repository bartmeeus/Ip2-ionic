import {Injectable} from '@angular/core';
import {Theme} from '../../models/theme';


@Injectable()
export class Themes {
  themes: Theme[] = [];

  defaultTheme: any = {
    "name": "Reiskoffer",
    "description": "We gaan op reis en we nemen mee",
    "tags": "REIS",
    "themePic": "assets/imgs/logo.png"
  };

  constructor() {
    let themes = [
      {
        "themeName": "Reis",
        "themeDescription": "We gaan op reis en we nemen mee",
        "themeTags": ["REIS", "REIZEN"],
        "themeCards": [{"name": "kaartnaam1"}, {"name": "kaartnaam2"}],
        "themeCategories": [{"name": "cat1"}, {"name": "cat2"}],
        "themeOrganiser": [{"name": "Jos", "email": "abc@egf"}]
      },
      {
        "themeName": "Winkelen",
        "themeDescription": "Waar gaan we winkelen",
        "themeTags": ["WINKEL"],
        "themeCards": [{"name": "kaartnaam1"}, {"name": "kaartnaam2"}],
        "themeCategories": [{"name": "cat1"}, {"name": "cat2"}],
        "themeOrganiser": [{"name": "Jos", "email": "abc@egf"}]
      },
      {
        "themeName": "Café",
        "themeDescription": "Waar gaan we op café",
        "themeTags": ["BAR"],
        "themeCards": [{"name": "kaartnaam1"}, {"name": "kaartnaam2"}],
        "themeCategories": [{"name": "cat1"}, {"name": "cat2"}],
        "themeOrganiser": [{"name": "Jos", "email": "abc@egf"}]

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

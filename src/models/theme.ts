import {Category} from "./category";
import {Organiser} from "./organiser";
import {Card} from "./card";

export class Theme {

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}

export interface Theme {
  // [prop: string]: any;

  themeName: string;
  themeDescription: string;
  themeTags: string[];
  themeCards: Card[];
  themeCategories: Category[];
  themeOrganizers: Organiser[];
}

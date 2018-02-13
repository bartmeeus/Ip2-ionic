import { Injectable } from '@angular/core';

import { Theme } from '../../models/theme';
import { Api } from '../api/api';

@Injectable()
export class Themes {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/themes', params);
  }

  add(item: Theme) {
  }

  delete(item: Theme) {
  }

}

/**
 *
 * MenuProvider
 *
 */

import { handleApiCall } from '../../utils/helpers';
import { GET_MENU } from '../constants';

export class MenuProvider {
  static async getMenu() {
    return handleApiCall(GET_MENU);
  }
}

/* eslint-disable */

import * as types from '../../types';

export function hideDarkModeSuccess(payload) {
  return {
    type: types.HIDE_DARK_MODE_SUCCESS,
    payload,
  };
}

export function hideDarkModeFailure(payload) {
  return {
    type: types.HIDE_DARK_MODE_FAILURE,
    payload,
  };
}

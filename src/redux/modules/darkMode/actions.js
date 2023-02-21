/* eslint-disable */

import * as types from '../../types';

export function darkModeSuccess(payload) {
  return {
    type: types.DARK_MODE_SUCCESS,
    payload,
  };
}

export function darkModeFailure(payload) {
  return {
    type: types.DARK_MODE_FAILURE,
    payload,
  };
}

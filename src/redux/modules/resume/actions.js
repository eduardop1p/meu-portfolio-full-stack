/* eslint-disable */

import * as types from '../../types';

export function resumeSuccess(payload) {
  return {
    type: types.RESUME_ACTIVE_SUCCESS,
    payload,
  };
}

export function resumeFailure(payload) {
  return {
    type: types.RESUME_ACTIVE_FAILURE,
    payload,
  };
}

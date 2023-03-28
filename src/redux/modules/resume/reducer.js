/* eslint-disable */

import * as types from '../../types';

const initialState = {
  resumeActive: false,
};

export default function resume(state = initialState, action) {
  switch (action.type) {
    case types.RESUME_ACTIVE_SUCCESS: {
      const newState = { ...initialState };
      newState.resumeActive = action.payload.resumeActive;

      return newState;
    }
    case types.RESUME_ACTIVE_FAILURE: {
      return initialState;
    }
    default: {
      return initialState;
    }
  }
}

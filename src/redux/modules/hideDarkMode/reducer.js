/* eslint-disable */

import * as types from '../../types';

const initialState = {
  hideDarkMode: false,
};

export default function hideDarkMode(state = initialState, action) {
  switch (action.type) {
    case types.HIDE_DARK_MODE_SUCCESS: {
      const newState = { ...initialState };
      newState.hideDarkMode = action.payload.hideDarkMode;

      return newState;
    }
    case types.HIDE_DARK_MODE_FAILURE: {
      return initialState;
    }
    default: {
      return initialState;
    }
  }
}

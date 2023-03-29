/* eslint-disable */

import * as types from '../../types';

const initialState = {
  darkMode: true,
};

export default function darkMode(state = initialState, action) {
  switch (action.type) {
    case types.DARK_MODE_SUCCESS: {
      return initialState;
    }
    case types.DARK_MODE_FAILURE: {
      const newState = { ...initialState };
      newState.darkMode = action.payload.darkMode;

      return newState;
    }
    default: {
      return initialState;
    }
  }
}

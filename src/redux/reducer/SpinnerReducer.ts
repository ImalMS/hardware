import {
  START_LOADING,
  END_LOADING,
  SET_SPINNER_MESSAGE,
} from '../../constant/ReduxConstant';

const initialState = {
  loading: false,
  spinnerMessage: 'Loading....',
};

function SpinnerReducer(state = initialState, action: any) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };

    case SET_SPINNER_MESSAGE:
      return {
        ...state,
        spinnerMessage: action.payload,
      };

    default:
      return state;
  }
}

export default SpinnerReducer;

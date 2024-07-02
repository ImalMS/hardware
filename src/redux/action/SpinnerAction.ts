import { END_LOADING, SET_SPINNER_MESSAGE, START_LOADING } from "../../constant/ReduxConstant";

export const startLoading =
  () => (dispatch: (arg0: {type: string}) => void) => {
    dispatch({
      type: START_LOADING,
    });
  };
export const endLoading = () => (dispatch: (arg0: {type: string}) => void) => {
  dispatch({
    type: END_LOADING,
  });
};
export const setSpinnerMessage =
  (data: any[]) => (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({
      type: SET_SPINNER_MESSAGE,
      payload: data,
    });
  };
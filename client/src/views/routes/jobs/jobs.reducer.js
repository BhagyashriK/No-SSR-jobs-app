import { GET_JOBS_SUCCESS, GET_JOBS_ERROR } from "./jobs.actionTypes";

export const initialState = {
  list: [],
  message: {}
};

export function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      return Object.assign({}, state, action.payload);
    case GET_JOBS_ERROR:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

import {
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_ERROR
} from "./job-details.actionTypes";

export const initialState = {};

export function jobDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOB_DETAILS_SUCCESS:
    case GET_JOB_DETAILS_ERROR:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

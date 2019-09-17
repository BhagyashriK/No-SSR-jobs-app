import axios from "axios";

import { showLoader, hideLoader } from "../../components/loader/loader.action";
import {
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_ERROR
} from "./job-details.actionTypes";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getJobDetails = ({ id }) => dispatch => {
  showLoader(dispatch);
  return axios(`${API_BASE_URL}jobs/${id}`)
    .then(({ data }) => {
      hideLoader(dispatch);
      dispatch({
        type: GET_JOB_DETAILS_SUCCESS,
        payload: { ...data, message: {} }
      });
    })
    .catch(error => {
      hideLoader(dispatch);
      dispatch({
        type: GET_JOB_DETAILS_ERROR,
        payload: {
          message: { type: "error", text: "Error while fetching job details" }
        }
      });
    });
};

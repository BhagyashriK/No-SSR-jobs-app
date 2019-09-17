import axios from "axios";

import { showLoader, hideLoader } from "../../components/loader/loader.action";

import { GET_JOBS_SUCCESS, GET_JOBS_ERROR } from "./jobs.actionTypes";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getJobs = () => dispatch => {
  showLoader(dispatch);
  return axios
    .get(`${API_BASE_URL}jobs`)
    .then(({ data }) => {
      const jobsData = {
        list: data,
        message: data.length > 0 ? {} : { type: "info", text: "No Jobs Found" }
      };
      hideLoader(dispatch);
      dispatch({ type: GET_JOBS_SUCCESS, payload: jobsData });
    })
    .catch(error => {
      hideLoader(dispatch);
      dispatch({
        type: GET_JOBS_ERROR,
        payload: {
          message: { type: "error", text: "Error while fetching jobs" }
        }
      });
    });
};

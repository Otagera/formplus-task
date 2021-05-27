import axios from 'axios';
import * as actionTypes from './types';

export const fetchAllTemplates = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_ALL_TEMPLATES,
      payload: { loading: true }
    });
    const config = {
      header: {
        "Content-Type": 'application.json',
      }
    }

    const { data } = await axios.get('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates', config);
    dispatch({
      type: actionTypes.GET_ALL_TEMPLATES_SUCCESS,
      payload: {
        data,
        //data: [],
        loading: false
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseByTitle = (title) => async (dispatch) => {
  try{
    dispatch({
      type: actionTypes.GET_ALL_TEMPLATES,
      payload: { title }
    });
  }catch(error) {
    console.log(error);
  }
}

export const getCategories = () => async (dispatch) => {
  try{
    dispatch({
      type: actionTypes.GET_CATEGORIES
    });
  }catch(error) {
    console.log(error);
  }
}

export const searchTemplatesByName = (searchQuery) => async (dispatch) => {
  try{
    dispatch({
      type: actionTypes.SEARCH_BY_NAME,
      payload: { searchQuery }
    });
  }catch(error) {
    console.log(error);
  }
}

export const setSelectedCategory = (category) => async (dispatch) => {
  try{
    dispatch({
      type: actionTypes.SET_CATEGORY,
      payload: { category }
    });
  }catch(error) {
    console.log(error);
  }
}

export const setSelectedOrder = (order) => async (dispatch) => {
  try{
    dispatch({
      type: actionTypes.SET_ORDER,
      payload: { order }
    });
  }catch(error) {
    console.log(error);
  }
}

export const setSelectedDate = (date) => async (dispatch) => {
  try{
    dispatch({
      type: actionTypes.SET_DATE,
      payload: { date }
    });
  }catch(error) {
    console.log(error);
  }
}
import * as actionTypes from "../actions/types";
import { templates } from '../dummyData';
const defaultState = {
  categories: ["All", "Health", "E-commerce", "Education"],
  orders: ["Default", "Ascending", "Descending"],
  dates: ["Default", "Ascending", "Descending"],
  selectedCategory: "All",
  selectedOrder: "Default",
  selectedDate: "Default",
  templates: templates
};
const compareFunction = (key, order = "asc") => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA =
      typeof a[key] === "string"
        ? a[key].toUpperCase()
        : key === 'date'
        ? new Date(a[key])
        : a[key];
    const varB =
      typeof b[key] === "string"
        ? b[key].toUpperCase()
        : key === 'date'
        ? new Date(b[key])
        : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }

    return order === "desc" ? comparison * -1 : comparison;
  };
};

export const templatesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TEMPLATES:
      return {
        ...state,
        loadingTemplates: action.payload.loading,
      };
    case actionTypes.GET_ALL_TEMPLATES_SUCCESS:
      return {
        ...state,
        loadingTemplates: action.payload.loading,
        allTemplates: action.payload.data,
        templates: action.payload.data,
      };
      /* return {
        ...state,
        loadingTemplates: action.payload.loading,
        allTemplates: state.templates,
      }; */
    case actionTypes.GET_CATEGORIES:
      return state;
    case actionTypes.SEARCH_BY_NAME:
      const { allTemplates: allTemplatesSearch } = state;
      const { searchQuery } = action.payload;
      let filteredTemplatesSQ = allTemplatesSearch.filter((temp) => {
        return temp.name.includes(searchQuery);
      });
      return {
        ...state,
        templates: filteredTemplatesSQ,
      };
    case actionTypes.SET_CATEGORY:
      const { categories, allTemplates: allTemplatesCat } = state;
      const { category } = action.payload;
      const cat = categories.includes(category) ? category : categories[0];
      let filteredTemplatesCat = allTemplatesCat;
      if (cat !== "All") {
        filteredTemplatesCat = allTemplatesCat.filter((temp) => {
          return temp.category.includes(category);
        });
      }
      return {
        ...state,
        selectedCategory: cat,
        selectedOrder: 'Default',
        selectedDate: 'Default',
        templates: filteredTemplatesCat,
      };
    case actionTypes.SET_ORDER:
      const { orders, templates: templatesOrd } = state;
      const { order } = action.payload;
      const ord = orders.includes(order) ? order : orders[0];
      let filteredTemplatesOrd = templatesOrd;
      if (ord !== "Default") {
        filteredTemplatesOrd = [...templatesOrd].sort(
          compareFunction("name", ord === "Descending" ? "desc" : "asc")
        );
      }
      return {
        ...state,
        selectedOrder: ord,
        templates: filteredTemplatesOrd,
      };
    case actionTypes.SET_DATE:
      const { dates, templates: templatesDat } = state;
      const { date } = action.payload;
      const dat = dates.includes(date) ? date : dates[0];
      let filteredTemplatesDat = templatesDat;
      if (dat !== "Default") {
        filteredTemplatesDat = [...templatesDat].sort(
          compareFunction("created", dat === "Descending" ? "desc" : "asc")
        );
      }
      return {
        ...state,
        selectedDate: dat,
        templates: filteredTemplatesDat,
      };
    default:
      return state;
  }
};

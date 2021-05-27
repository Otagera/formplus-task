import * as actionTypes from "../actions/types";

const defaultState = {
  categories: ["All", "Health", "E-commerce", "Education"],
  orders: ["Default", "Ascending", "Descending"],
  dates: ["Default", "Ascending", "Descending"],
  selectedCategory: "All",
  selectedOrder: "Default",
  selectedDate: "Default",
  templates: []/*[
    {
      category: ["E-commerce", "Education"],
      created: "2021-05-25T18:13:47.680747",
      description: "nostrud nulla culpa eiusmod exercitation",
      link: "https://formpl.us/templates",
      name: "occaecat aliquip voluptate",
    },
    {
      category: ["Health", "Education"],
      created: "2021-05-26T18:13:46.176370",
      description: "irure cillum labore culpa adipiscing",
      link: "https://formpl.us/templates",
      name: "adipiscing eiusmod Lorem",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2021-05-26T18:13:45.873002",
      description: "amet, incididunt laborum. nulla labore",
      link: "https://formpl.us/templates",
      name: "ullamco laboris cupidatat",
    },
    {
      category: ["Health", "Education"],
      created: "2021-05-26T18:13:45.891958",
      description: "aliquip elit, velit consectetur commodo",
      link: "https://formpl.us/templates",
      name: "cillum Lorem fugiat",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2021-05-26T18:13:45.994480",
      description: "mollit dolor magna adipiscing exercitation",
      link: "https://formpl.us/templates",
      name: "aliquip reprehenderit voluptate",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.079783",
      description: "nulla pariatur. dolore amet, tempor",
      link: "https://formpl.us/templates",
      name: "proident, cillum elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.948610",
      description: "fugiat velit aliquip deserunt eiusmod",
      link: "https://formpl.us/templates",
      name: "dolore magna occaecat",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.937051",
      description: "nostrud consequat. aliquip culpa proident,",
      link: "https://formpl.us/templates",
      name: "cupidatat voluptate consequat.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.919656",
      description: "occaecat proident, eiusmod nulla labore",
      link: "https://formpl.us/templates",
      name: "culpa aliquip labore",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.151360",
      description: "eiusmod tempor ullamco proident, magna",
      link: "https://formpl.us/templates",
      name: "consectetur dolore deserunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.195667",
      description: "dolore laborum. officia magna dolor",
      link: "https://formpl.us/templates",
      name: "aliquip cillum veniam,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.173396",
      description: "laborum. cillum dolor cupidatat laboris",
      link: "https://formpl.us/templates",
      name: "labore tempor aliqua.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.984432",
      description: "veniam, minim fugiat Excepteur nostrud",
      link: "https://formpl.us/templates",
      name: "adipiscing tempor irure",
    },
    {
      category: ["Health", "E-commerce"],
      created: "2021-05-26T18:13:45.532017",
      description: "dolor deserunt laborum. nulla aliqua.",
      link: "https://formpl.us/templates",
      name: "fugiat adipiscing",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.853071",
      description: "pariatur. aliquip proident, velit irure",
      link: "https://formpl.us/templates",
      name: "culpa voluptate magna",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.941058",
      description: "reprehenderit elit, amet, consectetur Excepteur",
      link: "https://formpl.us/templates",
      name: "labore minim veniam,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.181576",
      description: "pariatur. Lorem nulla irure cillum",
      link: "https://formpl.us/templates",
      name: "nulla irure minim",
    },
    {
      category: ["Health", "E-commerce"],
      created: "2021-05-26T18:13:45.539719",
      description: "consequat. Lorem labore consectetur magna",
      link: "https://formpl.us/templates",
      name: "mollit exercitation",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.095387",
      description: "ipsum voluptate veniam, nulla elit,",
      link: "https://formpl.us/templates",
      name: "dolor voluptate tempor",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.220726",
      description: "exercitation proident, aliquip laboris amet,",
      link: "https://formpl.us/templates",
      name: "mollit culpa cupidatat",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.886773",
      description: "incididunt ipsum elit, velit Excepteur",
      link: "https://formpl.us/templates",
      name: "veniam, laboris Lorem",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.161604",
      description: "reprehenderit aliqua. dolor magna Lorem",
      link: "https://formpl.us/templates",
      name: "mollit amet, adipiscing",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.123776",
      description: "aliquip minim consequat. cillum ullamco",
      link: "https://formpl.us/templates",
      name: "fugiat ullamco elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.912163",
      description: "incididunt mollit nostrud consequat. minim",
      link: "https://formpl.us/templates",
      name: "voluptate ipsum proident,",
    },
    {
      category: ["Education", "Health"],
      created: "2021-05-26T18:13:45.533179",
      description: "consequat. irure pariatur. occaecat commodo",
      link: "https://formpl.us/templates",
      name: "nulla veniam,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.932626",
      description: "proident, dolor aliquip officia fugiat",
      link: "https://formpl.us/templates",
      name: "occaecat labore Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.900544",
      description: "fugiat consequat. officia dolor laboris",
      link: "https://formpl.us/templates",
      name: "adipiscing laboris reprehenderit",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.973379",
      description: "magna cillum deserunt cupidatat ullamco",
      link: "https://formpl.us/templates",
      name: "deserunt dolore minim",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2021-05-26T18:13:45.552719",
      description: "Excepteur amet, dolor consectetur mollit",
      link: "https://formpl.us/templates",
      name: "laborum. nostrud",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.075065",
      description: "velit ullamco magna reprehenderit pariatur.",
      link: "https://formpl.us/templates",
      name: "consectetur dolor voluptate",
    },
    {
      category: ["Health", "E-commerce"],
      created: "2021-05-26T18:13:45.546492",
      description: "ipsum ullamco incididunt voluptate reprehenderit",
      link: "https://formpl.us/templates",
      name: "consequat. ullamco",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.961468",
      description: "voluptate Lorem eiusmod incididunt fugiat",
      link: "https://formpl.us/templates",
      name: "ipsum tempor elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.878343",
      description: "culpa velit amet, consectetur minim",
      link: "https://formpl.us/templates",
      name: "fugiat minim incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.959566",
      description: "culpa cupidatat cillum consectetur Lorem",
      link: "https://formpl.us/templates",
      name: "aliqua. adipiscing dolore",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-25T18:13:47.680747",
      description: "nostrud nulla culpa eiusmod exercitation",
      link: "https://formpl.us/templates",
      name: "occaecat aliquip voluptate",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.176370",
      description: "irure cillum labore culpa adipiscing",
      link: "https://formpl.us/templates",
      name: "adipiscing eiusmod Lorem",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.873002",
      description: "amet, incididunt laborum. nulla labore",
      link: "https://formpl.us/templates",
      name: "ullamco laboris cupidatat",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.891958",
      description: "aliquip elit, velit consectetur commodo",
      link: "https://formpl.us/templates",
      name: "cillum Lorem fugiat",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.994480",
      description: "mollit dolor magna adipiscing exercitation",
      link: "https://formpl.us/templates",
      name: "aliquip reprehenderit voluptate",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.079783",
      description: "nulla pariatur. dolore amet, tempor",
      link: "https://formpl.us/templates",
      name: "proident, cillum elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.948610",
      description: "fugiat velit aliquip deserunt eiusmod",
      link: "https://formpl.us/templates",
      name: "dolore magna occaecat",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.937051",
      description: "nostrud consequat. aliquip culpa proident,",
      link: "https://formpl.us/templates",
      name: "cupidatat voluptate consequat.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.919656",
      description: "occaecat proident, eiusmod nulla labore",
      link: "https://formpl.us/templates",
      name: "culpa aliquip labore",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.151360",
      description: "eiusmod tempor ullamco proident, magna",
      link: "https://formpl.us/templates",
      name: "consectetur dolore deserunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.195667",
      description: "dolore laborum. officia magna dolor",
      link: "https://formpl.us/templates",
      name: "aliquip cillum veniam,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.173396",
      description: "laborum. cillum dolor cupidatat laboris",
      link: "https://formpl.us/templates",
      name: "labore tempor aliqua.",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.984432",
      description: "veniam, minim fugiat Excepteur nostrud",
      link: "https://formpl.us/templates",
      name: "adipiscing tempor irure",
    },
    {
      category: ["Health", "E-commerce"],
      created: "2021-05-26T18:13:45.532017",
      description: "dolor deserunt laborum. nulla aliqua.",
      link: "https://formpl.us/templates",
      name: "fugiat adipiscing",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.853071",
      description: "pariatur. aliquip proident, velit irure",
      link: "https://formpl.us/templates",
      name: "culpa voluptate magna",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.941058",
      description: "reprehenderit elit, amet, consectetur Excepteur",
      link: "https://formpl.us/templates",
      name: "labore minim veniam,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.181576",
      description: "pariatur. Lorem nulla irure cillum",
      link: "https://formpl.us/templates",
      name: "nulla irure minim",
    },
    {
      category: ["Health", "E-commerce"],
      created: "2021-05-26T18:13:45.539719",
      description: "consequat. Lorem labore consectetur magna",
      link: "https://formpl.us/templates",
      name: "mollit exercitation",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.095387",
      description: "ipsum voluptate veniam, nulla elit,",
      link: "https://formpl.us/templates",
      name: "dolor voluptate tempor",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.220726",
      description: "exercitation proident, aliquip laboris amet,",
      link: "https://formpl.us/templates",
      name: "mollit culpa cupidatat",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.886773",
      description: "incididunt ipsum elit, velit Excepteur",
      link: "https://formpl.us/templates",
      name: "veniam, laboris Lorem",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.161604",
      description: "reprehenderit aliqua. dolor magna Lorem",
      link: "https://formpl.us/templates",
      name: "mollit amet, adipiscing",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.123776",
      description: "aliquip minim consequat. cillum ullamco",
      link: "https://formpl.us/templates",
      name: "fugiat ullamco elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.912163",
      description: "incididunt mollit nostrud consequat. minim",
      link: "https://formpl.us/templates",
      name: "voluptate ipsum proident,",
    },
    {
      category: ["Education", "Health"],
      created: "2021-05-26T18:13:45.533179",
      description: "consequat. irure pariatur. occaecat commodo",
      link: "https://formpl.us/templates",
      name: "nulla veniam,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.932626",
      description: "proident, dolor aliquip officia fugiat",
      link: "https://formpl.us/templates",
      name: "occaecat labore Excepteur",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.900544",
      description: "fugiat consequat. officia dolor laboris",
      link: "https://formpl.us/templates",
      name: "adipiscing laboris reprehenderit",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.973379",
      description: "magna cillum deserunt cupidatat ullamco",
      link: "https://formpl.us/templates",
      name: "deserunt dolore minim",
    },
    {
      category: ["E-commerce", "Education"],
      created: "2021-05-26T18:13:45.552719",
      description: "Excepteur amet, dolor consectetur mollit",
      link: "https://formpl.us/templates",
      name: "laborum. nostrud",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:46.075065",
      description: "velit ullamco magna reprehenderit pariatur.",
      link: "https://formpl.us/templates",
      name: "consectetur dolor voluptate",
    },
    {
      category: ["Health", "E-commerce"],
      created: "2021-05-26T18:13:45.546492",
      description: "ipsum ullamco incididunt voluptate reprehenderit",
      link: "https://formpl.us/templates",
      name: "consequat. ullamco",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.961468",
      description: "voluptate Lorem eiusmod incididunt fugiat",
      link: "https://formpl.us/templates",
      name: "ipsum tempor elit,",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.878343",
      description: "culpa velit amet, consectetur minim",
      link: "https://formpl.us/templates",
      name: "fugiat minim incididunt",
    },
    {
      category: ["Health", "E-commerce", "Education"],
      created: "2021-05-26T18:13:45.959566",
      description: "culpa cupidatat cillum consectetur Lorem",
      link: "https://formpl.us/templates",
      name: "aliqua. adipiscing dolore",
    },
  ],*/
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

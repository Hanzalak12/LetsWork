// galleryReducer.js
import { SET_FILTERS, SET_CURRENT_PAGE, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './actions';

const initialState = {
    jsonData: [
        {
            id: 1,
            "property": "High Days Hotel",
            "category": "3 star",
            "type": "Hostel",
            "img": "https://picsum.photos/300/450"
        },
        {
            id: 2,
            "property": "Luxury Inn & Suites Lorem ipsum dolor",
            "category": "3 star",
            "type": "Hotel",
            "img": "https://picsum.photos/250"
        },
        {
            id: 3,
            "property": "Best Rates Motel",
            "category": "4 star",
            "type": "Motel",
            "img": "https://picsum.photos/600"
        },
        {
            id: 4,
            "property": "Estates Motel",
            "category": "5 star",
            "type": "Hostel",
            "img": "https://picsum.photos/400"
        },
        {
            id: 5,
            "property": "Blissful Breaks B&B Lorem ipsum",
            "category": "4 star",
            "type": "Hostel",
            "img": "https://picsum.photos/600"
        },
        {
            id: 6,
            "property": "Simply Relax Hotel",
            "category": "3 star",
            "type": "Hotel",
            "img": "https://picsum.photos/450"
        },
        {
            id: 7,
            "property": "Triple Z B&B",
            "category": "4 star",
            "type": "Motel",
            "img": "https://picsum.photos/800"
        },
        {
            id: 8,
            "property": "Living Luxury Motel",
            "category": "4 star",
            "type": "Motel",
            "img": "https://picsum.photos/600/800"
        },
        {
            id: 9,
            "property": "Adventure Stays Inn",
            "category": "5 star",
            "type": "Motel",
            "img": "https://picsum.photos/250/250"
        },
        {
            id: 10,
            "property": "Elegant Relax Hotel",
            "category": "5 star",
            "type": "Hotel",
            "img": "https://picsum.photos/350"
        },
        {
            id: 11,
            "property": "Paradise Stays Motel",
            "category": "2 star",
            "type": "Motel",
            "img": "https://picsum.photos/550"
        },
        {
            id: 12,
            "property": "Serenity Stay Suites Lorem ipsum",
            "category": "4 star",
            "type": "Hostel",
            "img": "https://picsum.photos/600/550"
        },
        {
            id: 13,
            "property": "Nest Up B&B",
            "category": "3 star",
            "type": "Motel",
            "img": "https://picsum.photos/250"
        },
        {
            id: 14,
            "property": "Refresh Hotel & Suites",
            "category": "4 star",
            "type": "Hotel",
            "img": "https://picsum.photos/650/400"
        },
        {
            id: 15,
            "property": "Comfort First Motel",
            "category": "2 star",
            "type": "Motel",
            "img": "https://picsum.photos/300/600"
        },
        {
            id: 16,
            "property": "Feet Up B&B",
            "category": "2 star",
            "type": "Hotel",
            "img": "https://picsum.photos/450/300"
        },
        {
            id: 17,
            "property": "The Best Nest B&B",
            "category": "4 star",
            "type": "Motel",
            "img": "https://picsum.photos/650/600"
        },
        {
            id: 18,
            "property": "B&B Balance",
            "category": "2 star",
            "type": "Hotel",
            "img": "https://picsum.photos/900/450"
        },
        {
            id: 19,
            "property": "Hotel Paradise Lorem ipsum dolor",
            "category": "2 star",
            "type": "Hotel",
            "img": "https://picsum.photos/650"
        },
        {
            id: 20,
            "property": "Mother's Best B&B",
            "category": "4 star",
            "type": "Hotel",
            "img": "https://picsum.photos/600/500"
        }
    ],
    filters: { category: '', type: '' },
    currentPage: 1,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
        currentPage: 1,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ADD_ITEM:
      return {
        ...state,
        jsonData: [...state.jsonData, action.payload],
      };
    case UPDATE_ITEM:
      return {
        ...state,
        jsonData: state.jsonData.map(item => item.id === action.payload.id ? action.payload : item),
      };
    case DELETE_ITEM:
      return {
        ...state,
        jsonData: state.jsonData.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default galleryReducer;

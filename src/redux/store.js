import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, searchString));

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    default:
      return state;
      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: action.payload };
  }
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
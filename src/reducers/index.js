import { combineReducers } from 'redux';
import organizations from './organizations_reducer';
import boards from './boards_reducer';
import cards from './cards_reducer';
import cardStates from './card_states_reducer';
import lists from './lists_reducer';
import scroll from './scroll_reducer';
import printLayout from './print_layout_reducer';

export default combineReducers({
  organizations,
  boards,
  cards,
  cardStates,
  lists,
  scroll,
  printLayout
});

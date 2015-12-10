export const LOAD_CARDS = 'LOAD_CARDS';
export const CHANGE_CARD = 'CHANGE_CARD';
export const CHANGE_ALL = 'CHANGE_ALL';

export function loadCards(listId) {
  return (dispatch) => {
    Trello.get('lists/' + listId + '/cards', (data) => {
      dispatch({ type: LOAD_CARDS, data });
    }, (error) => {
      console.log(error);
    });
  };
}

export function changeCard(card, checked) {
  return { type: CHANGE_CARD, card, checked }
}

export function changeAll(checked) {
  return { type: CHANGE_ALL, checked }
}

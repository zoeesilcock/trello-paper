export const LOAD_CARDS = 'LOAD_CARDS';

export function loadCards(listId) {
  return (dispatch) => {
    if (!listId) {
      return dispatch({ type: LOAD_CARDS, data: [] });
    }

    Trello.get('lists/' + listId + '/cards', (data) => {
      dispatch({ type: LOAD_CARDS, data });
    }, (error) => {
      console.log(error);
    });
  };
}

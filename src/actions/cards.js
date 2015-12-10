export const LOAD_CARDS = 'LOAD_CARDS';

export function loadCards(listId) {
  return (dispatch) => {
    Trello.get('lists/' + listId + '/cards', (data) => {
      dispatch({ type: LOAD_CARDS, data });
    }, (error) => {
      console.log(error);
    });
  };
}

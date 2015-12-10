export const CHANGE_CARD = 'CHANGE_CARD';
export const CHANGE_ALL = 'CHANGE_ALL';

export function changeCard(cardId, checked) {
  return { type: CHANGE_CARD, cardId, checked }
}

export function changeAll(cardIds, checked) {
  return { type: CHANGE_ALL, cardIds, checked }
}

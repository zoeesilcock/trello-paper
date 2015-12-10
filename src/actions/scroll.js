export const NEXT_SCROLL = 'NEXT_SCROLL';
export const PREVIOUS_SCROLL = 'PREVIOUS_SCROLL';

export function nextScroll() {
  return { type: NEXT_SCROLL };
}

export function previousScroll() {
  return { type: PREVIOUS_SCROLL };
}

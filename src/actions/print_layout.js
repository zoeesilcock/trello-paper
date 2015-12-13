export const PICK_LAYOUT = 'PICK_LAYOUT';

export function pickLayout(layout) {
  return (dispatch) => {
    dispatch({ type: PICK_LAYOUT, layout });
  };
}

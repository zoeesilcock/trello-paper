import { loadBoards } from './boards';

export const LOAD_ORGANIZATIONS = 'LOAD_ORGANIZATIONS';
export const PICK_ORGANIZATION = 'PICK_ORGANIZATION';

export function loadOrganizations() {
  return (dispatch, getState) => {
    Trello.get('/members/me/organizations', (data) => {
      dispatch({ type: LOAD_ORGANIZATIONS, data });
    }, (error) => {
      console.log(error);
    });
  };
}

export function pickOrganization(organization) {
  return (dispatch) => {
    dispatch({ type: PICK_ORGANIZATION, organization });
    dispatch(loadBoards(organization));
  };
}

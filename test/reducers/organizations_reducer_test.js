import { Map, List, fromJS } from 'immutable';
import { LOAD_ORGANIZATIONS, PICK_ORGANIZATION } from '../../src/actions/organizations';
import OrganizationsReducer from '../../src/reducers/organizations_reducer';

describe('OrganizationsReducer', () => {
  let exampleOrganization = { name: 'example' };

  describe('LOAD_ORGANIZATIONS', () => {
    it('adds the board to the list', () => {
      let action = { type: LOAD_ORGANIZATIONS, data: [exampleOrganization] };
      let state = Map({ all: List(), current: null });
      let newState = OrganizationsReducer(state, action );
      expect(newState.get('all')).to.include(fromJS(exampleOrganization));
    });
  });

  describe('PICK_ORGANIZATION', () => {
    it('sets the current board', () => {
      let action = { type: PICK_ORGANIZATION, organization: exampleOrganization };
      let state = Map({ all: List(), current: null });
      let newState = OrganizationsReducer(state, action);
      expect(newState.get('current').get('name')).to.equal(exampleOrganization.name);
    });
  });
});

import { LOAD_ORGANIZATIONS, PICK_ORGANIZATION } from '../../src/actions/organizations';
import OrganizationsReducer from '../../src/reducers/organizations_reducer';

describe('OrganizationsReducer', () => {
  let exampleOrganization = { name: 'example' };

  describe('LOAD_ORGANIZATIONS', () => {
    it('adds the board to the list', () => {
      let action = { type: LOAD_ORGANIZATIONS, data: [exampleOrganization] };
      let newState = OrganizationsReducer({ all: [] }, action );
      expect(newState.all).to.eql([exampleOrganization]);
    });
  });

  describe('PICK_ORGANIZATION', () => {
    it('sets the current board', () => {
      let action = { type: PICK_ORGANIZATION, organization: exampleOrganization };
      let newState = OrganizationsReducer({ all: [], current: null }, action);
      expect(newState.current.name).to.be(exampleOrganization.name);
    });
  });
});

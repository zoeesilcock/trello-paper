import { PICK_LAYOUT } from '../../src/actions/print_layout';
import PrintLayoutReducer from '../../src/reducers/print_layout_reducer';

describe('PrintLayoutReducer', () => {
  it('sets the current print layout', () => {
    let action = { type: PICK_LAYOUT, layout: 'some_awesome_layout' };
    let newState = PrintLayoutReducer(null, action);
    expect(newState.current).to.be(action.layout);
  });
});

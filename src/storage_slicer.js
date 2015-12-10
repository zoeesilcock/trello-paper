export default function(paths) {
  return (state) => {
    let subset = {};

    for (var key in state) {
      if (key == 'boards' || key == 'cards' || key == 'lists' || key == 'organizations') {
        subset[key] = { all: [], current: state[key].current };
      } else if (key == 'cardStates') {
        subset[key] = state[key];
      }
    }

    return subset;
  }
};

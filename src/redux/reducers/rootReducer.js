export default function rootReducer(
  currentState = {
    placholder: {}
  },
  action
) {
  switch (action.type) {
    case 'GET_PLACEHOLDER':
      return { ...currentState, placholder: action.placholder };

    default:
      return currentState;
  }
}

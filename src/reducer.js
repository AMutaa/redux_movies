const initialState = {
  messageVisibility: false,
}

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case 'TOOGLE_MESSAGE':
      return state;
    default:
      return state;
  }
}


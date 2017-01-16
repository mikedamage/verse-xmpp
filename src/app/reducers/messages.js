export default function messages(state = [], action) {
  switch (action.type) {
    case 'MESSAGE_RECEIVE':
      return [ ...state, action.data ];
    case 'MESSAGE_SEND':
      return [ ...state, action.data ];
  }

  return state;
}

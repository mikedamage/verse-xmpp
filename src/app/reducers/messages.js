export default function messages(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return [ ...state, action.data ];
    case 'SEND_MESSAGE':
      return [ ...state, action.data ];
  }

  return state;
}

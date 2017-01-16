export default function connection(state = {}, action) {
  switch (action.type) {
    case 'SERVER_CONNECT':
      return { connected: true };
    case 'SERVER_DISCONNECT':
      return { connected: false };
  }

  return state;
}

function login(state = false, action) {

  switch (action.type) {
    case 'LOGIN':
      return action.login;
    default:
      return state;
  }
}

export default login;

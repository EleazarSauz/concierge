export default (state = null, action) => {
    switch (action.type) {
      case 'selectUser':
        return action.userID
      case 'dataUser':
        return action.user
      default:
          console.log('Hello World')
        return state;
    }
  }
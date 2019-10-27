export default (state = null, action) => {
    switch (action.type) {
      case 'selectBank':
        return action.banks
      case 'dataAccount':
        return action.user
      default:
          console.log('Hello action bank :)')
        return state;
    }
  }
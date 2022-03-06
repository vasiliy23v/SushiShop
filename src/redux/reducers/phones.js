const initialState = {
    items:[],
    isLoaded: false
  };
  const phones = (state = initialState, action) => {
      if (action.type === 'SET_PHONES') {
          return {
              ...state,
              items: action.payload
          }
      }
      return state;
  };
  
  export default phones;
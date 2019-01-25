const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(payload => state.id !== payload); // ver bien la forma
    default:
      return state;
  }
};

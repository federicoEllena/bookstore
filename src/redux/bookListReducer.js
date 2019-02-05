const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'STORE_DATA': {
      return { ...state, books: payload };
    }
    default:
      return state;
  }
};

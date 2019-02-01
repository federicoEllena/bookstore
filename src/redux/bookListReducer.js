const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'STORE_DATA': {
      console.log(payload);
      return { ...state, books: payload };
    }
    default:
      return state;
  }
};

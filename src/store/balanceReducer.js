const initialState = {
  balance: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload };
    case "WITHDRAW":
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}

export default reducer;

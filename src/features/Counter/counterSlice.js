const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    inscrease(state) {
      return state + 1;
    },
    descrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { inscrease, descrease } = actions; //named export
export default reducer; //default export

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'Welcome',
};

// createAsyncThunk는 비동기 함수를 처리하는 action을 만들어 준다
const asyncUpFetch = createAsyncThunk('counterSlice/asyncUpFetch', async () => {
  //   const resp = await fetch(
  //     'https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits'
  //   );
  //   const data = await resp.json();
  return 3;
});

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
  // 비동기 작업 처리의 경우
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = 'Fail';
    });
  },
});

// console.log(counterSlice.actions);
// export default counterSlice;
// export const { up } = counterSlice.actions;
// export { asyncUpFetch };

export default counterSlice.reducer;
export const { up } = counterSlice.actions;
export { asyncUpFetch };

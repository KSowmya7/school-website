// redux/slices/admissionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const admissionsSlice = createSlice({
  name: 'admissions',
  initialState: {
    name: '',
    email: '',
    message: '',
  },
  reducers: {
    updateAdmissions: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateAdmissions } = admissionsSlice.actions;
export default admissionsSlice.reducer;

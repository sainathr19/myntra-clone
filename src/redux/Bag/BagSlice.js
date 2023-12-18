import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  username: "sainathr19",
  count: 1,
  items: [{ id: "1234", quantity: 1, size: "M" }],
};

const BagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addtobag: (state) => {
      state.count += 1;
      state.items.push({ id: "100", quantity: 2, size: "L" });
      const response = axios.post("http://localhost:5000/addtobag", state);
    },
  },
});

export default BagSlice.reducer;
export const { addtobag } = BagSlice.actions;
export const bag = (state) => state.bag;

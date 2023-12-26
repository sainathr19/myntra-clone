import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const temp = await axios.get(process.env.REACT_APP_API_BASE_URL + "/getbag", {
  params: { username: "sainathr19" },
});
const BagSlice = createSlice({
  name: "bag",
  initialState: temp.data,
  reducers: {
    addtobag: (state, { payload }) => {
      console.log(payload);
      state.count += 1;
      state.items[payload.item.id] = {
        quantity: payload.item.quantity,
        size: payload.item.size,
      };
      axios.post(process.env.REACT_APP_API_BASE_URL + "/addtobag", state);
    },
    changeqty: (state) => {
      state.items[0].quantity += 1;
      // state.items.forEach((item,index)=>{

      // })
      axios.post(process.env.REACT_APP_API_BASE_URL + "/addtobag", state);
    },
    removefrombag: (state, { payload }) => {
      console.log("delete started");
      state.count -= 1;
      delete state.items[payload.id];
      axios.post(process.env.REACT_APP_API_BASE_URL + "/addtobag", state);
    },
  },
});

export default BagSlice.reducer;
export const { addtobag, changeqty, removefrombag } = BagSlice.actions;
export const bag = (state) => state.bag;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const temp = await axios.get("http://localhost:5000/getbag", {
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
      axios.post("http://localhost:5000/addtobag", state);
    },
    changeqty: (state) => {
      state.items[0].quantity += 1;
      // state.items.forEach((item,index)=>{

      // })
      axios.post("http://localhost:5000/addtobag", state);
    },
    removefrombag: (state, { payload }) => {
      console.log("delete started");
      state.count -= 1;
      delete state.items[payload.id];
      axios.post("http://localhost:5000/addtobag", state);
    },
  },
});

export default BagSlice.reducer;
export const { addtobag, changeqty, removefrombag } = BagSlice.actions;
export const bag = (state) => state.bag;

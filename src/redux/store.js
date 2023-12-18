import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counter";
import BagSlice from "./Bag/BagSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    bag: BagSlice,
  },
});
export default store;

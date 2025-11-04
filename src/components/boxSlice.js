import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching boxes
export const fetchBoxes = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("/api/product.json");
  return response.data;
});

// Async thunk for fetching agent data
export const fetchAgentBoxes = createAsyncThunk("agent/fetch", async () => {
  const response2 = await axios.get("/api/agent-to-agent.json");
  return response2.data;
});
 
const boxSlice = createSlice({
  name: "boxes",
  initialState: {
    items: [],
    agents:[],
    loading: false,
    error: null,    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Product boxes
      .addCase(fetchBoxes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoxes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.boxes; // product.json wrapper
      })
      .addCase(fetchBoxes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Agent boxes
      .addCase(fetchAgentBoxes.pending, (state) => {
        state.loading = true;
        state.error = null;
      }) 
      .addCase(fetchAgentBoxes.fulfilled, (state, action) => {
        state.loading = false;
        state.agents = action.payload.agentData; // agent-to-agent.json wrapper
      })
      .addCase(fetchAgentBoxes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default boxSlice.reducer;

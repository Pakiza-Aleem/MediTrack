import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

/**
 * TASK 6.7 - A second slice proves the architecture scales.
 * No token code here either - the cookie rides along automatically.
 */

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/appointments");
      return data.appointments;
    } catch (err) {
      return rejectWithValue(err.response?.data?.msg ?? "Failed to load");
    }
  }
);


// TODO (Task 6.7): addAppointment -> POST /appointments, return data.appointment
export const addAppointment = createAsyncThunk(
  "appointments/add",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/appointments", body);
      return data.appointment;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.msg ?? "Failed to add appointment"
      );
    }
  }
);


// TODO (Task 6.8): cancelAppointment -> DELETE /appointments/:id, return the id
export const cancelAppointment = createAsyncThunk(
  "appointments/cancel",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/appointments/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.msg ?? "Failed to cancel appointment"
      );
    }
  }
);


const appointmentsSlice = createSlice({
  name: "appointments",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // ================= FETCH =================

      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchAppointments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // ================= ADD =================

      // TODO (Task 6.7): addAppointment.fulfilled -> state.items.unshift(action.payload)
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })


      // ================= CANCEL =================

      // TODO (Task 6.8): cancelAppointment.fulfilled -> filter the id out of state.items
      .addCase(cancelAppointment.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (appointment) => appointment._id !== action.payload
        );
      });
  },
});

export default appointmentsSlice.reducer;
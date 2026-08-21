import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

/**
 * TASK 5.2 - The four thunks. The component never touches axios.
 *
 * Notice what is NOT in this file: the token. It lives only in the cookie.
 */

export const registerUser = createAsyncThunk(
  "auth/register",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/register", body);
      return data.user;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.msg ?? "Registration failed"
      );
    }
  }
);


// TODO (Task 5.2): loginUser -> POST /auth/login, return data.user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/login", body);
      return data.user;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.msg ?? "Login failed"
      );
    }
  }
);


// TODO (Task 5.2): fetchMe -> GET /auth/me, rejectWithValue(null) on failure
export const fetchMe = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/me");
      return data.user;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);


// TODO (Task 5.2): logoutUser -> POST /auth/logout, return true
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async () => {
    await api.post("/auth/logout");
    return true;
  }
);


const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  booted: false, // has /me answered yet? stops the login page flashing
};


/**
 * TASK 5.3 - Write the builder chain with addCase ONLY (no addMatcher),
 * so every action maps to one visible reducer.
 *
 *   registerUser / loginUser : pending -> loading true, error null
 *                              fulfilled -> user, isAuthenticated true, loading false
 *                              rejected  -> error = action.payload, loading false
 *   fetchMe.fulfilled  -> user, isAuthenticated true, booted true
 *   fetchMe.rejected   -> user null, isAuthenticated false, booted true
 *   logoutUser.fulfilled -> user null, isAuthenticated false
 */
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null;
    },

    forceLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= REGISTER =================

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // ================= LOGIN =================

      // TODO (Task 5.3): loginUser.pending
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // TODO (Task 5.3): loginUser.fulfilled
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })

      // TODO (Task 5.3): loginUser.rejected
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // ================= FETCH CURRENT USER =================

      // TODO (Task 5.3): fetchMe.fulfilled
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.booted = true;
      })

      // TODO (Task 5.3): fetchMe.rejected
      .addCase(fetchMe.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.booted = true;
      })


      // ================= LOGOUT =================

      // TODO (Task 5.3): logoutUser.fulfilled
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});


export const { clearError, forceLogout } = authSlice.actions;

export default authSlice.reducer;
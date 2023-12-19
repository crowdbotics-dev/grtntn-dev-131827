import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_dcom_list = createAsyncThunk(
  "dcoms/api_v1_dcom_list",
  async payload => {
    const response = await apiService.api_v1_dcom_list(payload)
    return response.data
  }
)
export const api_v1_dcom_create = createAsyncThunk(
  "dcoms/api_v1_dcom_create",
  async payload => {
    const response = await apiService.api_v1_dcom_create(payload)
    return response.data
  }
)
export const api_v1_dcom_retrieve = createAsyncThunk(
  "dcoms/api_v1_dcom_retrieve",
  async payload => {
    const response = await apiService.api_v1_dcom_retrieve(payload)
    return response.data
  }
)
export const api_v1_dcom_update = createAsyncThunk(
  "dcoms/api_v1_dcom_update",
  async payload => {
    const response = await apiService.api_v1_dcom_update(payload)
    return response.data
  }
)
export const api_v1_dcom_partial_update = createAsyncThunk(
  "dcoms/api_v1_dcom_partial_update",
  async payload => {
    const response = await apiService.api_v1_dcom_partial_update(payload)
    return response.data
  }
)
export const api_v1_dcom_destroy = createAsyncThunk(
  "dcoms/api_v1_dcom_destroy",
  async payload => {
    const response = await apiService.api_v1_dcom_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dcomsSlice = createSlice({
  name: "dcoms",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_dcom_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dcom_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dcom_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dcom_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dcom_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dcom_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_dcom_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_dcom_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_dcom_list,
  api_v1_dcom_create,
  api_v1_dcom_retrieve,
  api_v1_dcom_update,
  api_v1_dcom_partial_update,
  api_v1_dcom_destroy,
  slice: dcomsSlice
}

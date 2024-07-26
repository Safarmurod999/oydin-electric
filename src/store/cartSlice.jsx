import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "@/const/data";

const initialState = {
  loading: false,
  name: '',
  phone_number: '',
  email: '',
  status: "",
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  bookmarks: JSON.parse(localStorage.getItem("bookMarks")) || [],
  bookmarksLength: JSON.parse(localStorage.getItem("bookMarks"))?.length || 0,
  isModalOpen: false,
  isBookMarkOpen: false
};

export const addData = createAsyncThunk(
  "data/addData",
  async ({ apiEndpoint, newData }, thunkAPI) => {
    try {
      let data = newData.cart.map(el => {
        return {
          product: el.id,
        }
      })
      const response = await axios.post(`${BASE_URL}${apiEndpoint}`, {
        name: newData.name,
        phone_number: newData.phone_number,
        email: newData.email,
        message: newData.status,
        items: data
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (initialState) => {
      initialState.cart = [];
      initialState.name = '';
      initialState.phone_number = '';
      initialState.bookmarksLength = 0;
      localStorage.removeItem("cartItems");
    },
    addBookmark: (initialState, { payload }) => {
      if (initialState.bookmarks.find(el => el.id == payload.id)) {
        localStorage.setItem("bookMarks", JSON.stringify(initialState.bookmarks.filter(bookmark => bookmark.id != payload.id)));
        return {
          ...initialState,
          bookmarks: initialState.bookmarks.filter(bookmark => bookmark.id != payload.id),
          bookmarksLength: initialState.bookmarks.filter(bookmark => bookmark.id != payload.id).length
        }
      } else {
        localStorage.setItem("bookMarks", JSON.stringify([...initialState.bookmarks, payload]));
        return {
          ...initialState,
          bookmarks: [...initialState.bookmarks, payload],
          bookmarksLength: initialState.bookmarks.length + 1
        }
      }
    },
    addItem: (initialState, { payload }) => {
      if (initialState.cart.find(el => el.id == payload.id)) {
        localStorage.setItem("cartItems", JSON.stringify(initialState.cart))
        return {
          ...initialState,
          cart: initialState.cart
        }
      } else {
        localStorage.setItem("cartItems", JSON.stringify([...initialState.cart, payload]));
        return {
          ...initialState,
          cart: [...initialState.cart, payload]
        }
      }
    },
    removeBookmark: (initialState, action) => {
      const itemId = action.payload;
      const tempCart = initialState.bookmarks.filter((bookmark) => bookmark.id !== itemId);
      localStorage.setItem("bookMarks", JSON.stringify(tempCart));
      return {
        ...initialState,
        bookmarks: tempCart,
        bookmarksLength: tempCart.length
      };
    },
    removeItem: (initialState, action) => {
      const itemId = action.payload;
      const tempCart = initialState.cart.filter((cartItem) => cartItem.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(tempCart));
      return {
        ...initialState,
        cart: tempCart,
      };
    },
    setCart: (initialState) => {
      return {
        ...initialState,
        isModalOpen: true,
        cart: JSON.parse(localStorage.getItem("bookMarks")) || [],
      }
    },
    setBookmarks: (initialState) => {
      return {
        ...initialState,
        bookmarks: JSON.parse(localStorage.getItem("bookMarks")) || [],
        bookmarksLength: JSON.parse(localStorage.getItem("bookMarks"))?.length || 0
      }
    },
    setName: (initialState, { payload }) => {
      return {
        ...initialState,
        name: payload
      }
    },
    setPhoneNumber: (initialState, { payload }) => {
      return {
        ...initialState,
        phone_number: payload
      }
    },
    setEmail: (initialState, { payload }) => {
      return {
        ...initialState,
        email: payload
      }
    },
    setStatus: (initialState, { payload }) => {
      return {
        ...initialState,
        status: payload
      }
    },
    getLength: (initialState, { payload }) => {
      return {
        ...initialState,
        bookmarksLength: payload.length
      }
    },
    setIsModalOpen: (initialState, { payload }) => {
      return {
        ...initialState,
        isModalOpen: payload
      }
    },
    setBookmarkOpen: (initialState, { payload }) => {
      return {
        ...initialState,
        isBookMarkOpen: payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = [];
        state.bookmarks = [];
        state.name = '';
        state.phone_number = '';
        state.email = '';
        state.status = ''
        localStorage.removeItem("cartItems");
      })
      .addCase(addData.rejected, (state) => {
        state.loading = false;
      });
  }
});

export const {
  clearCart,
  addBookmark,
  addItem,
  removeItem,
  removeBookmark,
  setCart,
  setBookmarks,
  setName,
  setPhoneNumber,
  setEmail,
  setStatus,
  getLength,
  setIsModalOpen,
  setBookmarkOpen,
} = cartSlice.actions;

export default cartSlice.reducer;

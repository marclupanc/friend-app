import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
  selectedFriendToDisplay: null,
  editFriend: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    addFriend: (state, { payload }) => {
      state.friends.push(payload);
    },
    removeFriend: (state, { payload }) => {
      state.friends = state.friends.filter(
        (friend) => friend.id !== payload.id
      );
    },
    selectFriendToDisplay: (state, { payload }) => {
      state.selectedFriendToDisplay = state.friends.find(
        (friend) => friend.id === payload.id
      );
    },
    updateFriend: (state, { payload }) => {
      const index = state.friends.findIndex(
        (friend) => friend.id === payload.id
      );
      if (index !== -1) {
        state.friends[index] = updatedFriend;
      }
    },
  },
});

export const { addFriend, removeFriend, selectFriendToDisplay, updateFriend } =
  friendsSlice.actions;

export default friendsSlice.reducer;

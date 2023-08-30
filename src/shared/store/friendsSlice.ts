import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Friend, FriendsState } from "./types.ts";

const initialState: FriendsState = {
  friends: [],
  selectedFriendToDisplay: {} as Friend,
};

const friendsSlice = createSlice({
  name: "friendsData",
  initialState,
  reducers: {
    addFriend: (state: FriendsState, action: PayloadAction<Friend>) => ({
      ...state,
      friends: [...state.friends, action.payload],
    }),
    updateFriend: (state: FriendsState, action: PayloadAction<Friend>) => {
      const updatedFriends = state.friends.map((friend) =>
        friend.id === action.payload.id ? action.payload : friend
      );
      return {
        ...state,
        friends: updatedFriends,
      };
    },

    removeFriend: (
      state: FriendsState,
      action: PayloadAction<{ id: string | undefined }>
    ) => {
      state.friends = state.friends.filter(
        (friend) => friend.id !== action.payload.id
      );
    },
    selectFriendToDisplay: (
      state: FriendsState,
      action: PayloadAction<{ id: string }>
    ) => {
      state.selectedFriendToDisplay = state.friends.find(
        (friend) => friend.id === action.payload.id
      )!;
    },
  },
});

export const { addFriend, removeFriend, selectFriendToDisplay, updateFriend } =
  friendsSlice.actions;

export default friendsSlice.reducer;

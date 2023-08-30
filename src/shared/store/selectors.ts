import { Friend, Friends } from "./types.ts";

export const allFriends: Friends = (state) => state.friends.friends;

export const selectedFriendToDisplaySelector: Friend = (state) =>
  state.friends.selectedFriendToDisplay;

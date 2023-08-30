import { Friend, Store } from "./types.ts";

export const allFriends = (store: Store): Friend[] => store.friends.friends;

export const selectedFriendToDisplaySelector = (store: Store): Friend =>
  store.friends.selectedFriendToDisplay;
